"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var bodyParser = __importStar(require("body-parser"));
var libs_1 = require("./libs");
var router_1 = __importDefault(require("./router"));
var middlewares_1 = require("./middlewares");
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
        this.app = express_1.default();
    }
    Server.prototype.bootstrap = function () {
        this.initCookieParser();
        this.initCors();
        this.initBodyParser();
        this.setupRoutes();
        return this;
    };
    Server.prototype.run = function () {
        try {
            var _a = this, app = _a.app, PORT_1 = _a.config.PORT;
            app.listen(PORT_1, function () { return console.log("App is running on port " + PORT_1); });
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    };
    Server.prototype.setupRoutes = function () {
        try {
            var app = this.app;
            app.get('/health-check', middlewares_1.checkAuthentication, function (req, res, next) {
                var data = [{ 'Health Status': 'I am OK' }];
                res.status(200).send(libs_1.successHandler(data, 'Success', 200));
            });
            app.get('/login', function (req, res) {
                res.send('hi login');
            });
            app.use('/api', router_1.default);
            app.use(libs_1.notFoundRoute);
            app.use(libs_1.errorHandler);
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    };
    Server.prototype.initCookieParser = function () {
        this.app.use(cookie_parser_1.default());
    };
    Server.prototype.initCors = function () {
        this.app.use(cors_1.default());
    };
    Server.prototype.initBodyParser = function () {
        try {
            var app = this.app;
            app.use(bodyParser.json());
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    };
    return Server;
}());
exports.default = Server;
