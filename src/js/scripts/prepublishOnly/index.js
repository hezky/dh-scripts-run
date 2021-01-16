import { run as runClean } from "scripts/clean";
import { run as runBuild } from "scripts/build";

const run = () => {
  runClean();
  runBuild();
};

export { run };
