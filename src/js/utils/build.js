const existsSync = require("fs").existsSync;
const mkdirSync = require("fs").mkdirSync;
const spawnSync = require("child_process").spawnSync;

/* eslint-disable no-console */
const compileBabel = (source, target) => {
  if (existsSync("lib")) mkdirSync("lib");
  const args = [source, "--comments=false", "--out-dir", target];
  const res = spawnSync("babel", args);
  if (res.status !== 0) {
    console.error("error: ", res);
  } else {
    console.info("compiled: ", res.stdout);
  }
};

module.exports = {
  compileBabel
};
