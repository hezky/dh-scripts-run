import { RUN_PACKAGE } from "consts/base";
import { dh__set__controlledPackageName } from "consts/env";

const config = async () => {
  if (process.env.npm_package_name) {
    dh__set__controlledPackageName(process.env.npm_package_name);
  } else {
    dh__set__controlledPackageName(RUN_PACKAGE);
  }
};

export default config;
