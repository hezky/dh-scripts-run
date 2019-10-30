import { run } from "scripts/eslint.js";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "ESLINT";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
