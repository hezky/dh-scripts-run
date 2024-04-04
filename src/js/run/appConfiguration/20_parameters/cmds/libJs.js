export default function (yargs, params) {
  yargs.command(
    "libJs <path>",
    "Set the library JS directory",
    (yargs) => {
      yargs.positional("path", {
        describe: "Path to the library JS directory",
        type: "string",
      });
    },
    (argv) => {
      return { libJs: argv.path };
    },
  );
}
