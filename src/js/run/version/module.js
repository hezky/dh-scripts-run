import chalk from "chalk";

const CONTENT = "dh-run version ${version}";

const module = () => {
  const actFolder = process.cwd();
  const pckJson = require(`${actFolder}/package.json`);
  const replacedContent = CONTENT.replaceAll(
    "${version}",
    chalk.yellow(pckJson.version)
  );
  console.log(replacedContent);
};

export default module;
