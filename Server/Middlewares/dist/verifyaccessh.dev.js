"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var verifyAccessh = function verifyAccessh(requiredRole) {
  return function _callee(req, res, next) {
    var role;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            role = req.hospital.role;

            if (!(requiredRole !== role)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              status: 403,
              message: "you are not authorized 🤷‍♀️"
            }));

          case 4:
            return _context.abrupt("return", next());

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

var _default = verifyAccessh;
exports["default"] = _default;
//# sourceMappingURL=verifyaccessh.dev.js.map
