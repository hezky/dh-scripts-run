import { existsSync, rmdir } from "fs";

import { CWD, DIR_DIST, DIR_LIB } from "consts/dirs.js";
import { logError, logInfo } from "utils/log.js";

const rmDirFolder = (dir) => {
  try {
    const path = `${CWD}/${dir}`;
    if (existsSync(path)) {
      rmdir(path, { recursive: true }, () => {
        logInfo(`deleted ${path}`);
      });
    } else {
      logInfo(`not exist ${path}`);
    }
  } catch (e) {
    logError(`can not delete ${dir} directory`);
    process.exit(1);
  }
};

const run = () => {
  rmDirFolder(DIR_DIST);
  rmDirFolder(DIR_LIB);
};

export { run };
