import { run } from "scripts/clean";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "CLEAN";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
