#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require("fs");
const spawnSync = require("child_process").spawnSync;

// -----------------------------------------
// 0] determine - whence run
const ACTUAL_PCKG = "@dh-scripts/run";
const IS_SCRIPTS_RUN = process.env.npm_package_name === ACTUAL_PCKG;
process.env.isScriptsRun = IS_SCRIPTS_RUN;
process.env.isNpmRun = process.env.npm_package_name !== undefined;
const apl = (IS_SCRIPTS_RUN && "babel-node") || "node";
const folder = (IS_SCRIPTS_RUN && "src") || "lib";
// -----------------------------------------

// -----------------------------------------
// 1] determine - name script
const DEFAULT_SCRIPT = "help";
const UNKNOWN_SCRIPT = "unknown";
const argScript = process.argv[2] || DEFAULT_SCRIPT;
const determineScript = () => {
  let result = UNKNOWN_SCRIPT;
  if (typeof argScript === "string" || argScript instanceof String) {
    if (argScript.length === 0) {
      result = DEFAULT_SCRIPT;
    } else {
      result = argScript.replaceAll(":", "_");
    }
  }
  return result;
};
let script = determineScript();
// -----------------------------------------

// -----------------------------------------
// 2] determine - path
const determineParrentFolder = (path, deep = 1) => {
  let res = path;
  for (let i = 0; i < deep; i++) {
    res = res.substring(0, res.lastIndexOf("/"));
  }
  return res;
};
const parrentFolder = determineParrentFolder(__dirname);
const pathToIndex = `${parrentFolder}/${folder}/js/run/index.js`;
// -----------------------------------------

// -----------------------------------------
// 3] check exist script
const pathToScript = `${parrentFolder}/${folder}/js/run/${script}`;
const pathToModule = `${pathToScript}/module.js`;
const pathToConfig = `${pathToScript}/config.js`;
if (!fs.existsSync(pathToModule) || !fs.existsSync(pathToConfig)) {
  script = UNKNOWN_SCRIPT;
}
// -----------------------------------------

// -----------------------------------------
// 3] start processing
const absolutePathScript = require.resolve(pathToIndex);
const args = [script, argScript, ...process.argv.slice(3)];
console.time(script);

spawnSync(apl, [absolutePathScript].concat(args), {
  stdio: "inherit",
});

console.info("");
console.info("--------------------------------------------");
console.info("");
console.timeEnd(script);
console.info(`>> ${script}: end`);
console.info("");
// -----------------------------------------

process.exit(0);
