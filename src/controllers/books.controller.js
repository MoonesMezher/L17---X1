const Book = require("../models/Book")

class BooksController {
    getAll = async (req, res) => {
        const books = await Book.find().select("-__v -price");

        res.status(200).json(books);
    }

    test = async (req, res) => {
        const books = await Book.find()
            .where("pages")
            .gte(500)

        res.status(200).json(books);
    }

    pagination = async (req, res) => {
        const page = req._page;
        const limit = req._limit;

        /* fun(); */

        const total = await Book.countDocuments();
        const pages = Math.ceil(total / limit);
        const next = page < pages;
        const prev = page > 1;

        const books = await Book.find()
            .skip((page - 1) * limit)
            .limit(limit)

        res.status(200).json({
            total,
            count: books.length,
            pages,
            page,
            next,
            prev,
            books
        });
    }

    getById = async (req, res) => {
        const id = req.params.id;

        const book = await Book.findById(id)

        if(!book) return res.status(404).json("Not Found");

        res.status(200).json(book)
    }

    getStatistics = async (req, res) => {
        const count = await Book.countDocuments()
        const books = await Book.find()

        const avg = books.reduce((a, b) => a + b.price, 0) / count

        res.status(200).json({
            count,
            avg
        })
    }

    add = async (req, res) => {
        const { title, pages, tags, price } = req.body;

        const book = await Book.create({ title, pages, tags, price })

        res.status(201).json(book)
    }

    update = async (req, res) => {
        const { title, pages, tags, price } = req.body;

        const id = req.params.id;

        const book = await Book.findById(id)

        if(!book) return res.status(404).json("Not Found");

        const updatedBook = await Book.findByIdAndUpdate(id, { title, pages, tags, price }, { new: true }) 

        res.status(200).json(updatedBook)
    }

    remove = async (req, res) => {
        const id = req.params.id;

        const book = await Book.findById(id)

        if(!book) return res.status(404).json("Not Found");

        await Book.findOneAndDelete(id)

        res.status(200).json("Deleted")
    }
}

module.exports = new BooksController();