import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { logProc } from "utils/log";
/*
import libJsCommand from "./cmds/libJs.js";
import srcJsCommand from "./cmds/srcJs.js";
*/
const run = async () => {
  logProc("parameters");

  //  console.log("A : ", process.argv);
  const aaa = yargs(hideBin(process.argv))
    .command("build", "description - build", (yargs) => {
      return yargs
        .option("srcJs", {
          describe: "Path to the source JS directory",
          type: "string",
        })
        .option("libJs", {
          describe: "Path to the library JS directory",
          type: "string",
        });
    })
    .command("clean", "description - clean", (yargs) => {})
    .command("devel", "description - devel", (yargs) => {})
    .command("eslint", "description - eslint", (yargs) => {})
    .command("eslint-fix", "description - eslint-fix", (yargs) => {})
    .command("help", "description - help", (yargs) => {})
    .command("prepublishOnly", "description - prepublishOnly", (yargs) => {})
    .command("test", "description - test", (yargs) => {})
    .command("version", "description - version", (yargs) => {})
    .parse();

  console.log("AAA : ", aaa);

  /*
    .demandCommand()
    .help()
    .parse();
*/
  // help().parse();
  // console.log("B >> ", argB);

  //  const argv = yargs(process.argv.slice(2)).argv;

  //  console.log("0 : ", process.argv);

  //  const argv = yargs(["--aaa", "000", "--bbb", "111"]).argv;

  //  console.log("A :", argv);

  /*    .command(
      "build",
      "Set the source and library JS directories",
      (yargs) => {
        return yargs
          .option("srcJs", {
            alias: "s",
            describe: "Path to the source JS directory",
            type: "string",
          })
          .option("libJs", {
            alias: "l",
            describe: "Path to the library JS directory",
            type: "string",
          });
      },
      (argv) => {
        console.log("srcJs: ", argv.srcJs);
        console.log("libJs: ", argv.libJs);
        console.log("--- : ", argv);
      },
    )
    .help()
    .parse();*/
};

export default run;
