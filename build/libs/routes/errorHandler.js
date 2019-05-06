"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (err, req, res, next) {
    var error = err.error, message = err.message, status = err.status;
    var response = {
        error: error || 'Undefined',
        message: message || 'Error Ocurred',
        status: status || 500,
        timestamp: new Date(),
    };
    res.status(status).send(response);
    next();
});
