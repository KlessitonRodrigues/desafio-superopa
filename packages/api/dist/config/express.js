"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("../middlewares/cors"));
var routes_1 = __importDefault(require("../routes"));
exports["default"] = (function (port) {
    if (port === void 0) { port = 3000; }
    var app = (0, express_1["default"])();
    app.use(express_1["default"].urlencoded({ extended: true }));
    app.use(express_1["default"].json());
    app.use(cors_1["default"]);
    app.use(routes_1["default"]);
    app.listen(port, function () { return console.log('port: ' + port); });
    return app;
});
