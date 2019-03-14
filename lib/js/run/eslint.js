"use strict";

var _eslint = require("eslint");

var _glob = require("glob");

var _dirs = require("../consts/dirs.js");

var cli = new _eslint.CLIEngine();
var formatter = cli.getFormatter();
var cwd = process.cwd();
var globOptions = {
  cwd: cwd,
  dot: true,
  nodir: true
};
var paths = ["/".concat(_dirs.SRC, "**/*.js"), "/".concat(_dirs.TEST, "**/*.js")].map(function (item) {
  return "".concat(cwd).concat(item);
});

var existFilesInPath = function existFilesInPath(path) {
  return (0, _glob.GlobSync)(path, globOptions).found.length !== 0;
};

var executeOnPaths = paths.filter(function (path) {
  return existFilesInPath(path);
});
var report = cli.executeOnFiles(executeOnPaths);
/* eslint no-console: 0 */

if (report.errorCount > 0 || report.warningCount > 0) {
  console.error("error: ");
  console.error(formatter(report.results));

  if (report.errorCount > 0) {
    process.exit(1);
  }
}