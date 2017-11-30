import {FileHandler} from "../lib/fileHandler";

// Initialize the filehandler
let fileHandler:FileHandler = new FileHandler();


// Get the file from a path
let theFile = fileHandler.getFileFromPath("C:/Software/Typescript/FileFunctions/test.txt");

// get the file size
let fileSize = fileHandler.getFileSize("C:/Software/Typescript/FileFunctions/test.txt");

// encrypt the content with SHA1
let encrDataSha = fileHandler.SHA1("C:/Software/Typescript/FileFunctions/test.txt");

// encrypt the content with MD5
let encrDataMD5 = fileHandler.MD5("C:/Software/Typescript/FileFunctions/test.txt");

// output results
console.log("Filename: "+theFile + "FileSize: " + fileSize +
            "\nEncrypted data SHA1: " + encrDataSha +
            "\nEncrypted data MD5: " + encrDataMD5);
