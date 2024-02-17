import { dh__set__command } from "consts/env";

const ARGV_ACT_SCRIPT = 2;

const config = async () => {
  let command = "unknown";
  if (process.argv.length >= ARGV_ACT_SCRIPT) {
    command = process.argv[ARGV_ACT_SCRIPT];
  }
  dh__set__command(command);
};

export default config;
