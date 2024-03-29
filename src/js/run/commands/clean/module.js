import { existsSync, rmSync } from "fs";

import { CWD, DIR_DIST, DIR_LIB } from "consts/dirs";
import { logError, logInfo } from "utils/log";

const rmDirFolder = (dir) => {
  try {
    const path = `${CWD}/${dir}`;
    if (existsSync(path)) {
      rmSync(path, { recursive: true });
      logInfo(`removed ${path}`);
    } else {
      logInfo(`not exist ${path}`);
    }
  } catch (e) {
    logError(`can not remove ${dir} directory`);
    process.exit(1);
  }
};

const module = () => {
  rmDirFolder(DIR_DIST);
  rmDirFolder(DIR_LIB);
};

export default module;
