const express = require("express");
const router = express.Router();

const authorController = require("../controllers/author.controller");
const id = require("../middlewares/id");
const asyncHandler = require("../utils/asyncHandler");

router.get("/", asyncHandler(authorController.getAll))

router.get("/:id", [id], asyncHandler(authorController.getById))

router.post("/", asyncHandler(authorController.create))

router.put("/:id/book", [id], asyncHandler(authorController.addBook))

router.put("/:id", [id], asyncHandler(authorController.update))

router.delete("/:id", [id], asyncHandler(authorController.remove))

module.exports = router