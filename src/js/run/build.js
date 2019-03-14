import { LIB as DIR_LIB, SRC as DIR_SRC } from "./../consts/dirs.js";
import { compileBabel } from "./../utils/build.js";

const cwd = process.cwd();
const pathSrc = `${cwd}/${DIR_SRC}`;
const pathLib = `${cwd}/${DIR_LIB}`;

compileBabel(pathSrc, pathLib);
