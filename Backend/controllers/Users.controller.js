import bcrypt from "bcryptjs";
import { Users } from "../models/User.js";
import jwt from "jsonwebtoken";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import { Property } from "../models/Property.js";

async function handleSignupUser(req, res) {
  
  let body = req.body;

  if (!body.name || !body.email || !body.password) {
    return res.json({
      message: "All fields required",
    });
  }
  body.email = body.email.toLowerCase();


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
  const body = req.body;
  body.email = body.email.toLowerCase();

  const user = await Users.find({ email: body.email });

  if (user[0] == undefined) {
    return res.status(400).json({ message: "Invalid Email" });
  } else {
    const passMatch = bcrypt.compare(body.password, user[0].password);

    if (passMatch) {
      const token = await user[0].generateToken();
      const options = {
        maxAge: 24 * 60 * 60 * 1000,
      };
      return res.cookie("token", token, options).json({
        message: "Login Successfull",
        user,
        token,
      });
    } else {
      res.status(400).json({ message: "Invalid Password" });
    }
  }
}

async function handleLogoutUser(req, res) {
  const token = req?.cookies?.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!decodedToken) return res.status(401).json({ message: "Unauthorized" });

  res.clearCookie("token");
  res.status(200).json({
    message: "Logout Successfull",
  });
}

async function handleAddProperty(req, resp) {
  let images = req?.files?.propertyImage;
  images = Array.from(images);

  let urls = null;
  try {
    urls = await Promise.all(
      images.map(async (item) => {
        const response = await uploadOnCloudinary(item.path);
        return response?.url;
      })
    );
  } catch (err) {
    console.log("error - ", err);
    return resp.status(500).json({ message: "files not uploaded on Server" });
  }

  const {
    fullname,
    email,
    phNumber,
    propertyType,
    sellOrRent,
    bhkType,
    area,
    floor,
    rent,
    price,
    age,
    state,
    city,
    address,
    deposit,
  } = req.body;

  await Property.create({
    fullname: fullname,
    email: email,
    phoneNo: Number(phNumber),
    propertyType: propertyType,
    sellOrRent: sellOrRent,
    bhkType: bhkType,
    area: Number(area),
    floor: Number(floor),
    expectedPrice: Number(price),
    expectedRent: Number(rent),
    deposit: Number(deposit),
    ageOfProperty: age,
    state: state,
    city: city,
    address: address,
    images: urls,
    owner: req.user.id,
  })
    .then(() => {
      return resp.status(200).json({ message: "Property Uploaded" });
    })
    .catch((err) => {
      console.log("Error while creating property - ", err?.message);
      return resp
        .status(500)
        .json({ message: "Error while creating property" });
    });
}

async function handleUserProperty(req, res) {
  const property = await Property.findOne({ owner: req.user.id }).select(
    "-_id -owner"
  );
  if (!property) {
    return res.status(404).json({ message: "You have no Properties" });
  }

  return res.status(200).json({
    property,
  });
}

async function handleDeleteProperty(req, res) {
  const propertyObject = await Property.findOne({ owner: req.user.id });
  if (!propertyObject)
    return res.status(500).json({ message: "Property not Found" });

  const images = propertyObject.images;
  try {
    await Promise.all(
      images.map(async (url) => {
        await deleteFromCloudinary(url);
      })
    );
  } catch (err) {
    console.log(err);
  }

  const property = await Property.deleteOne({ owner: req.user.id });
  if (!property)
    return res.status(500).json({ message: "Unable to Delete Property" });

  res.status(200).json({ message: "Property Deleted" });
}

async function handleGetProperties(req, res) {
  const data = req.query;
  const properties = await Property.find({
    state: data.state,
    city: data.city,
  })

if(properties[0] == undefined)
   return res.status(404).json({ message: "No Properties Found" });
  
  res.status(200).json({
    properties,
  });
}

export {
  handleSignupUser,
  handleLoginUser,
  handleLogoutUser,
  handleAddProperty,
  handleUserProperty,
  handleDeleteProperty,
  handleGetProperties,
};
