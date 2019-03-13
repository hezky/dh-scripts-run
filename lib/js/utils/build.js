"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileBabel = void 0;

var _fs = require("fs");

var _child_process = require("child_process");

/* eslint-disable no-console */
var compileBabel = function compileBabel(source, target) {
  if (!(0, _fs.existsSync)("lib")) (0, _fs.mkdirSync)("lib");
  var args = [source, "--comments=false", "--out-dir", target];
  var res = (0, _child_process.spawnSync)("babel", args);

  if (res.status !== 0) {
    console.error("error: ", res);
  } else {
    console.info("compiled: ", res.stdout);
  }
};

exports.compileBabel = compileBabel;