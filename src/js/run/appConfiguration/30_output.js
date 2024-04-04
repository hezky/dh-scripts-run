import * as env from "consts/env";
import { logEmpty, logProc } from "utils/log";

import Table from "cli-table";

const run = async () => {
  logProc("output");
  logEmpty();

  let table = new Table({
    head: ["environments", "values"],
    style: { head: ["cyan"] },
  });

  // env : command
  table.push(["command", env.dh__get__command()]);

  // env : controlled package name
  table.push(["controlled package name", env.dh__get__controlledPackageName()]);

  // env : controlled path
  table.push(["controlled package path", env.dh__get__controlledPath()]);

  // env : type of run
  table.push(["type of run", env.dh__get__typeOfRun()]);

  console.log(table.toString());
};

export default run;
