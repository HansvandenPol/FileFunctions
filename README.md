# FileFunctions
[![Build Status](https://travis-ci.org/HansvandenPol/FileFunctions.svg?branch=addTravis)](https://travis-ci.org/HansvandenPol/FileFunctions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A small library providing functions to manipulate text files.

## Table of Contents
* Product description
* Installation
  * Installing NodeJS
  * Installing Npm
  * Dependencies
* API
* Usage
* Contribution

## Product description
This is a library that contains functionality to retrieve local file information. It's written in NodeJS and Typescript.

## Installation
The product runs on NodeJS and uses Npm to install its packages.

### Installing NodeJS

* **Windows and OS X**

Install Node by going to this link: [NodeJS Download page](https://nodejs.org/en/download/)

* **Linux**

If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

Test: Run **node -v**. The version should be higher than v0.10.32.

### Installing Npm
Run **npm -install npm@latest -g**

Test: run **npm -v**

### Dependencies
Run **npm install**. 

This installs all the packages in your project directory.

## API

### getFileFromPath

### Usage
<getFileFromPatch(path);>

Param | Type| Details
----- | --- | -------
path | string | The path to the file you want to process


**getFileSize ()** - Calculated the file size.</br>
**SHA1()** - Encrypts the file using the sha1 algorithm.</br>
**MD5()** - Encrypts the file using the sha1 algorithm.
