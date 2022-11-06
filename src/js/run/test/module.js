import fs from "fs";
import { spawnSync } from "child_process";

import { CWD_TEST, RUN_MODULES } from "consts/dirs";
import { logWarning } from "utils/log";

const CWD_TEST_MOCHA = `${CWD_TEST}/mocha/`;
const RUN_BABEL = `${RUN_MODULES}/@babel/register/lib/index.js`;
const RUN_MOCHA = `${RUN_MODULES}/mocha/bin/mocha.js`;

const testMocha = () => {
  try {
    fs.accessSync(CWD_TEST_MOCHA);
    fs.chmodSync(RUN_MOCHA, 0o770);
    const args = ["--require", RUN_BABEL, "--recursive", CWD_TEST_MOCHA];
    const res = spawnSync(RUN_MOCHA, args, { stdio: "inherit" });
    if (res.status !== 0) {
      process.exit(1);
    }
  } catch (e) {
    logWarning("Missing mocha tests.");
  }
};

const module = () => {
  testMocha();
};

export default module;
