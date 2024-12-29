import fs from 'fs';

// checks if a directory exists, and create it if it doesn't
export const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    console.log(`${dirPath} does not exist. Creating directory...`);
    fs.mkdirSync(dirPath);
    console.log(`${dirPath} created at ${dirPath}`);
  }
};

// checks if a file exists, and create it if it doesn't
export const ensureFileExists = (filePath: string, defaultContent: string = '') => {
  if (!fs.existsSync(filePath)) {
    console.log(`${filePath} does not exist. Creating file...`);
    fs.writeFileSync(filePath, defaultContent, 'utf-8');
    console.log(`${filePath} created at ${filePath}`);
  }
};

// appends a line to a file if it doesn't already exist
export const appendToFileIfNotExist = (filePath: string, content: string) => {
  if (!fs.readFileSync(filePath, 'utf-8').includes(content)) {
    console.log(`Adding ${content} to ${filePath}...`);
    fs.appendFileSync(filePath, `${content}\n`);
    console.log(`${content} added to ${filePath}`);
  }
};

export const readJsonFile = (filePath: string): any => {
  if (!filePath) {
    console.error('Invalid file path provided');
    throw new Error('File path must be a valid string');
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading or parsing file at ${filePath}:`, error);
    throw error;
  }
};