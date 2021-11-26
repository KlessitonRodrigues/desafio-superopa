"use strict";
exports.__esModule = true;
var restResponse_1 = require("../../../util/restResponse");
function default_1(req, res) {
    var _a = req.body, _b = _a.classN, classN = _b === void 0 ? [] : _b, _c = _a.classS, classS = _c === void 0 ? [] : _c;
    if (classN.length <= 1 || classS.length <= 1) {
        return (0, restResponse_1.restResponse)(res, {
            success: false,
            msg: 'needs two or more values to compare'
        });
    }
    var data = {
        classN: classN.sort(function (a, b) { return a - b; }),
        classS: classS
            .map(function (str) { return str.toLocaleLowerCase(); })
            .sort(function (a, b) { return (a < b ? -1 : 1); })
    };
    (0, restResponse_1.restResponse)(res, { success: true, data: data });
}
exports["default"] = default_1;
