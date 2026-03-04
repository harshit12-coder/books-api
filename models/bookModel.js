import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book ka title toh dena padega!"],
    },
    genre:{
      type:String,
      required:[true,"genre bharo bhai"],
    },
    author: {
      type: String,
      required: [true, "Author ka naam bhi chahiye!"],
    },
    price: {
      type: Number,
      required: [true, "Price batao bhai!"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;