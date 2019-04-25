const readdirp = require('readdirp');
const fs = require('fs');
const _ = require('lodash');
var jsdom = require("jsdom").JSDOM;
const filesize = require('filesize');
const size = filesize.partial({ standard: "iec" });
const inputDir = "/home/vaibhav/Documents/RawData/EC1Copy/"; 

let finalContent = {
  subjectname : "EC1",
  questions : [] 
} 

const read = async (directory) => {
  let files = await readdirp.promise(directory, { alwaysStat: true, fileFilter: '*.HTML' });
  files = files.map((file) => {
     return {
        fullPath: file.fullPath,
        path : file.path,
        basename : file.basename,
        size: size(file.stats.size)
      }
  });
  return files;
};

let read_font = async files => {
  return files.reduce((finalContent, file) => {
    
    finalContent.questions = finalContent.questions.concat({
      font: getFontFromHtml(file.fullPath),
      filename: file.basename,
      filesize: file.size
    });
    return finalContent;
  }, finalContent);
}

let getFontFromHtml = (filepath) => {
  var html = fs.readFileSync(filepath, "utf-8");
  var dom = new jsdom(html);
  var window = dom.window;
  var elements = window.document.getElementsByTagName('font');
  let fonts = [];
  for (let node of elements) {
    let fontFamily = node.face;
    fonts = fonts.concat(fontFamily.split(/\n*,\n*/g))
  }
  return _.compact(_.uniq(fonts));
}

read(inputDir).then((files) => {
  read_font(files).then(data => {
    fs.writeFileSync('./parseCsv.json', JSON.stringify(data,null,4));
  });

});
