import { CLIEngine } from "eslint";
import { GlobSync } from "glob";
import { DIR_SRC, DIR_TEST } from "consts/dirs.js";

const cli = new CLIEngine();
const formatter = cli.getFormatter();
const cwd = process.cwd();
const globOptions = { cwd, dot: true, nodir: true };
const paths = [`/${DIR_SRC}**/*.js`, `/${DIR_TEST}**/*.js`].map(
  item => `${cwd}${item}`
);

const existFilesInPath = path => GlobSync(path, globOptions).found.length !== 0;
const executeOnPaths = paths.filter(path => existFilesInPath(path));
const report = cli.executeOnFiles(executeOnPaths);

/* eslint no-console: 0 */
if (report.errorCount > 0 || report.warningCount > 0) {
  console.error(formatter(report.results));
  report.errorCount > 0 && process.exit(1);
}
