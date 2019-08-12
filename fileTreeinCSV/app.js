var ks = require("klaw-sync");
var inputPath = '/home/praveen/pg/test';
let directories;
let files;
try {
    directories = ks(inputPath, {nofile: true});
    //Generate for the input path as well
    generateReport(inputPath);
    directories.forEach(function(dir){
        generateReport(dir.path);
    });
} catch (er) {
    console.error(er)
}

function generateReport(path) { 
    files = ks(path, {nodir: true, depthLimit:0});
    var fileObjs = [];
    files.forEach(function(file){
        var fileObj = {};
        fileObj.path = file.path;   
        fileObj.size = file.stats.size / 1024 + "kb";
        fileObjs.push(fileObj);
    });
    csvwriter(path, fileObjs);
}

function csvwriter(pathLocal, dataLocal) {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    console.log("In csv writer....")
    const csvWriter = createCsvWriter({
        path: pathLocal.concat('/', 'out.csv'),
        header: [
            { id: 'path', title: 'Path' },
            { id: 'size', title: 'Size' }
        ]
    });
    csvWriter
        .writeRecords(dataLocal)
        .then(() => console.log('The CSV file was written successfully'));
}
