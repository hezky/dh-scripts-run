"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIR_TEST = exports.DIR_SRC = exports.DIR_LIB = exports.CWD_TEST = exports.CWD_SRC = exports.CWD_LIB = void 0;
var DIR_LIB = "lib/js/";
exports.DIR_LIB = DIR_LIB;
var DIR_SRC = "src/js/";
exports.DIR_SRC = DIR_SRC;
var DIR_TEST = "test/";
exports.DIR_TEST = DIR_TEST;
var CWD = process.cwd();
var CWD_LIB = "".concat(CWD, "/").concat(DIR_LIB);
exports.CWD_LIB = CWD_LIB;
var CWD_SRC = "".concat(CWD, "/").concat(DIR_SRC);
exports.CWD_SRC = CWD_SRC;
var CWD_TEST = "".concat(CWD, "/").concat(DIR_TEST);
exports.CWD_TEST = CWD_TEST;