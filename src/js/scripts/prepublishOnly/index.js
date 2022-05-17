import { runBuild, runClean } from "scripts";

const run = () => {
  runClean();
  runBuild();
};

export default run;
