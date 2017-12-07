"use strict";
exports.__esModule = true;
// Import the nodejs file system
var fs = require("fs");
var md5_1 = require("ts-md5/dist/md5");
var sha1 = require('sha1');
var FileHandler = /** @class */ (function () {
    function FileHandler() {
    }
    // Finds the file and returns the content
    FileHandler.prototype.getFileFromPath = function (path) {
        return fs.readFileSync(path, { encoding: "utf8" });
    };
    // return the file size
    FileHandler.prototype.getFileSize = function (path) {
        var stat = fs.statSync(path);
        return stat.size;
    };
    // Encrypts the content of the file with the SHA1 algorythm.
    FileHandler.prototype.SHA1 = function (path) {
        return sha1(this.getFileFromPath(path));
    };
    // Encrypts the content of the file with the MD5 algorythm.
    FileHandler.prototype.MD5 = function (path) {
        return md5_1.Md5.hashStr(this.getFileFromPath(path));
    };
    return FileHandler;
}());
exports.FileHandler = FileHandler;
