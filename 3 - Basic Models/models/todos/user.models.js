/*
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String,
    image : String,
    age : Number
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
*/

// This is a way to declare the schema it work perfectly but we can't add validation in this format so there is another way to add validation as well.

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
        type : String,
    },
    age: {
        type : Number,
        default : 18,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

// We can also declare schema like this so that we can add validation as well while creating the schema