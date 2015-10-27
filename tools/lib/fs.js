/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import fs from 'fs';
import mkdirp from 'mkdirp';

const readFile = (filename) => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, data) =>
    err ? reject(err) : resolve(data));
});

const writeFile = (filename, contents) => new Promise((resolve, reject) => {
  fs.writeFile(filename, contents, 'utf8', err =>
    err ? reject(err) : resolve());
});

const mkdir = (name) => new Promise((resolve, reject) => {
  mkdirp(name, err => err ? reject(err) : resolve());
});

export default { readFile, writeFile, mkdir };
