"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../Controllers/userController"));

var _dataChecker = _interopRequireDefault(require("../Middlewares/dataChecker"));

var _verifyAccess = _interopRequireDefault(require("../Middlewares/verifyAccess"));

var _validator = _interopRequireDefault(require("../Middlewares/validator"));

var _verifyToken = _interopRequireDefault(require("../Middlewares/verifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.post("/signup", _validator["default"].newAccountRules(), _validator["default"].validateInput, _dataChecker["default"].validatePhoneDuplication, _userController["default"].signupUser);
userRouter.get("/signin", _userController["default"].signinUser);
userRouter.get("/all", _verifyToken["default"], (0, _verifyAccess["default"])("hospital", "admin"), _userController["default"].getAllUsers);
userRouter.get("/:id", _verifyToken["default"], (0, _verifyAccess["default"])("hospital", "admin"), _userController["default"].getOneUser);
userRouter.patch("/:id", _verifyToken["default"], (0, _verifyAccess["default"])("admin"), _userController["default"].updateOneUser);
userRouter["delete"]("/:id", _verifyToken["default"], (0, _verifyAccess["default"])("admin"), _userController["default"].deleteOneUser);
var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=userRoute.dev.js.map
