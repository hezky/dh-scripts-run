import { existsSync } from "fs";
const spawnSync = require("child_process").spawnSync;

import { CWD_DEVEL, RUN_MODULES } from "consts/dirs";

const RUN_BABEL = `${RUN_MODULES}/@babel/node/bin/babel-node.js`;

const run = () => {
  const path = `${CWD_DEVEL}/index.js`;
  if (existsSync(path)) {
    spawnSync(RUN_BABEL, [require.resolve(path)], {
      stdio: "inherit",
    });
  }
};

export default run;
