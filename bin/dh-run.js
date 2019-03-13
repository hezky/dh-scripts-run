#!/usr/bin/env node
const spawnSync = require("child_process").spawnSync;

const script = process.argv[2];
const args = process.argv.slice(3);

const isScriptRun = args.includes("--script-run");

const delivePathScriptRun = script => `./../src/js/run/${script}.js`;
const delivePathLibRun = script => `./../lib/js/run/${script}.js`;
const path =
  (isScriptRun && delivePathScriptRun(script)) || delivePathLibRun(script);
const apl = (isScriptRun && "babel-node") || "node";

/* eslint-disable no-console */
console.info(">> ", script, ": start");
console.info("");
console.time(script);

spawnSync(apl, [require.resolve(path)].concat(args), {
  stdio: "inherit"
});

console.info("");
console.timeEnd(script);
console.info("");
console.info(">> ", script, ": end");

process.exit(0);
