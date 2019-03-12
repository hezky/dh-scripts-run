const DIR_LIB = require("./../consts/dirs.js").lib;
const DIR_SRC = require("./../consts/dirs.js").src;
const compileBabel = require("./../utils/build.js").compileBabel;

compileBabel(DIR_SRC, DIR_LIB);
