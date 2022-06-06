import runBuild from "run/build/module";
import runClean from "run/clean/module";

const module = () => {
  runClean();
  runBuild();
};

export default module;
