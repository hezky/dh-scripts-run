import { run } from "scripts/test.js";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "TEST";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
