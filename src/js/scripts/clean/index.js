import { existsSync, removeSync } from "fs";
import { CWD_DIST, CWD_LIB } from "consts/dirs.js";

const rmDir = (path) => {
  try {
    existsSync(path) && removeSync(path);
  } catch (e) {
    /* eslint no-console: 0 */
    console.error("Can not delete " + path + " directory.");
    process.exit(1);
  }
};

const run = () => {
  rmDir(CWD_DIST);
  rmDir(CWD_LIB);
};

export { run };
