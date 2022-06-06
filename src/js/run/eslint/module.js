import { logError } from "utils/log";

import eslintMain from "./scripts/main.js";

const module = () => {
  const options = { fix: false };
  eslintMain(options).catch((error) => {
    logError(error);
    process.exit(1);
  });
};

export default module;
