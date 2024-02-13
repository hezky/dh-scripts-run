import { existsSync } from "fs";
import kleur from "kleur";

import { JS_RUN } from "consts/dirs";

function repeat(value, count) {
  return new Array(count + 1).join(value);
}

const showDescription = (parameter) => {
  let result = "Notfound help ...";
  const path = `${JS_RUN}/${parameter}`;
  const pathConfig = `${path}/config.js`;
  if (existsSync(pathConfig)) {
    const config = require(pathConfig);
    const { default: { label, description: { long } = {} } = {} } = config;
    if (label && long) {
      result += result.length === 0 ? "" : "\n";
      result +=
        "  " +
        kleur.yellow(label) +
        " " +
        repeat(" ", label.length + 3 - String(label).length) +
        " " +
        long;
    }
  }

  return result;
};

const determineOneContent = (parameter) => showDescription(parameter);

export default determineOneContent;
