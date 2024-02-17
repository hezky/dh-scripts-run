import { TYPE_OF_RUN } from "./base";

/* eslint-disable */

// ------------------------------------
// env: command
const DH__COMMAND                     = "dh__command";

const dh__get__command                = ()      => process.env[DH__COMMAND];
const dh__set__command                = (value) => { process.env[DH__COMMAND] = value; };

// ------------------------------------
// env: controlled package name
const DH__CONTROLLED_PACKAGE_NAME     = "dh__controlledPackageName";

const dh__get__controlledPackageName  = ()      => process.env[DH__CONTROLLED_PACKAGE_NAME];
const dh__set__controlledPackageName  = (value) => { process.env[DH__CONTROLLED_PACKAGE_NAME] = value; };

// ------------------------------------
// env: controlled path
const DH__CONTROLLED_PATH             = "dh__controlledPath";

const dh__get__controlledPath         = ()      => process.env[DH__CONTROLLED_PATH];
const dh__set__controlledPath         = (value) => { process.env[DH__CONTROLLED_PATH] = value; };

// ------------------------------------
// env: type of run (global, current, dependency-based)
const DH__TYPE_OF_RUN                 = "dh__typeOfRun";

const dh__get__typeOfRun              = ()      => process.env[DH__TYPE_OF_RUN];
const dh__set__typeOfRun              = (value) => { process.env[DH__TYPE_OF_RUN] = value; };

const dh__is__typeOfRun_actual        = ()      => dh__typeOfRun() === TYPE_OF_RUN.ACTUAL;
const dh__is__typeOfRun_dependencies  = ()      => dh__typeOfRun() === TYPE_OF_RUN.DEPENDENCIES;
const dh__is__typeOfRun_global        = ()      => dh__typeOfRun() === TYPE_OF_RUN.GLOBAL;

export {
  // ------------------------------------
  // env: command
  DH__COMMAND,
  dh__get__command,
  dh__set__command,

  // ------------------------------------
  // env: controlled package name
  DH__CONTROLLED_PACKAGE_NAME,
  dh__get__controlledPackageName,
  dh__set__controlledPackageName,

  // ------------------------------------
  // env: controlled path
  DH__CONTROLLED_PATH,
  dh__get__controlledPath,
  dh__set__controlledPath,

  // ------------------------------------
  // env: type of run (global, current, dependency-based)
  DH__TYPE_OF_RUN,
  dh__get__typeOfRun,
  dh__set__typeOfRun,
  dh__is__typeOfRun_actual,
  dh__is__typeOfRun_dependencies,
  dh__is__typeOfRun_global,
};
