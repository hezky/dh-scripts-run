import fs from "fs";
import path from "path";

// Function to run a file if it exists
const runFile = async (filePath) => {
  if (fs.existsSync(filePath)) {
    try {
      const module = await import(filePath);
      if (module.default) {
        await module.default();
      }
    } catch (error) {
      console.error(`Failed to import module ${filePath}:`, error);
    }
  }
};

// Function to run files and directories in a given directory
const runFilesAndDirectories = async (dir) => {
  // Get all files and directories in the given directory
  const items = fs.readdirSync(dir);

  // Filter items whose name starts with a number
  const filteredItems = items.filter((item) => /^\d/.test(item));

  // Sort items by the numerical value at the start of the name
  filteredItems.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

  for (const item of filteredItems) {
    const itemPath = path.join(dir, item);

    // If the item is a file, run it
    if (fs.lstatSync(itemPath).isFile()) {
      await runFile(itemPath);
    }
    // If the item is a directory, traverse it
    else if (fs.lstatSync(itemPath).isDirectory()) {
      // Check if the index.js file exists and if so, run it
      const indexPath = path.join(itemPath, "index.js");
      await runFile(indexPath);
    }
  }
};

export default runFilesAndDirectories;
