import kleur from "kleur";

import { ARGV_ARG_SCRIPT } from "consts/argv";

const CONTENT =
  "dh-run: '${command}' is not a dh-run command. See '" +
  kleur.yellow("dh-run help") +
  "'.";

const module = () => {
  const argScript = process.argv[ARGV_ARG_SCRIPT];
  const replacedContent = CONTENT.replaceAll(
    "${command}",
    kleur.yellow(argScript),
  );
  console.log(replacedContent);
};

export default module;
