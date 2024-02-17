const DIR_DEVEL = "devel";
const DIR_DIST = "dist";
const DIR_LIB = "lib";
const DIR_LIB_JS = `${DIR_LIB}/js`;
const DIR_NODE_MODULES = `node_modules`;

const DIR_SRC_JS = "src/js";
const DIR_TEST = "test";

const PARRENT_FOLDER = (path, deep = 1) => {
  let res = path;
  for (let i = 0; i < deep; i++) {
    res = res.substring(0, res.lastIndexOf("/"));
  }
  return res;
};

const CWD = process.cwd();
const CWD_DEVEL = `${CWD}/${DIR_DEVEL}`;
const CWD_DIST = `${CWD}/${DIR_DIST}`;
const CWD_LIB = `${CWD}/${DIR_LIB}`;
const CWD_LIB_JS = `${CWD}/${DIR_LIB_JS}`;
const CWD_SRC_JS = `${CWD}/${DIR_SRC_JS}`;
const CWD_TEST = `${CWD}/${DIR_TEST}`;

const RUN = CWD;
const RUN_MODULES = `${RUN}/${DIR_NODE_MODULES}`;

const JS = PARRENT_FOLDER(__dirname, 1);
const JS_RUN = `${JS}/run`;

export {
  CWD,
  CWD_DEVEL,
  CWD_DIST,
  CWD_LIB,
  CWD_LIB_JS,
  CWD_SRC_JS,
  CWD_TEST,
  DIR_DEVEL,
  DIR_DIST,
  DIR_LIB,
  DIR_LIB_JS,
  DIR_SRC_JS,
  DIR_TEST,
  JS_RUN,
  PARRENT_FOLDER,
  RUN,
  RUN_MODULES,
};
