import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";

import { CWD_LIB_JS, CWD_SRC_JS } from "consts/dirs";
import { dh__get__controlledPath } from "consts/env";
import { logError } from "utils/log";

// const RUN_BABEL = `${RUN_MODULES}/@babel/cli/bin/babel.js`;

const compileBabel = (source, target) => {
  const RUN_BABEL = `${dh__get__controlledPath()}/node_modules/@babel/cli/bin/babel.js`;
  if (!existsSync(CWD_LIB_JS)) mkdirSync(CWD_LIB_JS, { recursive: true });
  const args = [source, "--no-comments", "--out-dir", target];
  const res = spawnSync(RUN_BABEL, args);
  if (res.status !== 0) {
    logError(res);
  }
};

const module = () => {
  compileBabel(CWD_SRC_JS, CWD_LIB_JS);
};

export default module;
