import * as env from "consts/env";
import { logInfo } from "utils/log";

const run = () => {
  // env : controlled package name
  logInfo(
    `env : controlled package name : ${env.dh__get__controlledPackageName()}`,
  );

  // env : controlled path
  logInfo(`env : controlled path : ${env.dh__get__controlledPath()}`);

  // env : type of run
  logInfo(`env : type of run : ${env.dh__get__typeOfRun()}`);
};

export default run;
