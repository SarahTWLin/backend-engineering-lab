const logger = require("../config/logger");

const errorHandler = (err, req, res, next) => {
    logger.error(
        {
            err, 
            method: req.method,
            url: req.originalUrl,
        },
        "Request failed"
    )

    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
};

module.exports = errorHandler;