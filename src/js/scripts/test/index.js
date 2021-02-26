import fs from "fs";
import { spawnSync } from "child_process";

import { CWD_TEST } from "consts/dirs";
import { logWarning } from "utils/log";

const testMocha = () => {
  const CWD_TEST_MOCHA = `${CWD_TEST}/mocha/`;
  try {
    fs.accessSync(CWD_TEST_MOCHA);
    const args = [
      "--require",
      "@babel/register",
      "--recursive",
      CWD_TEST_MOCHA,
    ];
    const res = spawnSync("mocha", args, { stdio: "inherit" });
    if (res.status !== 0) {
      process.exit(1);
    }
  } catch (e) {
    logWarning("Missing mocha tests.");
  }
};

const run = () => {
  testMocha();
};

export { run };
