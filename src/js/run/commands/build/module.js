/*
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  statSync,
} from "fs";
import { join } from "path";
import { transformSync } from "@babel/core";

import { CWD_LIB_JS, CWD_SRC_JS } from "consts/dirs";
import { logError } from "utils/log";

import babelConfig from "./config/babelConfig";

const compileBabel = (source, target) => {
  if (!existsSync(target)) mkdirSync(target, { recursive: true });

  const files = readdirSync(source);

  for (const file of files) {
    const sourcePath = join(source, file);
    const targetPath = join(target, file);

    if (statSync(sourcePath).isDirectory()) {
      compileBabel(sourcePath, targetPath);
    } else {
      try {
        const code = readFileSync(sourcePath, "utf-8");
        const result = transformSync(code, babelConfig);

        if (result && result.code) {
          writeFileSync(targetPath, result.code);
        }
      } catch (error) {
        logError(error);
      }
    }
  }
};

const module = () => {
  compileBabel(CWD_SRC_JS, CWD_LIB_JS);
};

export default module;
*/
/*
backup
import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";

import { CWD_LIB_JS, CWD_SRC_JS, RUN_MODULES } from "consts/dirs";
import { logError } from "utils/log";

const compileBabel = (source, target) => {
  const RUN_BABEL = `${RUN_MODULES}/@babel/cli/bin/babel.js`;
  if (!existsSync(CWD_LIB_JS)) mkdirSync(CWD_LIB_JS, { recursive: true });
  const args = [source, "--no-comments", "--out-dir", target];
  const res = spawnSync(RUN_BABEL, args);
  if (res.status !== 0) {
    logError(res);
  }
};

const module = () => {
  compileBabel(CWD_SRC_JS, CWD_LIB_JS);
};

export default module;
*/

import { existsSync, mkdirSync } from "fs";
import { spawnSync } from "child_process";

import { CWD_LIB_JS, CWD_SRC_JS, RUN_MODULES } from "consts/dirs";
import { logError } from "utils/log";

const compileBabel = (source, target) => {
  let RUN_BABEL = `${RUN_MODULES}/@babel/cli/bin/babel.js`;

  if (!existsSync(RUN_BABEL)) {
    const res = spawnSync("find", [
      RUN_MODULES,
      "-name",
      "@babel/cli/lib/babel",
    ]);
    if (res.status === 0) {
      RUN_BABEL = res.stdout.toString().trim();
    } else {
      logError("Unable to find @babel/cli/lib/babel");
      return;
    }
  }

  if (!existsSync(CWD_LIB_JS)) mkdirSync(CWD_LIB_JS, { recursive: true });
  const args = [source, "--no-comments", "--out-dir", target];
  const res = spawnSync(RUN_BABEL, args);
  if (res.status !== 0) {
    logError(res);
  }
};

const module = () => {
  compileBabel(CWD_SRC_JS, CWD_LIB_JS);
};

export default module;
