import kleur from "kleur";

import transformMsg from "./transformMsg";

/* eslint-disable */
const NEWLINE           = "\n";
const DOUBLE_NEWLINE    = `${NEWLINE}${NEWLINE}`;

const LOG_COLOR_ERROR   = kleur.bold.red;
const LOG_COLOR_INFO    = kleur.cyan;
const LOG_COLOR_PROCESS = kleur.green;
const LOG_COLOR_WARNING = kleur.orange;

const MSG_ERROR         = (msg) => `${NEWLINE}ee : ${msg}${NEWLINE}`;
const MSG_INFO          = (msg) => `ii : ${msg}`;
const MSG_PROCESS       = (msg) => `>> : ${msg}`;
const MSG_WARNING       = (msg) => `ww : ${msg}`;
/* eslint-enable */

const clearDisplay = () => {
  process.stdout.write("\x1bc");
};

const logError = (msg) => {
  logT(LOG_COLOR_ERROR, MSG_ERROR, msg);
};
const logInfo = (msg) => {
  logT(LOG_COLOR_INFO, MSG_INFO, msg);
};
const logProc = (msg) => {
  logT(LOG_COLOR_PROCESS, MSG_PROCESS, msg);
};
const logWarning = (msg) => {
  logT(LOG_COLOR_WARNING, MSG_WARNING, msg);
};

const logT = (kleurColor, msgTemplate, msg) => {
  console.log(kleurColor(msgTemplate(transformMsg(msg))));
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
