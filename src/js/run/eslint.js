const CLIEngine = require("eslint").CLIEngine;
const Sync = require("glob").GlobSync;

const cli = new CLIEngine();
const formatter = cli.getFormatter();
const cwd = process.cwd();

const globOptions = { cwd, dot: true, nodir: true };
const paths = [
  cwd + "/src/**/*.js",
  cwd + "/src/**/*.jsx",
  cwd + "/test/**/*.js",
  cwd + "/test/**/*.jsx"
];

const existFilesInPath = path => Sync(path, globOptions).found.length !== 0;
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
