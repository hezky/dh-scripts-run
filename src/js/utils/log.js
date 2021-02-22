import chalk from "chalk";

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
  console.log(CHALK_COLOR_ERROR(MSG_ERROR(msg)));
};
const logInfo = (msg) => {
  console.log(CHALK_COLOR_INFO(MSG_INFO(msg)));
};
const logProc = (msg) => {
  console.log(CHALK_COLOR_PROCESS(MSG_PROCESS(msg)));
};
const logWarning = (msg) => {
  console.log(CHALK_COLOR_WARNING(MSG_WARNING(msg)));
};

export {
  DOUBLE_NEWLINE,
  NEWLINE,
  clearDisplay,
  logError,
  logInfo,
  logProc,
  logWarning,
};
