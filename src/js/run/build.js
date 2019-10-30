import { run } from "scripts/build.js";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "BUILD";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
