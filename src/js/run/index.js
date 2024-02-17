import { logProc } from "utils/log";

import appConfiguration from "./appConfiguration";
import runCommand from "./commands";

const run = async () => {
  logProc("app started");
  await appConfiguration();
  await runCommand();
};

run();
