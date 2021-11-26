"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var post_1 = __importDefault(require("./routes/api/sortList/post"));
var post_2 = __importDefault(require("./routes/api/interlace/post"));
var routes = express_1["default"].Router();
routes.post('/api/sortlist', post_1["default"]);
routes.post('/api/interlace', post_2["default"]);
exports["default"] = routes;
