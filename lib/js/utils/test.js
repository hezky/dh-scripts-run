"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testMocha = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _child_process = require("child_process");

var _dirs = require("../consts/dirs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testMocha = function testMocha() {
  var CWD_TEST_MOCHA = "".concat(_dirs.CWD_TEST, "mocha/");
  /* eslint no-console: 0 */

  try {
    _fs.default.accessSync(CWD_TEST_MOCHA);

    var args = ["--require", "@babel/register", "--recursive", CWD_TEST_MOCHA];
    var res = (0, _child_process.spawnSync)("mocha", args);

    if (res.status !== 0) {
      console.error("error: ");
      console.error(res);
      process.exit(1);
    } else {
      console.info("".concat(res.stdout));
    }
  } catch (e) {
    console.warn("Missing mocha tests.");
  }
};

exports.testMocha = testMocha;