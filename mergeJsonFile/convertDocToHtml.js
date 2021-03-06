const readdirp = require('readdirp');
const fs = require('fs');
const _ = require('lodash');
const util = require('util');
const exec = util.promisify(require('child_process').execSync);
const inputDir = "/home/vaibhav/Documents/CBSE/RawData/"; 

const read = async (directory) => {
  let files = await readdirp.promise(directory, { alwaysStat: false, fileFilter: '*.doc' });
  files = files.map((file) => {
     return  { fullPath: file.fullPath, path : file.path}
  });
  return files;
};

read(inputDir).then((files) => {
  console.log("Count :: " + files.length);
  files.forEach(async file => {
    var r = /[^\/]*$/;
    let outputPath = file.fullPath.replace(r, '');
    console.log(outputPath);
    var command = `libreoffice --convert-to HTML:HTML --outdir ${outputPath} ${file.fullPath}`;
    const { stdout, stderr } = await exec(command);
    if (stderr) {
      console.error(`ERROR: ${stderr}`);
    }

    console.log(stdout);

  });

});
