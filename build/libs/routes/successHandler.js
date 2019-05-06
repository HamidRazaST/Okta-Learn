"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data, message, status) { return ({
    data: data,
    message: message || 'Success',
    status: status || 200,
    success: 'OK',
}); });
