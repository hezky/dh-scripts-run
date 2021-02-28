import { run as runBuild } from "scripts/build";
import { run as runClean } from "scripts/clean";

import runF from "utils/runF";

const run = () => {
  runF(runClean);
  runF(runBuild);
};

export { run };
