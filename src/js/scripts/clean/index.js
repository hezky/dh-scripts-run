import { existsSync, rmdir } from "fs";
import { CWD, DIR_DIST, DIR_LIB } from "consts/dirs.js";

import { logError } from "utils/log.js";

const _rmDir = (dir) => {
  try {
    const path = `${CWD}/${dir}`;
    console.log("path >> ", path);
    existsSync(path) && rmdir(path, { recursive: true });
  } catch (e) {
    logError(`Can not delete ${dir} directory.`);
    process.exit(1);
  }
};

const run = () => {
  _rmDir(DIR_DIST);
  _rmDir(DIR_LIB);
};

export { run };
