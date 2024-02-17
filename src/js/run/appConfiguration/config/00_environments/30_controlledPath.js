import { CWD } from "consts/dirs";
import { dh__set__controlledPath } from "consts/env";

const config = async () => {
  dh__set__controlledPath(CWD);
};

export default config;
