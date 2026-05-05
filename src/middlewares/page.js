const page = (req, res, next) => {
    const limit = +process.env.LIMIT;
    const page = +req.query.page || 1;

    req._page = page;
    req._limit = limit;

    next();
}

module.exports = page