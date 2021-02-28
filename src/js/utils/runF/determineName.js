import { run as runBuild } from "scripts/build";
import { run as runClean } from "scripts/clean";
import { run as runEslint } from "scripts/eslint";
import { run as runPrepublishOnly } from "scripts/prepublishOnly";
import { run as runTest } from "scripts/test";

const NAME = {
  BUILD: "build",
  CLEAN: "clean",
  ESLINT: "eslint",
  PREPUBLISH_ONLY: "prepublishOnly",
  TEST: "test",
};

const MAP_NAMES = new Map();
MAP_NAMES.set(NAME.BUILD, { name: NAME.BUILD, run: runBuild });
MAP_NAMES.set(NAME.CLEAN, { name: NAME.CLEAN, run: runClean });
MAP_NAMES.set(NAME.ESLINT, { name: NAME.ESLINT, run: runEslint });
MAP_NAMES.set(NAME.PREPUBLISH_ONLY, {
  name: NAME.PREPUBLISH_ONLY,
  run: runPrepublishOnly,
});
MAP_NAMES.set(NAME.TEST, { name: NAME.TEST, run: runTest });

function determineName(runX) {
  for (const [, value] of MAP_NAMES.entries()) {
    if (value.run === runX) return value.name;
  }
}

export default determineName;
