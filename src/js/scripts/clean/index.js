import { existsSync, rmdir } from "fs";
import { CWD, DIST, LIB } from "consts/dirs.js";

import { logError } from "utils/log.js";

const _rmDir = (dir) => {
  try {
    const path = `${CWD}/${dir}`;
    existsSync(path) && rmdir(path, { recursive: true });
  } catch (e) {
    logError(`Can not delete ${dir} directory.`);
    process.exit(1);
  }
};

const run = () => {
  _rmDir(DIST);
  _rmDir(LIB);
};

export { run };
