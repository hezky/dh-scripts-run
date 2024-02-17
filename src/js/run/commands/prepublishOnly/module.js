import runBuild from "run/commands/build/module";
import runClean from "run/commands/clean/module";

const module = () => {
  runClean();
  runBuild();
};

export default module;
