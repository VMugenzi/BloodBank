"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _hospitalController = _interopRequireDefault(require("../Controllers/hospitalController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hospitalRouter = _express["default"].Router();

hospitalRouter.post("/register", _hospitalController["default"].registerHospital);
var _default = hospitalRouter;
exports["default"] = _default;
//# sourceMappingURL=hospitalRoute.dev.js.map
