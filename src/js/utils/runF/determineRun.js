import * as NAMES from "consts/scriptNames";

import runBuild from "scripts/build";
import runClean from "scripts/clean";
import runDevel from "scripts/devel";
import runEslint from "scripts/eslint";
import runEslint_Fix from "scripts/eslint_fix";
import runPrepublishOnly from "scripts/prepublishOnly";
import runTest from "scripts/test";

const MAP_NAMES = new Map();
MAP_NAMES.set(NAMES.BUILD, runBuild);
MAP_NAMES.set(NAMES.CLEAN, runClean);
MAP_NAMES.set(NAMES.DEVEL, runDevel);
MAP_NAMES.set(NAMES.ESLINT, runEslint);
MAP_NAMES.set(NAMES.ESLINT_FIX, runEslint_Fix);
MAP_NAMES.set(NAMES.PREPUBLISH_ONLY, runPrepublishOnly);
MAP_NAMES.set(NAMES.TEST, runTest);

const determineRun = (key) => MAP_NAMES.get(key);

export default determineRun;
