/*const DEFAULT_COMMAND = "help"; // xxx
const UNKNOWN_COMMAND = "unknown"; // xxx

// Environment Variables
process.env.dh_isScriptsExecuted = IS_RUN_PACKAGE; // xxx
process.env.dh_isNpmRun = process.env.npm_package_name !== undefined; // xxx

// Determine command name
const inputCommandArgument = process.argv[2] || DEFAULT_COMMAND; // xxx
let command = determineCommand(inputCommandArgument); // xxx

// Check command existence
const pathToCommand = path.join(
  // xxx
  parentFolder,
  SOURCE_FOLDER,
  "js",
  "run",
  "commands",
  command,
);
const pathToModule = path.join(pathToCommand, "module.js"); // xxx
const pathToConfig = path.join(pathToCommand, "config.js"); // xxx

try {
  require.resolve(pathToModule); // xxx
  require.resolve(pathToConfig); // xxx
} catch (error) {
  console.error(`Error resolving module or config: ${error}`); // xxx
  command = UNKNOWN_COMMAND; // xxx
}

console.time(command);

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
*/
