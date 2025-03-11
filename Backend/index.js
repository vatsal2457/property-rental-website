import express from "express";
import { connectDB } from "./db/index.js";
import { UserRouter } from "./routes/user.js";
import cors from "cors";
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";


// dotenv.config();

const app = express();

app.use(cookieParser())
app.use(cors({
  origin:`${process.env.CORS_ORIGIN}`,
  credentials:true,
}));
app.use(express.urlencoded({extended:false,limit:'50mb'}))
app.use(express.json({limit: '50mb'}));




connectDB().then(() => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`Error in Starting server - `,error)
  }
});

app.use("/api/user", UserRouter);

