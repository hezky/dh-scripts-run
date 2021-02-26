import util from "util";

const transformMsg_ArrayOrObject = (msg) =>
  (Array.isArray(msg) || (typeof msg === "object" && msg !== null)) &&
  util.format(msg);

const transformMsg_Buffer = (msg) => Buffer.isBuffer(msg) && msg.toString();

const transformMsg = (msg) =>
  transformMsg_ArrayOrObject(msg) || transformMsg_Buffer(msg) || msg;

export default transformMsg;
