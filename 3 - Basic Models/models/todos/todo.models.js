import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    checkedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Todo = mongoose.model("Todo", todoSchema);

// We can connect the schema with other schema by giving type as refrence of other schema and ref of the file as well
