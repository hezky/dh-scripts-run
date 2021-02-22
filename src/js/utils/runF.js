import { logProc } from "utils/log.js";

const runF = (run, name) => {
  const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
  process.env.DH_SCRIPTS_RUN = name;
  logProc(`running ${name}`);
  run();
  process.env.DH_SCRIPTS_RUN = lastScriptsRun;
};

export default runF;
