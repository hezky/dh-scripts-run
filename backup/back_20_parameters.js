import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { logProc, logTodo } from "utils/log";

const run = async () => {
  logProc("parameters");
  console.log("A : ", process.argv);
  const argv = yargs(hideBin(process.argv));
  console.log("argv >> ", argv);
//  logTodo("parameters");
};

export default run;
