require("dotenv").config();
const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.status(200).json("Server is Healthy"))
app.use("/api/v1/books", require("./routes/books.route"))

const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB Successfully")
        app.listen(PORT, () => {
            console.log(`Server is running successfully on http://localhost:${PORT}`);
        })
    })
    .catch(err => {
        console.log("Error MongoDB:", err.message);
    })