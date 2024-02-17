import path from "path";
import fs from "fs";

import { CWD } from "consts/dirs";

import overrideConfig from "./overrideConfig";

const createConfig = (options) => {
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

  const config = {
    fix: options.fix,
  };

  const overrideConfigFile = CWD_OVERRIDE_CONFIG_FILE.find((filePath) => {
    if (fs.existsSync(filePath)) {
      const isPackageJson = path.basename(filePath) === "package.json";
      const fileContent = isPackageJson
        ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
        : null;
      return !isPackageJson || fileContent.eslintConfig !== undefined;
    }
    return false;
  });

  if (overrideConfigFile) {
    config.overrideConfigFile = overrideConfigFile;
  } else {
    config.overrideConfig = overrideConfig;
  }

  return config;
};

export default createConfig;
