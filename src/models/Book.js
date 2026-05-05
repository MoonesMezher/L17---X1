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
}, { 
    toJSON: {
        virtuals: true
    },
    id: false,
    timestamps: true 
})

// virtuals
bookSchema.virtual("info").get(function() {
    return `${this.title} has pages ${this.pages}`
})

bookSchema.virtual("tagsLength").get(function() {
    return this.tags.length;
})
// methods
bookSchema.methods.priceByPage = function() {
    return this.price / this.pages;
}
// statics
bookSchema.statics.findByPages = function (val) {
    return this.find()
        .where("pages")
        .gte(val);
}

module.exports = mongoose.model("Book", bookSchema);