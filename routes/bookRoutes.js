import express from "express";
import protect from "../middleware/authMiddleware.js";

import { getAllBooks, getOneBook, createBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

// // Base address pe (/api/books)
// router.route("/").get(getAllBooks).post(createBook);

// // ID wale address pe (/api/books/123)
// router.route("/:id").get(getOneBook).put(updateBook).delete(deleteBook);
// Pehle aisa tha:
// router.route("/").get(getAllBooks).post(createBook);
// router.route("/:id").get(getOneBook).put(updateBook).delete(deleteBook);

// Ab aisa hoga:
router.route("/").get(protect, getAllBooks).post(protect, createBook);
router.route("/:id").get(protect, getOneBook).put(protect, updateBook).delete(protect, deleteBook);

export default router;