"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _userRoute = _interopRequireDefault(require("./Server/Routes/userRoute"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _donationRoute = _interopRequireDefault(require("./Server/Routes/donationRoute"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: './.env'
});

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use("/bloodbank/v1/user", _userRoute["default"]);
app.use("/bloodbank/v1/donation", _donationRoute["default"]);
app.use('/', function (req, res) {
  res.status(404).send({
    status: 404,
    message: "This Route does not exist"
  });
});
var databaseUrl = process.env.DATABASE;

_mongoose["default"].connect(databaseUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function () {
  return console.log("Database connected sucessfully");
});

var port = process.env.PORT;
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.dev.js.map
