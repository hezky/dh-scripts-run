import path from "path";
import fs from "fs";

import { PARRENT_FOLDER } from "consts/dirs";
import { dh__set__command } from "consts/env";

const ARGV_ACT_SCRIPT = 2;
const DEFAULT_COMMAND = "help";
const UNKNOWN_COMMAND = "unknown";

const determineCommand = (argCommand) => {
  let result = UNKNOWN_COMMAND;
  if (typeof argCommand === "string" || argCommand instanceof String) {
    result =
      argCommand.length === 0
        ? DEFAULT_COMMAND
        : argCommand.replaceAll(":", "_");
  }
  return result;
};

const checkCommandExistence = (command) => {
  const pathToCommand = `${PARRENT_FOLDER(__dirname, 3)}/commands/${command}`;
  const pathToModule = path.join(pathToCommand, "module.js");
  const pathToConfig = path.join(pathToCommand, "config.js");
  try {
    if (!fs.existsSync(pathToModule) || !fs.existsSync(pathToConfig)) {
      throw new Error(
        `Module or config does not exist for command: ${command}`,
      );
    }
  } catch (error) {
    console.error(`Error resolving module or config: ${error}`);
    command = UNKNOWN_COMMAND;
  }
  return command;
};

const config = async () => {
  let command = process.argv[ARGV_ACT_SCRIPT] || DEFAULT_COMMAND;
  command = determineCommand(command);
  command = checkCommandExistence(command);
  dh__set__command(command);
};

export default config;
