import { logProc } from "utils/log";

import determineRun from "./determineRun";

const runF = (name) => {
  const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
  const run = determineRun(name);
  process.env.DH_SCRIPTS_RUN = name;
  logProc(`running ${name}`);
  run();
  process.env.DH_SCRIPTS_RUN = lastScriptsRun;
};

export default runF;
