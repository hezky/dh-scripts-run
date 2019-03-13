const DIR_LIB = require("./../consts/dirs.js").LIB;
const DIR_SRC = require("./../consts/dirs.js").SRC;
const compileBabel = require("./../utils/build.js").compileBabel;

compileBabel(DIR_SRC, DIR_LIB);
