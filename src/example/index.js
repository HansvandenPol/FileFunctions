"use strict";
/*
  EXAMPLE CODE
  Uses API functions on a local text file
*/
Object.defineProperty(exports, "__esModule", { value: true });
var fileHandler_1 = require("../lib/fileHandler");
// Initialize the filehandler
var fileHandler = new fileHandler_1.FileHandler();
var filePath = 'src/example/exampleFile.txt';
// Get the file from a path
var theFile = fileHandler.getFileFromPath(filePath);
// get the file size
var fileSize = fileHandler.getFileSize(filePath);
// encrypt the content with SHA1
var encrDataSha = fileHandler.SHA1(filePath);
// encrypt the content with MD5
var encrDataMD5 = fileHandler.MD5(filePath);
// output results
// tslint:disable-next-line
console.log('Filename: ' + theFile + 'FileSize: ' + fileSize +
    '\nEncrypted data SHA1: ' + encrDataSha +
    '\nEncrypted data MD5: ' + encrDataMD5);
