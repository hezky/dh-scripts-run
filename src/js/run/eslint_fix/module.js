import { logError } from "utils/log";

import eslintMain from "run/eslint/scripts/main.js";

const run = () => {
  const options = { fix: true };
  eslintMain(options).catch((error) => {
    logError(error);
    process.exit(1);
  });
};

export default run;
