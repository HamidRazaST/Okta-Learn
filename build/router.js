"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = require("./middlewares");
var services_1 = require("./services");
var router = express_1.Router();
router
    .use('/user', middlewares_1.checkAuthentication, services_1.userRouter);
exports.default = router;
