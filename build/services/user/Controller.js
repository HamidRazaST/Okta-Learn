"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libs_1 = require("../../libs");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAllUsers = function (req, res, next) {
        try {
            return res.status(200).send(libs_1.successHandler(libs_1.users, 'Success', 200));
        }
        catch (error) {
            next(error);
        }
    };
    return UserController;
}());
exports.default = new UserController();
