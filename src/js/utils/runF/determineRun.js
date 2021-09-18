import * as NAMES from "consts/scriptNames";

import { run as runBuild } from "scripts/build";
import { run as runClean } from "scripts/clean";
import { run as runDevel } from "scripts/devel";
import { run as runEslint } from "scripts/eslint";
import { run as runPrepublishOnly } from "scripts/prepublishOnly";
import { run as runTest } from "scripts/test";

const MAP_NAMES = new Map();
MAP_NAMES.set(NAMES.BUILD, runBuild);
MAP_NAMES.set(NAMES.CLEAN, runClean);
MAP_NAMES.set(NAMES.DEVEL, runDevel);
MAP_NAMES.set(NAMES.ESLINT, runEslint);
MAP_NAMES.set(NAMES.PREPUBLISH_ONLY, runPrepublishOnly);
MAP_NAMES.set(NAMES.TEST, runTest);

const determineRun = (key) => MAP_NAMES.get(key);

export default determineRun;
