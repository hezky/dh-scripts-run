const lastEnv = process.env.NODE_ENV;
process.env.NODE_ENV = "TEST";
require("./testMocha.js");
process.env.NODE_ENV = lastEnv;
