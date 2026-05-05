const mongoose = require("mongoose");

const authorBookSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Types.ObjectId,
        ref: "Book"
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: "Author"
    }
}, { 
    timestamps: true 
})

module.exports = mongoose.model("AuthorBook", authorBookSchema);