"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var fileHandler_1 = require("../lib/fileHandler");
var fileHandler = new fileHandler_1.FileHandler();
var testPath = 'src/test.txt';
describe('Functions to manipulate a file', function () {
    describe('Get file data from a given path', function () {
        it('returns a string containing file data', function () {
            var output = fileHandler.getFileFromPath(testPath);
            chai_1.expect(output).to.be.a('string');
        });
    });
    describe('Get the file size from a given path', function () {
        it('returns the file size', function () {
            var output = fileHandler.getFileSize(testPath);
            chai_1.expect(output).to.be.a('number');
        });
    });
    describe('SHA1 hash applied on a file', function () {
        it('hashes the file data with SHA1', function () {
            var bfHash = fileHandler.getFileFromPath(testPath);
            var afHash = fileHandler.SHA1(testPath);
            chai_1.expect(afHash).to.not.equal(bfHash);
        });
    });
    describe('MD5 hash applied on a file', function () {
        it('hashes the file data with MD5', function () {
            var bfHash = fileHandler.getFileFromPath(testPath);
            var afHash = fileHandler.MD5(testPath);
            chai_1.expect(afHash).to.not.equal(bfHash);
        });
    });
});
