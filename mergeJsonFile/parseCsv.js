const readdirp = require('readdirp');
const fs = require('fs-extra');
const _ = require('lodash');
var jsdom = require("jsdom").JSDOM;
const inputDir = "/home/vaibhav/Documents/RawData/"; 
const fileFilter = "*.HTML"
const IsfileStat = true;
const QP_PATH = 'QP_B';
const MS_PATH = 'MS_B';

let finalContent = {
  subjectName: "",
  qpcount: 0,
  mscount: 0,
  uniquefonts: [],
  maxFileSize : 0,
  minFileSize : 0,
  questions: [],
}

let init = async () => {
  try {
    let folders = await readdirp.promise(inputDir, { alwaysStat: IsfileStat, depth: 0, type: 'directories'});

    if(_.isEmpty(folders)) throw new Error("Root Directories is empty");

    for (const { basename,fullPath } of folders) {
      let metaData = _.cloneDeep(finalContent);
      metaData.subjectName = basename;
      let files = await getFiles(fullPath);

      if(_.isEmpty(files)) {
        console.log(`There are no html files found inside the ${basename} folder ${fullPath}`);
        continue;
      }

      let { qp, ms, fonts} = await read_font(files);
      
      metaData.qpcount = qp.length;
      metaData.mscount = ms.length;
      metaData.uniquefonts = _.uniq(fonts);
      let questionsList = _.concat(qp, ms);
      metaData.questions.push(...(groupByQuestions(questionsList)));
      metaData.maxFileSize = findMaxFileSize(questionsList, 'filesize').filesize;
      metaData.minFileSize = findMinFileSize(questionsList, 'filesize').filesize;
      await fs.writeFile(`${fullPath}/${basename}.json`, JSON.stringify(metaData, null, 4));
      console.log(`${basename} :: Process successfully done!!`);
    }
  } catch (error) {
    console.error("ERROR :: ", error);
  }
}

let groupByQuestions = questions => {
  return  _(questions)
    .groupBy(x => x.filename)
    .map((value, key) => ({ qp: value[0], ms: value[1] }))
    .value();
} 

let findMaxFileSize = (fontList,maxBy) => {
  return _.maxBy(fontList, maxBy);   
}

let findMinFileSize = (fontList, minBy) => {
  return _.minBy(fontList, minBy);
}

const getFiles = async (directory) => {
  let files = await readdirp.promise(directory, { alwaysStat: IsfileStat, fileFilter: fileFilter });
  files = _.map(files,(file) => {
    return {
      fullPath: file.fullPath,
      path: file.path,
      basename: file.basename,
      size: file.stats.size
    }
  });
  return files;
};

let read_font = async (files) => {
  return files.reduce((obj, file) => {
    let fontList = getFontFromHtml(file.fullPath)
    if (file.path.includes(QP_PATH)) {
      obj.qp = obj.qp.concat({
        fonts: fontList,
        filename: file.basename,
        path : file.path,
        filesize: file.size,
      });
    }
    
    if (file.path.includes(MS_PATH)) {
      obj.ms = obj.ms.concat({
        fonts: fontList,
        filename: file.basename,
        filesize: file.size,
        path: file.path
      });
    }
    obj.fonts = obj.fonts.concat(fontList);
    return obj;
  }, { qp: [], ms: [],fonts : []});
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

init();


