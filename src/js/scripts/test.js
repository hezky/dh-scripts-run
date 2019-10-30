import fs from "fs";
import { spawnSync } from "child_process";
import { CWD_TEST } from "consts/dirs";

const testMocha = () => {
  const CWD_TEST_MOCHA = `${CWD_TEST}mocha/`;
  /* eslint no-console: 0 */
  try {
    fs.accessSync(CWD_TEST_MOCHA);
    const args = [
      "--require",
      "@babel/register",
      "--recursive",
      CWD_TEST_MOCHA
    ];
    const res = spawnSync("mocha", args);
    if (res.status !== 0) {
      console.error("error: ");
      console.error(res);
      process.exit(1);
    } else {
      console.info(`${res.stdout}`);
    }
  } catch (e) {
    console.warn("Missing mocha tests.");
  }
};

const run = () => {
  testMocha();
};

export { run };
