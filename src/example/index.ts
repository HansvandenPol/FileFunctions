/*
  EXAMPLE CODE
  Uses API functions on a local text file
*/

import {FileHandler} from '../lib/fileHandler';

// Initialize the filehandler
const fileHandler: FileHandler = new FileHandler();

const filePath: string = 'src/example/exampleFile.txt';
// Get the file from a path
const theFile = fileHandler.getFileFromPath(filePath);

// get the file size
const fileSize = fileHandler.getFileSize(filePath);

// encrypt the content with SHA1
const encrDataSha = fileHandler.SHA1(filePath);

// encrypt the content with MD5
const encrDataMD5 = fileHandler.MD5(filePath);

// output results
// tslint:disable-next-line
console.log('Filename: ' + theFile + 'FileSize: ' + fileSize +
            '\nEncrypted data SHA1: ' + encrDataSha +
            '\nEncrypted data MD5: ' + encrDataMD5);
