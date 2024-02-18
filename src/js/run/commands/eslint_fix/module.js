import { logError } from "utils/log";

import eslintMain from "run/commands/eslint/scripts/main.js";

const module = () => {
  const options = { fix: true };
  eslintMain(options).catch((error) => {
    logError(error);
    process.exit(1);
  });
};

export default module;
