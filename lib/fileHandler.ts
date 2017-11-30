// Import the nodejs file system
import * as fs from 'fs';
import {Md5} from 'ts-md5/dist/md5';
let sha1 = require('sha1');

export class FileHandler {
  // Finds the file and returns the content
  getFileFromPath(path: string):string
  {
    return fs.readFileSync(path,{encoding:"utf8"});
  }

  // return the file size
  getFileSize(path: string):number
  {
    let stat = fs.statSync(path);
    return stat.size;
  }

  // Encrypts the content of the file with the SHA1 algorythm.
  SHA1(path: string):string
  {
    return sha1(this.getFileFromPath(path));
  }

  // Encrypts the content of the file with the MD5 algorythm.
  MD5(path: string):string
  {
    return <string>Md5.hashStr(this.getFileFromPath(path));
  }
}
