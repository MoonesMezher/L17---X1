const notFound = (req, res, next) => {
    return res.status(404).json({
        message: "This Route Not Found"
    })
}

module.exports = notFound