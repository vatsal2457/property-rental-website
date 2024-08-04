import bcrypt from "bcryptjs";
import { Users } from "../models/User.js";
import jwt from "jsonwebtoken";

async function handleSignupUser(req, res) {
  /**
   * req -> data
   * check name email password
   * check if user already  exist from email
   * if not ... sighnup user
   * res -> user successfully created
   */

  let body = req.body;

  if (!body.name || !body.email || !body.password) {
    return res.json({
      message: "All fields required",
    });
  }
  body.email = body.email.toLowerCase();

  // check existing user present or not
  const existingUser = await Users.find({ email: body.email });

  if (existingUser[0] !== undefined) {
    return res.status(400).json({
      message: "Email already in Use",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(body.password, salt);

  const user = await Users.create({
    name: body.name,
    email: body.email,
    password: securePassword,
  }).catch((err) => {
    console.log("Error while creating user - ", err);
  });

  if (!user) {
    return res.json({
      message: "Error creating user",
    });
  }

  res.status(201).json({
    message: "User Created Successfully",
  });
}

async function handleLoginUser(req, res) {
  /**
   * req -> data
   * check email in db
   * if user not exist send invalid email  response
   * if user exist send access and refresh token
   * redirect to home page
   */
  console.log('cookie - ',req?.cookies?.uid)
  const body = req.body;
  body.email = body.email.toLowerCase();

  const user = await Users.find({ email: body.email });

  if (user[0] == undefined) {
    return res.status(400).json({ message: "Invalid Email" });
  } 
  else {
    const passMatch = await bcrypt.compare(body.password, user[0].password);

    if (passMatch) {

        const payload = {
        name: user[0].name,
        _id: user[0]._id
      };

      const options = {
        httpOnly:true,
        secure:false,
      }
      
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
      return res
      .cookie("uid", token,options)
      .setHeader("uid", token,options)
      .json({message:'Login Successfull'});
    } 
    else {
      res.status(400).json({message:'Invalid Password'})
    }
  }
}

export { handleSignupUser, handleLoginUser };
