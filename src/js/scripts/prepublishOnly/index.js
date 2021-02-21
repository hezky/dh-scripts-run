import { run as runBuild } from "scripts/build";
import { run as runClean } from "scripts/clean";

const run = () => {
  runClean();
  runBuild();
};

export { run };
