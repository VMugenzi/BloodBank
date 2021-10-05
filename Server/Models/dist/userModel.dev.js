"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    require: [true, "firstname is required"]
  },
  lastName: String,
  gender: {
    type: String,
    "enum": ["female", "male"]
  },
  dob: {
    type: Date,
    require: true
  },
  bloodGroup: String,
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    require: true
  },
  password: {
    type: String,
    "default": 12345
  },
  status: {
    type: String,
    "enum": ["active", "inactive"]
  }
});

var UserInfo = _mongoose["default"].model('User', UserSchema);

var _default = UserInfo;
exports["default"] = _default;
//# sourceMappingURL=userModel.dev.js.map
