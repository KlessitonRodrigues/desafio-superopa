"use strict";
exports.__esModule = true;
exports.restResponse = void 0;
function restResponse(res, data, status) {
    if (status === void 0) { status = 200; }
    res.status(status).send(data);
}
exports.restResponse = restResponse;
