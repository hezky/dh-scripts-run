import { CWD_LIB, CWD_SRC } from "consts/dirs.js";
import { compileBabel } from "utils/build.js";

compileBabel(CWD_SRC, CWD_LIB);
