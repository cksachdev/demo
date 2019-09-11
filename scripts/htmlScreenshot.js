const readdirp = require('readdirp');
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const util = require('util');
const template = require('./template');
const inputDir = '';
const outputDir = '';
const read = async directory => {
  let files = await readdirp.promise(directory, {
    alwaysStat: false,
    fileFilter: '*.html'
  });
  files = files.map(file => {
    return {
      fullPath: file.fullPath,
      path: file.path,
      filename: file.basename
    };
  });
  return files;
};

read(inputDir).then(async files => {
  console.log('Count :: ' + files.length);
  const browser = await puppeteer.launch();
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    let filename = path.basename(file.filename, 'html');
    let isFileExist = await fs.pathExists(`${outputDir}${filename}jpg`);
    if (!isFileExist) {
      const page = await browser.newPage();
      let htmlContent = fs.readFileSync(file.fullPath);
      htmlContent = _.toString(htmlContent);
      htmlContent = _.replace(template, 'HTML_VIEW_TEMPLATE', htmlContent);
      await page.setContent(htmlContent, {
        waitUntil: 'load'
      });
      await page.screenshot({
        path: `${outputDir}${filename}jpg`,
        type: 'jpeg',
        fullPage: true
      });
      await page.close();
    } else {
      console.log(`File already converted ${filename}html`);
    }
  }
  await browser.close();
});
