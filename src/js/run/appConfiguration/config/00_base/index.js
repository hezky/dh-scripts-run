/*
import config_000_typeOfRun from "./000_typeOfRun";
import config_001_controlledPackage from "./001_controlledPackage";
import config_002_controlledPath from "./002_controlledPath";
*/

import runFilesAndDirectories from "utils/runFilesAndDirectories";

const run = async () => {
  await runFilesAndDirectories(`${__dirname}`, 3);
};

/*
  config_000_typeOfRun();
  config_001_controlledPackage();
  config_002_controlledPath();
*/

export default run;
