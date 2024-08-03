const express = require("express");
const {connectMongoDb}  = require("./connections/Users.js");
const { UserRouter }   = require("./routes/user.js");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = process.env.port || 8000;

const app = express();

app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});

app.use(cors())
app.use(express.json());
app.use(cookieParser())

app.use('/api/user',UserRouter)

connectMongoDb("mongodb://localhost:27017/Property-Rentals")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(`Error Connecting Database - ${e}`);
  });

