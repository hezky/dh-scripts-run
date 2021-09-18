import { existsSync } from "fs";
const spawnSync = require("child_process").spawnSync;

import { CWD_DEVEL } from "consts/dirs";

const run = () => {
  const path = `${CWD_DEVEL}/index.js`;
  if (existsSync(path)) {
    spawnSync("babel-node", [require.resolve(path)], {
      stdio: "inherit",
    });
  }
};

export { run };
