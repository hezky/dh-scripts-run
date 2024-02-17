import { logProc } from "utils/log";
import runFilesAndDirectories from "utils/runFilesAndDirectories";

const run = async () => {
  logProc("environments");
  await runFilesAndDirectories(`${__dirname}`);
};

export default run;
