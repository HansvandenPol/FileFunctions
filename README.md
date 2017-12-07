# FileFunctions
[![Build Status](https://travis-ci.org/HansvandenPol/FileFunctions.svg?branch=addTravis)](https://travis-ci.org/HansvandenPol/FileFunctions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A small library providing functions to manipulate text files.

## Table of Contents
* [Product description](https://github.com/HansvandenPol/FileFunctions#Product_description)
* [Installation](https://github.com/HansvandenPol/FileFunctions#Installation)
  * [Installing NodeJS](https://github.com/HansvandenPol/FileFunctions#Installing_NodeJS)
  * [Installing Npm](https://github.com/HansvandenPol/FileFunctions#Installing_Npm)
  * [Dependencies](https://github.com/HansvandenPol/FileFunctions#Dependencies)
* [API](https://github.com/HansvandenPol/FileFunctions#API)
* [Contribution](https://github.com/HansvandenPol/FileFunctions#Contribution)

## Product description
This is a library that contains functionality to retrieve local file information. It's written in NodeJS and Typescript.

## Installation
The product runs on NodeJS and uses Npm to install its packages.

### Installing NodeJS

* **Windows and OS X**

Install Node by going to this link: [NodeJS Download page](https://nodejs.org/en/download/)

* **Linux**

If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

Test the version

```node -v```

The version should be higher than v0.10.32.

### Installing Npm
Run the installer 

```npm -install npm@latest -g```

Test the version

```npm -v```

### Dependencies
Install dependencies

```npm install``` 

This installs all the packages in your project directory.

## API

### getFileFromPath

### Overview
Returns the content of the file.

### Usage
```getFileFromPatch(path);```

Param | Type| Details
----- | --- | -------
path | string | The path to the file you want to process

### Returns
string: The content of the file.

### getFileSize

### Overview
Returns the size of the file.

### Usage
```getFileSize(path);```

Param | Type| Details
----- | --- | -------
path | string | The path to the file you want to process

### Returns
number: Size of the file.

### SHA1

### Overview
Encrypts the file using the sha1 algorithm.

### Usage
```SHA1(path);```

Param | Type| Details
----- | --- | -------
path | string | The path to the file you want to process

### Returns
string: SHA1 Encrypted version of the file data.

### MD5

### Overview
Encrypts the file using the sha1 algorithm.

### Usage
```MD5(path);```

Param | Type| Details
----- | --- | -------
path | string | The path to the file you want to process

### Returns
string: MD5 Encrypted version of the file data.

