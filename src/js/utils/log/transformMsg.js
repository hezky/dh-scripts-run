import util from "util";

// ------------------------------------------------------
// help fce
const isArray = Array.isArray;

const isObject = (msg) => typeof msg === "object" && msg !== null;
// ------------------------------------------------------

// ------------------------------------------------------
// transform fce
const transformMsg_StdErr = (msg) =>
  isObject(msg) && msg.stderr && transformMsg_Buffer(msg.stderr);

const transformMsg_ArrayOrObject = (msg) =>
  (isArray(msg) || isObject(msg)) && util.format(msg);

const transformMsg_Buffer = (msg) => Buffer.isBuffer(msg) && msg.toString();
// ------------------------------------------------------

const transformMsg = (msg) =>
  transformMsg_StdErr(msg) ||
  transformMsg_ArrayOrObject(msg) ||
  transformMsg_Buffer(msg) ||
  msg;

export default transformMsg;
