import yargs from "yargs";

console.log("... srcJs.js");

exports.command = "init [dir]";
exports.desc = "Create an empty repo";
exports.builder = {
  dir: {
    default: ".",
  },
};
exports.handler = function (argv) {
  console.log("init called for dir", argv.dir);
};
/*
yargs.command(
  "srcJs <path>",
  "Set the library JS directory",
  (yargs) => {
    yargs.positional("path", {
      describe: "Path to the library JS directory",
      type: "string",
    });
  },
  (argv) => {
    console.log("--- ", argv.path);
    return { srcJs: argv.path };
  },
);
*/