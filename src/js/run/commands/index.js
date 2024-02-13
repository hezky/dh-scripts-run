import { ARGV_ACT_SCRIPT } from "consts/argv";

async function runCommand() {
  const SCRIPT = process.argv[ARGV_ACT_SCRIPT];
  const config = (await import(`./${SCRIPT}/config.js`)).default;
  config.argv = process.argv;
  const module = (await import(`./${SCRIPT}/module.js`)).default;
  const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
  process.env.DH_SCRIPTS_RUN = config.name;
  await module(config);
  process.env.DH_SCRIPTS_RUN = lastScriptsRun;
}

export default runCommand;
