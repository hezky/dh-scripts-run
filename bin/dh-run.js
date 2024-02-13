#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");

// Constants
const RUN_PACKAGE = "@dh-scripts/run";
const IS_RUN_PACKAGE = process.env.npm_package_name === RUN_PACKAGE;
const NODE_EXECUTION_ENVIRONMENT = IS_RUN_PACKAGE ? "babel-node" : "node";
const SOURCE_FOLDER = IS_RUN_PACKAGE ? "src" : "lib";

// Determine path
const parentFolder = path.dirname(__dirname);
const pathToIndex = path.join(
  parentFolder,
  SOURCE_FOLDER,
  "js",
  "run",
  "index.js",
);

// Start processing
const absolutePathScript = require.resolve(pathToIndex);
const args = [...process.argv.slice(2)];
console.time("dh-run");

spawnSync(NODE_EXECUTION_ENVIRONMENT, [absolutePathScript].concat(args), {
  stdio: "inherit",
});

console.info("");
console.info("--------------------------------------------");
console.info("");
console.timeEnd("dh-run");
console.info(`>> dh-run: end`);
console.info("");

process.exit(0);
