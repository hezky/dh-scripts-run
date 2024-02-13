import appConfiguration from "./appConfiguration";
import runCommand from "./commands";

const run = async () => {
  await appConfiguration();
  await runCommand();
};

run();
