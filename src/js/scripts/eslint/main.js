const { ESLint } = require("eslint");
import { GlobSync } from "glob";

import { DIR_DEVEL, DIR_SRC_JS, DIR_TEST } from "consts/dirs";

async function main(options) {
  // -----------------------------------------
  // 0] Settings
  const cwd = process.cwd();
  const globOptions = { cwd, dot: true, nodir: true };
  const PATHS_WITH_FILES = [
    `/${DIR_DEVEL}/**/*.js`,
    `/${DIR_DEVEL}/**/*.jsx`,
    `/${DIR_SRC_JS}/**/*.js`,
    `/${DIR_SRC_JS}/**/*.jsx`,
    `/${DIR_TEST}/**/*.js`,
  ];
  const paths = PATHS_WITH_FILES.map((item) => `${cwd}${item}`);
  const existFilesInPath = (path) =>
    GlobSync(path, globOptions).found.length !== 0;
  const executeOnPaths = paths.filter((path) => existFilesInPath(path));
  // -----------------------------------------

  // -----------------------------------------
  // 1] Create an instance with the `fix` option
  var eslint = new ESLint({
    fix: options.fix,
    useEslintrc: true,
  });
  // -----------------------------------------

  // -----------------------------------------
  // 2] Lint files. This doesn't modify target files.
  const results = await eslint.lintFiles(executeOnPaths);
  // -----------------------------------------

  // -----------------------------------------
  // 3] Modify the files with the fixed code.
  if (options.fix) {
    await ESLint.outputFixes(results);
  }
  // -----------------------------------------

  // ---------------runEslint--------------------------
  // 4. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);
  // -----------------------------------------

  // -----------------------------------------
  if (
    (typeof resultText === "string" || resultText instanceof String) &&
    resultText.length
  ) {
    console.log(resultText);
  }
  // -----------------------------------------
}

export default main;
