import { testMocha } from "utils/test.js";

const lastEnv = process.env.NODE_ENV;
process.env.NODE_ENV = "TEST";
testMocha();
process.env.NODE_ENV = lastEnv;
