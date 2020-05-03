import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";
import { CWD_LIB, CWD_SRC } from "consts/dirs.js";

/* eslint-disable no-console */
const compileBabel = (source, target) => {
  if (!existsSync("lib")) mkdirSync("lib");
  const args = [source, "--no-comments", "--out-dir", target];
  const res = spawnSync("babel", args);
  if (res.status !== 0) {
    console.error("error: ", res);
  } else {
    console.info(`${res.stdout}`);
  }
};

const run = () => {
  compileBabel(CWD_SRC, CWD_LIB);
};

export { run };
