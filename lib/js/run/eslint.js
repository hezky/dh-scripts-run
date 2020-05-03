"use strict";

var _eslint = require("../scripts/eslint.js");

var lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "ESLINT";
(0, _eslint.run)();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;