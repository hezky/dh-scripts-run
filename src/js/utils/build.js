import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";

/* eslint-disable no-console */
const compileBabel = (source, target) => {
  if (!existsSync("lib")) mkdirSync("lib");
  const args = [source, "--comments=false", "--out-dir", target];
  const res = spawnSync("babel", args);
  if (res.status !== 0) {
    console.error("error: ", res);
  } else {
    console.info(`${res.stdout}`);
  }
};

export { compileBabel };
