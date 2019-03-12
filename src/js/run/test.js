const fs = require("fs");
const spawnSync = require("child_process").spawnSync;
const DIR_TEST = require("./../consts/dirs").TEST;

const cwd = process.cwd();

const DIR_TEST_MOCHA = cwd + DIR_TEST + "mocha/";

/* eslint no-console: 0 */
try {
  fs.accessSync(DIR_TEST_MOCHA);
  const args = ["--require", "@babel/register", "--recursive", DIR_TEST_MOCHA];
  const res = spawnSync("mocha", args);
  if (res.status !== 0) {
    console.error("error: ");
    console.error(res);
    process.exit(1);
  } else {
    console.info("tested: ", res.stdout);
  }
} catch (e) {
  console.warn("Missing mocha tests.");
}
