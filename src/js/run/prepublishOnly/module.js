import runBuild from "run/build/module";
import runClean from "run/clean/module";

const run = () => {
  runClean();
  runBuild();
};

export default run;
