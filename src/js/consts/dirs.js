const DIR_DIST = "dist";
const DIR_LIB = "lib";
const DIR_LIB_JS = `${DIR_LIB}/js`;

const DIR_SRC_JS = "src/js";
const DIR_TEST = "test";

const CWD = process.cwd();
const CWD_DIST = `${CWD}/${DIR_DIST}`;
const CWD_LIB = `${CWD}/${DIR_LIB}`;
const CWD_LIB_JS = `${CWD}/${DIR_LIB_JS}`;

const CWD_SRC_JS = `${CWD}/${DIR_SRC_JS}`;
const CWD_TEST = `${CWD}/${DIR_TEST}`;

export {
  CWD,
  CWD_DIST,
  CWD_LIB,
  CWD_LIB_JS,
  CWD_SRC_JS,
  CWD_TEST,
  DIR_DIST,
  DIR_LIB,
  DIR_LIB_JS,
  DIR_SRC_JS,
  DIR_TEST,
};
