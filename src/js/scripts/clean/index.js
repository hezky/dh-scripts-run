import { existsSync, rmdir } from "fs";
import { CWD, DIST, LIB } from "consts/dirs.js";

import { logError } from "utils/log.js";

const rmDir = (dir) => {
  try {
    const path = `${CWD}/${dir}`;
    existsSync(path) && rmdir(path, { recursive: true });
  } catch (e) {
    logError(`Can not delete ${dir} directory.`);
    process.exit(1);
  }
};

const run = () => {
  rmDir(DIST);
  rmDir(LIB);
};

export { run };
