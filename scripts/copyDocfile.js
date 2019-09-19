// Copy all doc files from one directory to another directory

const readdirp = require('readdirp');
const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const docDir = '/Users/vaibhav/Vaibhav/Documents/CBSE_HARD_DISK/DocData/';
const outputDir = '/Users/vaibhav/Documents/Review_engg_documents/';
const isStats = false;
// List of filepath
const inputFiles = [];

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

(async () => {
  let failedList = [];
  var r = /[^\/]*$/;
  for (let index = 0; index < inputFiles.length; index++) {
    var filepath = inputFiles[index];
    var desDir = filepath.replace(r, '');
    desDir = outputDir + desDir;
    filepath = docDir + filepath;
    filepath = _.replace(filepath, 'jpg', 'doc');
    var filename = path.basename(filepath);
    try {
      await fs.ensureDir(desDir);
      await fs.copy(filepath, `${desDir}${filename}`);
      console.log(`file copied ${desDir}${filename}`);
    } catch (error) {
      failedList.push(filename);
    }
  }
  console.log(`failed List :: ${failedList}`);
})();
