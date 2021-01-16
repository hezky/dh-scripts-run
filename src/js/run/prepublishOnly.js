import { run } from "scripts/prepublishOnly";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "PREPUBLISHONLY";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
