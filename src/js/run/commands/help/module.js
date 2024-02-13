import { ARGV_ARG_OTHER } from "consts/argv";

import determineAllContent from "./determineAllContent";
import determineOneContent from "./determineOneContent";

const module = (config) => {
  const paramter = config.argv[ARGV_ARG_OTHER];
  const content = paramter
    ? determineOneContent(paramter)
    : determineAllContent();
  console.log(content);
};

export default module;
