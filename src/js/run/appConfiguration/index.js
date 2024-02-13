import runFilesAndDirectories from "utils/runFilesAndDirectories";

// Function to run the application configuration
const appConfiguration = async () => {
  await runFilesAndDirectories(`${__dirname}/config`, 2);
};

export default appConfiguration;
