"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  Name: {
    type: String,
    require: [true, "name is required"]
  },
  gender: {
    type: String,
    "enum": ["female", "male"]
  },
  // dob: {type: Date, require:true},
  // bloodGroup: {type:String, enum:['O','A','B','AB']},
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    "default": 12345
  },
  role: {
    type: String,
    "enum": ["user", "hospital", "admin"],
    "default": "user"
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
