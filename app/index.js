"use strict";
exports.__esModule = true;
var fileHandler_1 = require("../lib/fileHandler");
// Initialize the filehandler
var fileHandler = new fileHandler_1.FileHandler();
// Get the file from a path
var theFile = fileHandler.getFileFromPath("C:/Software/Typescript/FileFunctions/test.txt");
// get the file size
var fileSize = fileHandler.getFileSize("C:/Software/Typescript/FileFunctions/test.txt");
// encrypt the content with SHA1
var encrDataSha = fileHandler.SHA1("C:/Software/Typescript/FileFunctions/test.txt");
// encrypt the content with MD5
var encrDataMD5 = fileHandler.MD5("C:/Software/Typescript/FileFunctions/test.txt");
// output results
console.log("Filename: " + theFile + "FileSize: " + fileSize +
    "\nEncrypted data SHA1: " + encrDataSha +
    "\nEncrypted data MD5: " + encrDataMD5);
