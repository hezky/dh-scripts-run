#!/usr/bin/env node
"use strict";

var spawnSync = require("child_process").spawnSync;

var script = process.argv[2];
var args = process.argv.slice(3);
var runPath = "./run/";
var pathScript = runPath + script + ".js";
/* eslint-disable no-console */

console.info(">> ", script, ": start");
console.info("");
console.time(script);
spawnSync("babel-node", [require.resolve(pathScript)].concat(args), {
  stdio: "inherit"
});
console.info("");
console.timeEnd(script);
console.info("");
console.info(">> ", script, ": end");
process.exit(0);