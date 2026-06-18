import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        );
        console.log(`\n MongoDB connected \n DB HOST: ${res.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed: ", error);
        process.exit(1);
    }
};

export default connectDB;
