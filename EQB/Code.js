
function generateFolderTree() {
  try {    
    
    // If you want a tree of any sub folder
    var folderName = DriveApp.getFolderById("1bX3LbIUQH7nUuJr0Hlp9GR1_epMinoQg").getName();
    var parent = DriveApp.getFoldersByName(folderName).next();
    
    // If you want to search from the top (root) folder
    // var parentFolder = DriveApp.getRootFolder();
    getChildFolders(parent); 
//    DocumentApp.getUi().alert("FINISHED");
  } catch (e) {   
    // Logger.log(e.toString());
    Logger.log("Hello");
    Logger.log("Hell");
  }  
}

function getChildFolders(parent) {
  
  var childFolders = parent.getFolders();
  while (childFolders.hasNext()) {
    var childFolder = childFolders.next();
    if(childFolder.getName() == "MS_B" || childFolder.getName() == "QP_B") {
      var files = childFolder.getFiles();
      while (files.hasNext()) {
        var nextFile = files.next();
        if(isExist(childFolder,nextFile,'.zip')) { convertToHtml(childFolder,nextFile.getId(),nextFile.getName()); }
        if(isExist(childFolder,nextFile,'.json')) { listOfAllFonts(childFolder,nextFile.getId(),nextFile.getName()); }
      }
    }
    getChildFolders(childFolder);
  }
}

function isExist(childFolder,nextFile,ext) {
  try {
    var files = childFolder.getFilesByName(nextFile.getName()+ext);
    if(files.hasNext() == false) return true; else return fasle;
  } catch(e) {
    return true;
  }
}


function convertToHtml(folder, fileId,fileName) {
//  Logger.log(fileId);
  var blob = saveAsHtml(fileId,fileName);
  folder.createFile(blob);
}
 

function saveAsHtml(fileId,fileName) { 
  Logger.log("fileName :: " +fileName);
 var id = fileId;
 var url = "https://docs.google.com/feeds/download/documents/export/Export?id="+ fileId +"&exportFormat=zip";
 var param =  {
          method      : "get",
          headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
          muteHttpExceptions:true,
        };
//  var blob = UrlFetchApp.fetch(url,param).getBlob().setName(fileName+".zip");
  var response = UrlFetchApp.fetch(url,param);
  var responseCode = response.getResponseCode();
  
  if (responseCode === 200) {
    Logger.log(responseCode);
    return response.getBlob().setName(fileName+".zip");
  } else {
    Logger.log(Utilities.formatString("Request failed. Expected 200, got %d: %s", responseCode, response.getContentText()));
  }
}

function listOfAllFonts(folder,fileId,fileName) {
  
  var fontList = {
    "fontFamily" : []
  }
  
  var activeDocBody = DocumentApp.openById(fileId).getBody(); 
  var pars = activeDocBody.getParagraphs();
  for(var i=0; i < pars.length; i++) {
    var fontName = activeDocBody.getParagraphs()[i].getFontFamily();
    if(fontName) {
      var isNew = fontList["fontFamily"].contains(fontName);
      Logger.log("isNEW :: " + isNew);
      if(isNew == false && isNew != null) {
        fontList["fontFamily"].push(fontName);
      }
    }
  }
//  Logger.log(fontList);
  folder.createFile(fileName + ".json",JSON.stringify(fontList));
}


Array.prototype.contains = function(v) {
  for(var i=0; i< this.length; i++) {
    if(this[i] === v) return true;
  }
  return false;
}