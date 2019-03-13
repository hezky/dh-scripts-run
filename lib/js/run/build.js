"use strict";

var _dirs = require("./../consts/dirs.js");

var _build = require("./../utils/build.js");

(0, _build.compileBabel)(_dirs.SRC, _dirs.LIB);