import { readFileSync } from "fs";

import { marked } from "utils/marked";

const module = () => {
  const path = `${__dirname}/marked.md`;
  const content = readFileSync(path, "UTF-8");
  const actFolder = process.cwd();
  const pckJson = require(`${actFolder}/package.json`);
  const replacedContent = content.replaceAll("${version}", pckJson.version);
  marked(replacedContent);
};

export default module;
