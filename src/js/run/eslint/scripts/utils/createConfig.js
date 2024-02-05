import path from "path";
import fs from "fs";

const CWD = process.cwd();
const OVERRIDE_CONFIG_FILE = [
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc.json",
  "package.json",
];

const CWD_OVERRIDE_CONFIG_FILE = OVERRIDE_CONFIG_FILE.map((item) =>
  path.join(CWD, item),
);

const createConfig = (options) => {
  const config = {
    fix: options.fix,
    useEslintrc: process.env.dh_isNpmRun !== "false",
  };

  if (!config.useEslintrc) {
    const overrideConfigFile = CWD_OVERRIDE_CONFIG_FILE.find((filePath) => {
      if (fs.existsSync(filePath)) {
        if (path.basename(filePath) === "package.json") {
          const packageJson = JSON.parse(fs.readFileSync(filePath, "utf-8"));
          return packageJson.eslintConfig !== undefined;
        }
        return path.basename(filePath) !== "package.json";
      }
      return false;
    });

    if (overrideConfigFile) {
      config.overrideConfigFile = overrideConfigFile;
    } else {
      console.log("--> todo : default overrideConfigFile");
    }
  }

  return config;
};

export default createConfig;
