"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var OktaJwtVerifier = require('@okta/jwt-verifier');
var ISSUER = config_1.config.ISSUER, CLIENT_ID = config_1.config.CLIENT_ID;
var oktaJwtVerifier = new OktaJwtVerifier({
    issuer: ISSUER,
    clientId: CLIENT_ID,
});
exports.default = (function (req, res, next) {
    var accessToken = req.headers.authorization || '';
    return (oktaJwtVerifier
        .verifyAccessToken(accessToken)
        .then(function (jwt) {
        console.log(jwt);
        req.jwt = jwt;
        next();
    })
        .catch(function (err) {
        next({
            error: 'Unauthorized Access',
            message: err.message,
            status: 401,
        });
    }));
});
