import { existsSync, rmdir } from "fs";
import { CWD, DIST, LIB } from "consts/dirs.js";

const rmDirX = (dir) => {
  try {
    const path = `${CWD}/${dir}`;
    existsSync(path) && rmdir(path, { recursive: true });
  } catch (e) {
    /* eslint no-console: 0 */
    console.error("Can not delete " + dir + " directory.");
    process.exit(1);
  }
};

const run = () => {
  rmDirX(DIST);
  rmDirX(LIB);
};

export { run };
