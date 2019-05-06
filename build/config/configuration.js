"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
var envVars = process.env;
var configuration = Object.freeze({
    PORT: envVars.PORT || '9000',
    ISSUER: envVars.ISSUER || '',
    CLIENT_ID: envVars.CLIENT_ID || '',
});
exports.default = configuration;
