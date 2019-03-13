import { CLIEngine } from "eslint";
import { GlobSync } from "glob";

const cli = new CLIEngine();
const formatter = cli.getFormatter();
const cwd = process.cwd();

const globOptions = { cwd, dot: true, nodir: true };
const paths = [
  "/src/**/*.js",
  "/src/**/*.jsx",
  "/test/**/*.js",
  "/test/**/*.jsx"
].map(item => cwd + item);

const existFilesInPath = path => GlobSync(path, globOptions).found.length !== 0;
const executeOnPaths = paths.filter(path => existFilesInPath(path));
const report = cli.executeOnFiles(executeOnPaths);

/* eslint no-console: 0 */
if (report.errorCount > 0 || report.warningCount > 0) {
  console.error("error: ");
  console.error(formatter(report.results));
  if (report.errorCount > 0) {
    process.exit(1);
  }
}
