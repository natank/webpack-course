"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("@babel/runtime/regenerator");

require("./main.css");

require("./index.html");

var a =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    var a, b;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = args.a, b = args.b;
            _context.next = 3;
            return console.log("Hello from the future!", a, b);

          case 3:
            console.log("Done");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function a(_x) {
    return _ref.apply(this, arguments);
  };
}();

a({
  a: 1,
  b: 2
});