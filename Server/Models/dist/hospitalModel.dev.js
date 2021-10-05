"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HospitalSchema = new _mongoose["default"].Schema({
  hospitalName: String,
  email: {
    type: String,
    require: true,
    unique: true
  },
  address: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    "default": 1234
  }
});

var HospitalInfo = _mongoose["default"].model('Hospital', HospitalSchema);

var _default = HospitalInfo;
exports["default"] = _default;
//# sourceMappingURL=hospitalModel.dev.js.map
