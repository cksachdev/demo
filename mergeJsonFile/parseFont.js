const readdirp = require('readdirp');
const fs = require('fs');
const _ = require('lodash');

const read = async (directory) => {
  let files = await readdirp.promise(directory, { alwaysStat: false, fileFilter: '*.json'});
  files = files.map(file => file.fullPath);
  return files;
};

let read_files = async files => {
  return files.reduce((finalContent, filePath) => {
    let content = require(filePath);
    if(!_.isEmpty(content.fontFamily)) 
      finalContent.fontFamily = finalContent.fontFamily.concat(content.fontFamily);
    return finalContent;
  }, {"fontFamily": [] });
}

read('./QuestionDemo/').then((files) => {
  console.log(files.length);
  read_files(files).then(fonts => {
    fonts = _.uniq(fonts.fontFamily);
    fonts = { 'fontFamily': fonts }
    fs.writeFileSync('./final.json', JSON.stringify(fonts));
  });
});




// const fs = require('fs');
// const path = require('path');
// const dir = path.join(__dirname, 'jsonFile');
// const read_directory = async dir =>
//   fs.readdirSync(dir).reduce((finalContent, file) => {
//     filePath = path.join(dir, file);
//     console.log(filePath);
//     let content = require(filePath);
//     finalContent.fontFamily = finalContent.fontFamily.concat(content.fontFamily);
//     return finalContent;
//   }, {"fontFamily": [] });

// read_directory(dir).then(data => {
//   fs.writeFileSync('./final.json', JSON.stringify(data));
// });


