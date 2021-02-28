import { logProc } from "utils/log";

import determineName from "./determineName";

const runF = (run) => {
  const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
  const name = determineName(run);
  process.env.DH_SCRIPTS_RUN = name;
  logProc(`running ${name}`);
  run();
  process.env.DH_SCRIPTS_RUN = lastScriptsRun;
};

export default runF;
