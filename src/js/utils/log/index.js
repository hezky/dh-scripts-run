import kleur from "kleur";

import transformMsg from "./transformMsg";

/* eslint-disable */
const NEWLINE           = "\n";
const DOUBLE_NEWLINE    = `${NEWLINE}${NEWLINE}`;

const LOG_COLOR_ERROR   = kleur.red;
const LOG_COLOR_INFO    = kleur.cyan;
const LOG_COLOR_NOTE    = kleur.gray;
const LOG_COLOR_PROCESS = kleur.green;
const LOG_COLOR_WARNING = kleur.orange;

const MSG_ERROR         = (msg) => `${NEWLINE}e : ${msg}${NEWLINE}`;
const MSG_INFO          = (msg) => `i : ${msg}`;
const MSG_NOTE          = (msg) => `- : ${msg}`;
const MSG_PROCESS       = (msg) => `\u2713 : ${msg}`;
const MSG_TODO          = (msg) => `T : ${msg}`;
const MSG_WARNING       = (msg) => `w : ${msg}`;
/* eslint-enable */

const clearDisplay = () => {
  process.stdout.write("\x1bc");
};

const logEmpty = () => {
  console.log("");
};
const logError = (msg) => {
  logT(LOG_COLOR_ERROR, MSG_ERROR, msg);
};
const logInfo = (msg) => {
  logT(LOG_COLOR_INFO, MSG_INFO, msg);
};
const logNote = (msg) => {
  logT(LOG_COLOR_NOTE, MSG_NOTE, msg);
};
const logProc = (msg) => {
  logT(LOG_COLOR_PROCESS, MSG_PROCESS, msg);
};
const logTodo = (msg) => {
  logT(LOG_COLOR_NOTE, MSG_TODO, msg);
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
  logEmpty,
  logError,
  logInfo,
  logNote,
  logProc,
  logTodo,
  logWarning,
};
