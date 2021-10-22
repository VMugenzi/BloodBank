"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _hospitalController = _interopRequireDefault(require("../Controllers/hospitalController"));

var _dataChecker = _interopRequireDefault(require("../Middlewares/dataChecker"));

var _verifyAccessh = _interopRequireDefault(require("../Middlewares/verifyAccessh"));

var _validator = _interopRequireDefault(require("../Middlewares/validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hospitalRouter = _express["default"].Router();

hospitalRouter.post("/register", _validator["default"].newHospitalRules(), _validator["default"].validateInput, _dataChecker["default"].validateEmailDuplication, _hospitalController["default"].registerHospital);
hospitalRouter.get("/signinHospital", _hospitalController["default"].signinHospital);
hospitalRouter.get("/allh", (0, _verifyAccessh["default"])("user", "admin"), _hospitalController["default"].getAllHospitals);
hospitalRouter.get("/:id", (0, _verifyAccessh["default"])("user", "admin"), _hospitalController["default"].getOneHospital);
hospitalRouter.patch("/:id", (0, _verifyAccessh["default"])("admin"), _hospitalController["default"].updateOneHospital);
hospitalRouter["delete"]("/:id", (0, _verifyAccessh["default"])("admin"), _hospitalController["default"].deleteOneHospital);
var _default = hospitalRouter;
exports["default"] = _default;
//# sourceMappingURL=hospitalRoute.dev.js.map
