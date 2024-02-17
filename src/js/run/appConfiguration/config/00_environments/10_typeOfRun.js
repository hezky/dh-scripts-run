import { RUN_PACKAGE, TYPE_OF_RUN } from "consts/base";
import { dh__set__typeOfRun } from "consts/env";

const isTypeOfRunGlobal = () => process.env.npm_package_name === undefined;
const isTypeOfRunActual = () => process.env.npm_package_name === RUN_PACKAGE;

const config = () => {
  if (isTypeOfRunGlobal()) {
    dh__set__typeOfRun(TYPE_OF_RUN.GLOBAL);
  } else if (isTypeOfRunActual()) {
    dh__set__typeOfRun(TYPE_OF_RUN.ACTUAL);
  } else {
    dh__set__typeOfRun(TYPE_OF_RUN.DEPENDENCIES);
  }
};

export default config;
