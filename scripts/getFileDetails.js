const readdirp = require('readdirp');
const _ = require('lodash');
const XLSX = require('xlsx');
const path = require('path');
const inputDir = '';
const fileFilter = '*.html';
const isStats = true;
const subjectCode = 'CBSE';
const worksheetName = subjectCode;
const excelFileName = `${subjectCode}_Html_Details.xlsx`;

const read = async directory => {
  let files = await readdirp.promise(directory, {
    alwaysStat: isStats,
    fileFilter: fileFilter
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
  files = _.groupBy(files, 'filename');
  return files;
};

let formatFileSize = (bytes, decimalPoint) => {
  if (bytes == 0) return '0 Bytes';
  var k = 1024,
    dm = decimalPoint || 2;
  return parseFloat((bytes / k).toFixed(dm));
};

let jsonToExcel = json => {
  var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(json);
  XLSX.utils.book_append_sheet(wb, ws, worksheetName);
  XLSX.writeFile(wb, path.join(inputDir, excelFileName));
};

let getFileSize = (file, obj) => {
  if (_.includes(file.path, 'MS_B')) {
    obj.MS_SIZE = formatFileSize(file.filesize);
  }

  if (_.includes(file.path, 'QP_B')) {
    obj.QP_SIZE = formatFileSize(file.filesize);
  }
  return obj;
};

read(inputDir).then(files => {
  try {
    let fileDetails = [];
    _.forIn(files, (value, key) => {
      let obj = {};
      let subjectCode = path.basename(key, '.html');
      subjectCode = _.trimStart(subjectCode, '151601');
      obj.subjectCode = subjectCode;
      let firstFile = value[0] || '';
      let secondFile = value[1] || '';
      obj = getFileSize(firstFile, obj);
      obj = getFileSize(secondFile, obj);
      obj.MS_SIZE = _.isUndefined(obj.MS_SIZE) ? 0 : obj.MS_SIZE;
      obj.QP_SIZE = _.isUndefined(obj.QP_SIZE) ? 0 : obj.QP_SIZE;
      obj.Total = obj.MS_SIZE + obj.QP_SIZE;
      fileDetails.push(obj);
    });
    jsonToExcel(fileDetails);
    console.log('DONE!!');
  } catch (error) {
    console.log('Error: ' + error.message);
  }
});
