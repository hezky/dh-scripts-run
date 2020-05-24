#!/usr/bin/env node
const spawnSync = require("child_process").spawnSync;

const script = process.argv[2];
const args = process.argv.slice(3);

const isScriptsRun = process.env.npm_package_name === "dh-scripts-run";
const apl = (isScriptsRun && "babel-node") || "node";
const folder = (isScriptsRun && "src") || "lib";
const pathScript = `./../${folder}/js/run/${script}.js`;

/* eslint-disable no-console */
console.info(">> ", script, ": start");
console.info("");
console.time(script);

spawnSync(apl, [require.resolve(pathScript)].concat(args), {
  stdio: "inherit",
});

console.info("");
console.timeEnd(script);
console.info("");
console.info(">> ", script, ": end");

process.exit(0);
