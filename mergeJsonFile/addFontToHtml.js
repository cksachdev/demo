const fs = require('fs');

let fileName = './index.html';

let htmlContent = fs.readFileSync(fileName);
htmlContent = htmlContent.toString();
var tag = '<head><link rel="stylesheet" type="text/css" href="theme.css">'
var result = htmlContent.replace(/<head>/g, tag);
fs.writeFileSync('index.html', result);
