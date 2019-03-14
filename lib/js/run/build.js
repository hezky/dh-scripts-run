"use strict";

var _dirs = require("./../consts/dirs.js");

var _build = require("./../utils/build.js");

var cwd = process.cwd();
var pathSrc = "".concat(cwd, "/").concat(_dirs.SRC);
var pathLib = "".concat(cwd, "/").concat(_dirs.LIB);
(0, _build.compileBabel)(pathSrc, pathLib);
