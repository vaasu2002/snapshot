import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

import {configFileOption} from './common';
import { important, welcome } from './message';
import { ensureDirectoryExists, ensureFileExists, appendToFileIfNotExist } from './flie-operations';


// defination of paths
const snapshotFolderPath = path.join(process.cwd(), 'snapshot'); // snapshot folder
export const configFilePath = path.join(snapshotFolderPath, 'config.json'); // config file

const gitIgnoreFilePath = path.join(process.cwd(), '.gitignore'); // .gitignore file

// ensuring file are created
ensureDirectoryExists(snapshotFolderPath);
ensureFileExists(configFilePath, JSON.stringify(configFileOption, null, 2));
ensureFileExists(gitIgnoreFilePath, '');
appendToFileIfNotExist(gitIgnoreFilePath, 'snapshot');

// main cli logic
const argv = yargs
  // npx snapshot init
  .command('init', 'Initialize the package', async () => {
    
    console.log(welcome); 


    // updating config
    fs.writeFileSync(configFilePath, JSON.stringify(configFileOption, null, 2));
    console.log(`config.json file created at ${configFilePath}`);

    console.log(important);
  })
  .argv;

export default argv;