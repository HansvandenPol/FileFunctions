import {FileHandler} from '../lib/fileHandler';

// Initialize the filehandler
const fileHandler: FileHandler = new FileHandler();

// Get the file from a path
const theFile = fileHandler.getFileFromPath('C:/Software/Typescript/FileFunctions/src/test.txt');

// get the file size
const fileSize = fileHandler.getFileSize('C:/Software/Typescript/FileFunctions/src/test.txt');

// encrypt the content with SHA1
const encrDataSha = fileHandler.SHA1('C:/Software/Typescript/FileFunctions/src/test.txt');

// encrypt the content with MD5
const encrDataMD5 = fileHandler.MD5('C:/Software/Typescript/FileFunctions/src/test.txt');

// output results
// tslint:disable-next-line
console.log('Filename: ' + theFile + 'FileSize: ' + fileSize +
            '\nEncrypted data SHA1: ' + encrDataSha +
            '\nEncrypted data MD5: ' + encrDataMD5);
