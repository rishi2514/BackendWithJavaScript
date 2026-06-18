import "dotenv/config";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";

connectDB();

/*
// It's one approach we're going to see the another approach as well

const app = express()(
    // We can add express app here as well so that we can debug the process and debug, connection between express app and DB connection from there.

    async () => {
        try {
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

            // Check for any connection error between the app and DB
            app.on("error", (error) => {
                console.log("Application not able to talk to DB. Error: ", error);
                throw error
            });
            
            // IF connection succesfull console the PORT
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on PORT: ${process.env.PORT}`)
            })

        } catch (error) {
            console.log("There is an error connecting DB: ", error);
            throw err;
        }
    }
)();
// IFFE - JS concept to execute the function imediately
*/
