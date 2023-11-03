import kleur from "kleur";
import pckJson from "project/package.json";

const CONTENT = "\ndh-run version ${version}";

const module = () => {
  const replacedContent = CONTENT.replaceAll(
    "${version}",
    kleur.yellow(pckJson.version)
  );
  console.log(replacedContent);
};

export default module;
