import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    checkedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  },
  { timestamps: true },
);

const SubTodo = mongoose.model("SubTodo", subTodoSchema);
