import {expect} from 'chai';
import 'mocha';
import {FileHandler} from '../lib/fileHandler';

const fileHandler = new FileHandler();
const testPath = 'C:/Software/Typescript/FileFunctions/src/test.txt';

describe('Functions to manipulate a file', () => {
  describe('Get file data from a given path', () => {
    it('returns a string containing file data', () => {
      const output: string = fileHandler.getFileFromPath(testPath);
      expect(output).to.be.a('string');
    });
  });

  describe('Get the file size from a given path', () => {
    it('returns the file size', () => {
      const output: number = fileHandler.getFileSize(testPath);
      expect(output).to.be.a('number');
    });
  });

  describe('SHA1 hash applied on a file', () => {
    it('hashes the file data with SHA1', () => {
      const bfHash: string = fileHandler.getFileFromPath(testPath);
      const afHash: string = fileHandler.SHA1(testPath);
      expect(afHash).to.not.equal(bfHash);
    });
  });

  describe('MD5 hash applied on a file', () => {
    it('hashes the file data with MD5', () => {
      const bfHash: string = fileHandler.getFileFromPath(testPath);
      const afHash: string = fileHandler.MD5(testPath);
      expect(afHash).to.not.equal(bfHash);
    });
  });
});
