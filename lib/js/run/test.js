"use strict";

var _test = require("./../utils/test.js");

var lastEnv = process.env.NODE_ENV;
process.env.NODE_ENV = "TEST";
(0, _test.testMocha)();
process.env.NODE_ENV = lastEnv;