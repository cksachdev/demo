const readdirp = require('readdirp');
const fs = require('fs');
const _ = require('lodash');
const util = require('util');
const exec = util.promisify(require('child_process').execSync);

const read = async (directory) => {
  let files = await readdirp.promise(directory, { alwaysStat: false, fileFilter: '*.doc' });
  files = files.map((file) => {
     return  { fullPath: file.fullPath, path : file.path}
  });
  return files;
};

read('/home/vaibhav/Documents/RawData/EC1Copy/').then((files) => {
  console.log("Count :: " + files.length);
  files.forEach(async file => {
    var r = /[^\/]*$/;
    let outputPath = file.fullPath.replace(r, '');
    var command = `libreoffice --convert-to HTML:HTML --outdir ${outputPath} ${file.fullPath}`;
    const { stdout, stderr } = await exec(command);
    if (stderr) {
      console.error(`ERROR: ${stderr}`);
    }

    console.log(stdout);

  });

});
