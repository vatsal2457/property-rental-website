import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log('DB connected');
    } catch (error) {
        console.log('Error connecting mongoDB - ',error)
        process.exit(1);
    }
}