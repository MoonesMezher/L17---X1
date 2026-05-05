const Author = require("../models/Author");
const Book = require("../models/Book");
class AuthorController {
    getAll = async (req, res) => {
        const authors = await Author.find().populate("books");

        res.status(200).json(authors);
    }

    getById = async (req, res) => {
        const id = req.params.id;

        const author = await Author.findById(id).populate("books");

        if(!author) return res.status(404).json("Not Found");

        res.status(200).json(author);
    }

    create = async (req, res) => {
        const { name, age } = req.body;

        const author = await Author.create({ name, age });

        res.status(201).json(author)
    }

    update = async (req, res) => {
        const id = req.params.id;
        
        const author = await Author.findById(id);
        
        if(!author) return res.status(404).json("Not Found");
        
        const { name, age } = req.body;

        author.name = name || author.name;
        author.age = age || author.age;

        await author.save();

        res.status(200).json(author)
    }

    addBook = async (req, res) => {
        const authorId = req.params.id;
        
        const author = await Author.findById(authorId);
        
        if(!author) return res.status(404).json("Author Not Found");
        
        const bookId = req.body.bookId;

        const book = await Book.findById(bookId);
        
        if(!book) return res.status(404).json("Book Not Found");

        author.books = [...author.books, bookId];

        await author.save();

        res.status(200).json(author)
    }

    remove = async (req, res) => {
        const id = req.params.id;
        
        const author = await Author.findById(id);
        
        if(!author) return res.status(404).json("Not Found");

        await Author.findByIdAndDelete(id);

        res.status(200).json("Deleted")
    }
}

module.exports = new AuthorController();