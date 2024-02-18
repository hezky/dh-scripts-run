import { dh__get__command } from "consts/env";

async function runCommand() {
  let command = dh__get__command();
  const config = (await import(`./${command}/config.js`)).default;
  config.argv = process.argv;
  const module = (await import(`./${command}/module.js`)).default;
  const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
  process.env.DH_SCRIPTS_RUN = config.name;
  await module(config);
  process.env.DH_SCRIPTS_RUN = lastScriptsRun;
}

export default runCommand;
