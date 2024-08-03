const bcrypt = require("bcryptjs");
const { Users } = require("../models/User.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "password@321@$";

async function handleSignupUser(req, res) {
  const body = req.body;
  if (!body.name || !body.email || !body.password) {
    return res.send({
      msg: "Insufficient Data",
    });
  } else {
    body.email = body.email.toLowerCase()
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(body.password, salt);

    const user = await Users.create({
      name: body.name,
      email: body.email,
      password: securePassword,
    }).catch((err) => {
      res.send("Email already in Use");
    });

    if (user) {
      res.send("User Created Successfully");
    }
  }
}

async function handleLoginUser(req, res) {
  const body = req.body;
  const response = await Users.find({ email: body.email.toLowerCase() });
  if (response[0] == undefined) {
    res.send("Invalid Email");
  } else {
    const passMatch = await bcrypt.compare(body.password, response[0].password);
    if (passMatch) {
      const payload = {
        name:response[0].name
      }
      const token = jwt.sign(payload,SECRET_KEY)
      await res.cookie("uid",token).setHeader("uid",token).send('Login')
    } else {
      res.send("Invalid Password");
    }
  }

}

module.exports = {
  handleSignupUser,
  handleLoginUser,
};
