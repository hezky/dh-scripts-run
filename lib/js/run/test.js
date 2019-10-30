"use strict";

var _test = require("../scripts/test.js");

var lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "TEST";
(0, _test.run)();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;