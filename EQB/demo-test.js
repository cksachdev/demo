  
//function zipFileCount()
//{
//  var files = DriveApp.getFolderById("1conmXZqHBQBWJqSpCW7XdsVJ4V5ZpMY3").getFiles();
//  var count = 0;
//  
//  while ( files.hasNext() ) {
//    if(files.next().getMimeType() == "application/zip"){
//     count++; 
//    }
//  }
//  Logger.log("COUNT :: " + count);
//}  



//function folderExist() {
//  try {
//    var folderName = DriveApp.getFileById("15gZr_RqZl17ppaqK_gqhjFgkRX5fBkA3Km81lllQUtsQ_0");
//    Logger.log(folderName);
//  } catch(e) {
//     Logger.log(e.message); 
//  }
//  
//}

//function initJson() {
//  
//  var folder = DriveApp.getFolderById("10vqK4DIntRXWMTDRh2Dd9BlWZtxhwhzU");
//  var obj = {
//    "font-family" : ["1","2","3"]  
//  }
//  
//  obj = JSON.stringify(obj);
//  var jsonFile = folder.createFile("post.json",obj);
//  var readJson = folder.getFilesByName(jsonFile);  
//  readJson = readJson.next();
//  readJson = readJson.getAs('application/json')
//  readJson = readJson.getDataAsString();
//  // log the contents of the file
//  Logger.log(readJson);
//}
//  
//function initFontFromFile() {
//  
//  var fontList = {
//    "fontFamily" : []
//  }
//  
//  var activeDocBody = DocumentApp.openById("15gZr_RqZl17ppaqK_gqhjFgkRX5fBkA3Km81QUtsQ_0").getBody(); 
//  var pars = activeDocBody.getParagraphs();
//  for(var i=0; i < pars.length; i++) {
//    var fontName = activeDocBody.getParagraphs()[i].getFontFamily();
//    if(fontList["fontFamily"].contains(fontName) == false) {
//       fontList["fontFamily"].push(fontName);
//    }
//  }
//  Logger.log(fontList); 
//}
//
//Array.prototype.contains =function(v) {
//  for(var i=0; i< this.length; i++) {
//    if(this[i] === v) return true;
//  }
//  return false;
//}
//
//function initFont() {
//  var activeDocBody = DocumentApp.openById("1vtHjwK8QXwDWBW1uXBLSp2ApxgmaONgzITy2LVN5CPw").getBody();  
//  var pars = activeDocBody.getParagraphs();
//  Logger.log(pars);
//  Logger.log(pars.length)
//  for(var i=0; i < pars.length; i++) {
//       Logger.log(activeDocBody.getParagraphs()[i].getFontFamily());
//  }
//}

//
//function convertToHtml() { 
// Logger.log("API Calling...");
// var url = "https://docs.google.com/feeds/download/documents/export/Export?id=15gZr_RqZl17ppaqK_gqhjFgkRX5fBkA3Km81QUtsQ_0&exportFormat=zip";
// var param =  {
//          method      : "get",
//          headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
//          muteHttpExceptions:true,
//        };
//  
//    var response = UrlFetchApp.fetch(url,param);
// 
//  var responseCode = response.getResponseCode()
//var responseBody = response.getContentText()
//
//if (responseCode === 200) {
//  Logger.log(responseCode);
//  
//} else {
//  Logger.log(Utilities.formatString("Request failed. Expected 200, got %d: %s", responseCode, responseBody))
//}
//
//}