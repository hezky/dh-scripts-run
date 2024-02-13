import kleur from "kleur";

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
    const { default: { color, label, description: { short } = {} } = {} } =
      config;
    if (label && short) {
      const repeatCol = repeat(" ", maxLength + 3 - String(label).length);
      const content = (color && kleur[color](short)) || short;
      result += result.length === 0 ? "" : "\n";
      result += "  " + kleur.yellow(label) + " " + repeatCol + " " + content;
    }
  }
  return result;
};

const determineAllContent = () =>
  "usage: dh-run <command> [<args>]\n\n" +
  "These are common dh-run commands used in various situations:\n\n" +
  showShortDescriptions();

export default determineAllContent;
