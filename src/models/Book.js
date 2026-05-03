const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    pages: {
        type: Number,
        default: 30
    },
    price: {
        type: Number,
        required: true
    },
    tags: {
        type: [String]
    }
}, { timestamps: true })

module.exports = mongoose.model("Book", bookSchema);;