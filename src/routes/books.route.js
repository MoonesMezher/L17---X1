const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books.controller");
const id = require("../middlewares/id");

router.get("/", booksController.getAll)

router.get("/statictics", booksController.getStatistics)

router.get("/:id", [id], booksController.getById)

router.post("/", booksController.add)

router.put("/:id", [id], booksController.update)

router.delete("/:id", [id], booksController.remove)

module.exports = router