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
  yargs(hideBin(process.argv)).command("build", "description", yargs => {}).argv;

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
