"use strict";

var _build = require("../scripts/build.js");

var lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "BUILD";
(0, _build.run)();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;