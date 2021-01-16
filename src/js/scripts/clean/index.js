import { removeSync } from "fs";
import { CWD_DIST, CWD_LIB } from "consts/dirs.js";

const rmDir = (dir) => {
  try {
    removeSync(dir);
  } catch (e) {
    /* eslint no-console: 0 */
    console.error("Can not delete " + dir + " directory.");
    process.exit(1);
  }
};

const run = () => {
  rmDir(CWD_DIST);
  rmDir(CWD_LIB);
};

export { run };
