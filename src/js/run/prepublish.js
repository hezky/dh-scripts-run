import { run } from "scripts/prepublish";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "PREPUBLISH";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
