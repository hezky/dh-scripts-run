import { readdirSync } from "fs";

const directoriesInDirectory = (pathToDirectory) =>
  readdirSync(pathToDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

export default directoriesInDirectory;
