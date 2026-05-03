const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ hello: "hello", message: err.message })
}

module.exports = errorHandler