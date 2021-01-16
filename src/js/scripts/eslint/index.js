import { CLIEngine } from "eslint";
import { GlobSync } from "glob";
import { DIR_SRC_JS, DIR_TEST } from "consts/dirs.js";

const run = () => {
  const cli = new CLIEngine();
  const cwd = process.cwd();
  const globOptions = { cwd, dot: true, nodir: true };
  const PATHS_WITH_FILES = [`/${DIR_SRC_JS}**/*.js`, `/${DIR_TEST}**/*.js`];
  const paths = PATHS_WITH_FILES.map((item) => `${cwd}${item}`);

  const existFilesInPath = (path) =>
    GlobSync(path, globOptions).found.length !== 0;
  const executeOnPaths = paths.filter((path) => existFilesInPath(path));
  const report = cli.executeOnFiles(executeOnPaths);

  /* eslint no-console: 0 */
  if (report.errorCount > 0 || report.warningCount > 0) {
    const formatter = cli.getFormatter();
    console.error(formatter(report.results));
    report.errorCount > 0 && process.exit(1);
  }
};

export { run };
