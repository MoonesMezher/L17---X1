const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books.controller");
const id = require("../middlewares/id");
const asyncHandler = require("../utils/asyncHandler");
const page = require("../middlewares/page");

router.get("/", asyncHandler(booksController.getAll))

router.get("/test", asyncHandler(booksController.test))

router.get("/pagination", [page], asyncHandler(booksController.pagination))

router.get("/statictics", asyncHandler(booksController.getStatistics))

router.get("/:id", [id], asyncHandler(booksController.getById))

router.post("/", asyncHandler(booksController.add))

router.put("/:id", [id], asyncHandler(booksController.update))

router.delete("/:id", [id], asyncHandler(booksController.remove))

module.exports = router