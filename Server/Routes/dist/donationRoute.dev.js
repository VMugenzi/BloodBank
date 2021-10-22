"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _donationController = _interopRequireDefault(require("../Controllers/donationController"));

var _verifyAccess = _interopRequireDefault(require("../Middlewares/verifyAccess"));

var _verifyToken = _interopRequireDefault(require("../Middlewares/verifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var donationRouter = _express["default"].Router();

donationRouter.post("/create", _verifyToken["default"], (0, _verifyAccess["default"])("hospital"), _donationController["default"].createDonation);
donationRouter.get("/all", _donationController["default"].getAllDonations);
donationRouter.get("/:id", _donationController["default"].getOneDonation);
donationRouter.patch("/:id", _verifyToken["default"], (0, _verifyAccess["default"])("hospital"), _donationController["default"].updateOneDonation);
donationRouter["delete"]("/:id", _verifyToken["default"], (0, _verifyAccess["default"])("admin"), _donationController["default"].deleteOneDonation);
var _default = donationRouter;
exports["default"] = _default;
//# sourceMappingURL=donationRoute.dev.js.map
