#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require("fs");
const spawnSync = require("child_process").spawnSync;

// -----------------------------------------
// 0] determine - name script
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
const script = determineScript();
// -----------------------------------------

// -----------------------------------------
// 1] determine - whence run
const isScriptsRun = process.env.npm_package_name === "@dh-scripts/run";
process.env.isScriptsRun = isScriptsRun;
const apl = (isScriptsRun && "babel-node") || "node";
const folder = (isScriptsRun && "src") || "lib";
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
const pathToScript = `${parrentFolder}/${folder}/js/run/index.js`;
// -----------------------------------------

// -----------------------------------------
// 3] start processing
if (fs.existsSync(pathToScript)) {
  const absolutePathScript = require.resolve(pathToScript);
  const args = process.argv.slice(3);
  args.unshift(script);
  console.info(">> ", script, ": start");
  console.info("");
  console.info("--------------------------------------------");
  console.info("");
  console.time(script);

  spawnSync(apl, [absolutePathScript].concat(args), {
    stdio: "inherit",
  });

  console.info("");
  console.info("--------------------------------------------");
  console.info("");
  console.timeEnd(script);
  console.info("");
  console.info(">> ", script, ": end");
} else {
  console.info("");
  console.info("--------------------------------------------");
  console.info("");
  console.info("UNKNOWN SCRIPT - ", argScript);
  console.info("");
  console.info("--------------------------------------------");
  console.info("");
}
// -----------------------------------------

process.exit(0);
