/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import { join, dirname } from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Index from '../components/Index';
import task from './lib/task';
import fs from './lib/fs';
import config from '../config';

let writeFile = async (templateFile, outputFile, content) => {
  const template = await fs.readFile(templateFile);

  const html = template.replace('[[content]]', content)
                       .replace('[[time]]', new Date().getTime())
                       .replace(/\[\[name\]\]/g, config.name, 'g');
  await fs.mkdir(dirname(outputFile));
  await fs.writeFile(outputFile, html);
};

export default task(async function render() {
  const content = ReactDOM.renderToString(<Index />);
  await writeFile('./index.template.html', join(__dirname, '../build', 'index.html'), content);
  await writeFile('./include.template.html', join(__dirname, '../build', config.name + '.html'), content);
});
