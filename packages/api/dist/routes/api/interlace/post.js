"use strict";
exports.__esModule = true;
var restResponse_1 = require("../../../util/restResponse");
function default_1(req, res) {
    var _a = req.body, _b = _a.intervalA, intervalA = _b === void 0 ? [] : _b, _c = _a.intervalB, intervalB = _c === void 0 ? [] : _c;
    if (intervalA.length !== 2 || intervalB.length !== 2) {
        return (0, restResponse_1.restResponse)(res, {
            success: false,
            msg: 'must be between two arrays'
        });
    }
    var a1 = intervalA[0], a2 = intervalA[1];
    var b1 = intervalB[0], b2 = intervalB[1];
    var isInterlaced = (b1 >= a1 && b1 <= a2 && b2 > a2) || (b2 >= a1 && b2 <= a2 && b1 < a1);
    (0, restResponse_1.restResponse)(res, {
        success: true,
        data: { isInterlaced: isInterlaced }
    });
}
exports["default"] = default_1;
