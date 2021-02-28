import * as NAMES from "consts/scriptNames";

import runF from "utils/runF";

const runBuild = runF.bind(null, NAMES.BUILD);
const runClean = runF.bind(null, NAMES.CLEAN);
const runEslint = runF.bind(null, NAMES.ESLINT);
const runPrepublishOnly = runF.bind(null, NAMES.PREPUBLISH_ONLY);
const runTest = runF.bind(null, NAMES.TEST);

export { runBuild, runClean, runEslint, runPrepublishOnly, runTest };
