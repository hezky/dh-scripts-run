import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";
import { CWD_LIB_JS, CWD_SRC_JS } from "consts/dirs.js";

/* eslint-disable no-console */
const compileBabel = (source, target) => {
  if (!existsSync(CWD_LIB_JS)) mkdirSync(CWD_LIB_JS, { recursive: true });
  const args = [source, "--no-comments", "--out-dir", target];
  const res = spawnSync("babel", args);
  if (res.status !== 0) {
    console.error("error: ", res);
  } else {
    console.info(`${res.stdout}`);
  }
};

const run = () => {
  compileBabel(CWD_SRC_JS, CWD_LIB_JS);
};

export { run };
