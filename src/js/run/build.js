import { LIB as DIR_LIB, SRC as DIR_SRC } from "./../consts/dirs.js";
import { compileBabel } from "./../utils/build.js";

compileBabel(DIR_SRC, DIR_LIB);
