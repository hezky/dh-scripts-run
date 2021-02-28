import { runBuild, runClean } from "scripts";

const run = () => {
  runClean();
  runBuild();
};

export { run };
