import { dh__set__controlledPath } from "consts/env";

const config = () => {
  dh__set__controlledPath(process.cwd());
};

export default config;
