import { logError } from "utils/log";

import eslintMain from "./main.js";

const run = () => {
  const options = { fix: false };
  eslintMain(options).catch((error) => {
    logError(error);
    process.exit(1);
  });
};

export default run;
