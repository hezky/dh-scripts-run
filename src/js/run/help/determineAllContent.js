import chalk from "chalk";

import { JS_RUN } from "consts/dirs";
import directoriesInDirectory from "utils/directoriesInDirectory";

function repeat(value, count) {
  return new Array(count + 1).join(value);
}

function lengthMax(list) {
  let result = 0;
  for (const el of list) {
    if (el.length > result) {
      result = el.length;
    }
  }
  return result;
}

const showShortDescriptions = () => {
  let result = "";
  const list = directoriesInDirectory(JS_RUN);
  const maxLength = lengthMax(list);
  for (const el of list) {
    const path = `${JS_RUN}/${el}`;
    const pathConfig = `${path}/config.js`;
    const config = require(pathConfig);
    const { default: { label, description: { short } = {} } = {} } = config;
    if (label && short) {
      result += result.length === 0 ? "" : "\n";
      result +=
        "  " +
        chalk.yellow(label) +
        " " +
        repeat(" ", maxLength + 3 - String(label).length) +
        " " +
        short;
    }
  }
  return result;
};

const determineAllContent = () =>
  "usage: dh-run <command> [<args>]\n\n" +
  "These are common dh-run commands used in various situations:\n\n" +
  showShortDescriptions();

export default determineAllContent;
