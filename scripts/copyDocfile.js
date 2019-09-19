// Copy all doc files from one directory to another directory

const readdirp = require('readdirp');
const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const inputDir = '/Users/vaibhav/Documents/Review_1star_images/';
const findDir = '/Users/vaibhav/Vaibhav/Documents/CBSE_HARD_DISK/DocData/';
const outputDir = '/Users/vaibhav/Documents/Review_1star_documents/';
const isStats = false;

const read = async (directory, filter) => {
  let files = await readdirp.promise(directory, {
    alwaysStat: isStats,
    fileFilter: filter
  });

  if (_.isEmpty(files)) throw new Error('Given Directory is empty.');
  files = _.map(files, file => {
    return {
      filepath: file.fullPath,
      filename: file.basename,
      filesize: file.stats.size,
      path: file.path
    };
  });
  return files;
};

read(inputDir, '*.jpg').then(async files => {
  let failedList = [];
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    var filename = _.replace(file.filename, 'jpg', 'doc');
    try {
      let docFiles = await read(findDir, filename);
      for (let index = 0; index < docFiles.length; index++) {
        const docFile = docFiles[index];
        var r = /[^\/]*$/;
        let outputPath = docFile.path.replace(r, '');
        console.log('outputPath', outputPath);
        let dDir = `${outputDir}${outputPath}`;
        console.log('dDir', dDir);
        fs.ensureDirSync(dDir);
        let sDir = docFile.filepath;
        await fs.copy(sDir, `${dDir}${docFile.filename}`);
      }
    } catch (error) {
      failedList.push(filename);
    }
  }
  console.log(failedList);
});
