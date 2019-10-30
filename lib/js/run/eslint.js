"use strict";

var aaa = _interopRequireWildcard(require("dh-scripts-run-eslint"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

console.log(" >> ", aaa); // const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
// process.env.DH_SCRIPTS_RUN = "ESLINT";
// run();
// process.env.DH_SCRIPTS_RUN = lastScriptsRun;