#!/usr/bin/env node
const spawnSync = require("child_process").spawnSync;

const script = process.argv[2];
const args = process.argv.slice(3);

const rootPath = "./../";
const srcPath = "src/js/";
const runPath = "run/";
const pathScript = rootPath + srcPath + runPath + script + ".js";

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
