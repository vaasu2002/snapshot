import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

import { yellow } from 'chalk';
import { select } from '@inquirer/prompts';
import {configFileOption} from './common';
import { important, welcome } from './message';
import {databaseChoices} from './common';
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
    
    // prompts
    const databaseOps = await select({
      message: 'Select the database:',
      choices: databaseChoices,
      default: 'mysql',
    });

    const storageOps = await select({
      message: 'Select the storage:',
      choices: [
        { name: 'Local', value: 'local' },
        { name: 'Cloud', value: 'cloud' },
      ],
      default: 'local',
    });

    // edit to config as per option selected from prompts
    configFileOption.database.dialect = databaseOps;
    configFileOption.backup.storage = storageOps;

    // updating config
    fs.writeFileSync(configFilePath, JSON.stringify(configFileOption, null, 2));
    console.log(`config.json file created at ${configFilePath}`);

    console.log(yellow(important));
  })
  .argv;

export default argv;