#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");

// Constants
const EXPECTED_PACKAGE = "@dh-scripts/run";
const IS_EXPECTED_PACKAGE = process.env.npm_package_name === EXPECTED_PACKAGE;
const NODE_EXECUTION_ENVIRONMENT = IS_EXPECTED_PACKAGE ? "babel-node" : "node";
const SOURCE_FOLDER = IS_EXPECTED_PACKAGE ? "src" : "lib";
const DEFAULT_COMMAND = "help";
const UNKNOWN_COMMAND = "unknown";

// Environment Variables
process.env.dh_isScriptsExecuted = IS_EXPECTED_PACKAGE;
process.env.dh_isNpmRun = process.env.npm_package_name !== undefined;

// Determine command name
const inputCommandArgument = process.argv[2] || DEFAULT_COMMAND;
let command = determineCommand(inputCommandArgument);

// Determine path
const parentFolder = path.dirname(__dirname);
const pathToIndex = path.join(
  parentFolder,
  SOURCE_FOLDER,
  "js",
  "run",
  "index.js"
);

// Check command existence
const pathToCommand = path.join(
  parentFolder,
  SOURCE_FOLDER,
  "js",
  "run",
  command
);
const pathToModule = path.join(pathToCommand, "module.js");
const pathToConfig = path.join(pathToCommand, "config.js");

try {
  require.resolve(pathToModule);
  require.resolve(pathToConfig);
} catch (error) {
  console.error(`Error resolving module or config: ${error}`);
  command = UNKNOWN_COMMAND;
}

// Start processing
const absolutePathScript = require.resolve(pathToIndex);
const args = [command, inputCommandArgument, ...process.argv.slice(3)];
console.time(command);

spawnSync(NODE_EXECUTION_ENVIRONMENT, [absolutePathScript].concat(args), {
  stdio: "inherit",
});

console.info("");
console.info("--------------------------------------------");
console.info("");
console.timeEnd(command);
console.info(`>> ${command}: end`);
console.info("");

process.exit(0);

function determineCommand(argCommand) {
  let result = UNKNOWN_COMMAND;
  if (typeof argCommand === "string" || argCommand instanceof String) {
    result =
      argCommand.length === 0
        ? DEFAULT_COMMAND
        : argCommand.replaceAll(":", "_");
  }
  return result;
}
