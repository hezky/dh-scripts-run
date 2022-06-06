import { ARGV_ACT_SCRIPT } from "consts/argv";
import { logProc } from "utils/log";

async function run() {
  const SCRIPT = process.argv[ARGV_ACT_SCRIPT];
  const config = (await import(`./${SCRIPT}/config.js`)).default;
  const module = (await import(`./${SCRIPT}/module.js`)).default;

  const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
  process.env.DH_SCRIPTS_RUN = config.name;
  logProc(`running ${config.name}`);
  module(config);
  process.env.DH_SCRIPTS_RUN = lastScriptsRun;
}

run();
