const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    books: [{
        type: mongoose.Types.ObjectId,
        ref: "Book"
    }]
}, { timestamps: true })

module.exports = mongoose.model("Author", authorSchema);