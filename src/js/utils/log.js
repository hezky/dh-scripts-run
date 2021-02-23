import chalk from "chalk";
import util from "util";

const NEWLINE = "\n";
const DOUBLE_NEWLINE = `${NEWLINE}${NEWLINE}`;

const CHALK_COLOR_ERROR = chalk.bold.red;
const CHALK_COLOR_INFO = chalk.cyan;
const CHALK_COLOR_PROCESS = chalk.green;
const CHALK_COLOR_WARNING = chalk.keyword("orange");

const MSG_ERROR = (msg) => `ee : ${msg}`;
const MSG_INFO = (msg) => `ii : ${msg}`;
const MSG_PROCESS = (msg) => `>> : ${msg}`;
const MSG_WARNING = (msg) => `ww : ${msg}`;

const clearDisplay = () => {
  process.stdout.write("\x1bc");
};

const logError = (msg) => {
  logT(CHALK_COLOR_ERROR, MSG_ERROR, msg);
};
const logInfo = (msg) => {
  logT(CHALK_COLOR_INFO, MSG_INFO, msg);
};
const logProc = (msg) => {
  logT(CHALK_COLOR_PROCESS, MSG_PROCESS, msg);
};
const logWarning = (msg) => {
  logT(CHALK_COLOR_WARNING, MSG_WARNING, msg);
};

const logT = (chalkColor, msgTemplate, msg) => {
  console.log(chalkColor(msgTemplate(transformMsg(msg))));
};

const transformMsg = (msg) =>
  ((Array.isArray(msg) || (typeof msg === "object" && msg !== null)) &&
    util.format(msg)) ||
  msg;

export {
  DOUBLE_NEWLINE,
  NEWLINE,
  clearDisplay,
  logError,
  logInfo,
  logProc,
  logWarning,
};
