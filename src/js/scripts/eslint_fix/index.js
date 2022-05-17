import { logError } from "utils/log";

import eslintMain from "scripts/eslint/main.js";

const run = () => {
  const options = { fix: true };
  eslintMain(options).catch((error) => {
    logError(error);
    process.exit(1);
  });
};

export default run;
