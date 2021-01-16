import { run } from "scripts/eslint";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "ESLINT";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
