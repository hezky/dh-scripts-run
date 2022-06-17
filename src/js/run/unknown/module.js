import { readFileSync } from "fs";

import { ARGV_ARG_SCRIPT } from "consts/argv";
import { marked } from "utils/marked";

const module = () => {
  const path = `${__dirname}/marked.md`;
  const argScript = process.argv[ARGV_ARG_SCRIPT];
  const content = readFileSync(path, "UTF-8");
  const replacedContent = content.replaceAll("${command}", argScript);
  console.log();
  marked(replacedContent);
};

export default module;
