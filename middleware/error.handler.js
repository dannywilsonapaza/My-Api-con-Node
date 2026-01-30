const { stack } = require("../routes/products");

function errorLogs(err, req, res, next) {
    console.log('errorLogs middleware');
    console.error(err)
    next(err)
}

function handlerError(err, req, res, next) {
    console.log('handlerError middleware');
    res.status(501).json({
        message: err.message,
        stack   : err.stack
    })
}

module.exports = { errorLogs, handlerError };