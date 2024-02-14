import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";

import { CWD_LIB_JS, CWD_SRC_JS, RUN_MODULES } from "consts/dirs";
import { logError } from "utils/log";

// const RUN_BABEL = `${RUN_MODULES}/@babel/cli/bin/babel.js`;
const RUN_BABEL = `/home/jsDH/dh-scripts-run/node_modules/@babel/cli/bin/babel.js`;

const compileBabel = (source, target) => {
  if (!existsSync(CWD_SRC_JS)) {
    console.log("--- neexistuje src");
  } else {
    console.log("--- existuje src");
  }
  if (!existsSync(CWD_LIB_JS)) {
    console.log("--- neexistuje lib");
  } else {
    console.log("--- existuje lib");
  }
  if (!existsSync(CWD_LIB_JS)) mkdirSync(CWD_LIB_JS, { recursive: true });
  const args = [source, "--no-comments", "--out-dir", target];
  console.log("Run: ", RUN_BABEL);
  console.log(`Compiling Babel: ${args.join(" ")}`);
  const res = spawnSync(RUN_BABEL, args);
  if (res.status !== 0) {
    logError(res);
  }
};

const module = () => {
  compileBabel(CWD_SRC_JS, CWD_LIB_JS);
};

export default module;
