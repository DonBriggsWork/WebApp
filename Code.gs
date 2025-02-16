function doGet(e) {

  Logger.log(e);
  // return HtmlService.createHtmlOutputFromFile("index");
  return HtmlService.createTemplateFromFile('index') 
          .evaluate()
          .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function btnExecuteClicked(userInfo) {

  Logger.log(userInfo);

  var url ="https://docs.google.com/spreadsheets/d/1DuaKm2L1mCmqiPQGDxMW2wrchxJT1a8CHy03WLIFFJg/edit?gid=0#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([userInfo.fName, userInfo.lName, userInfo.weapon, new Date()]);
}


/**
 * include
 * 
 * Include an external file in the current file.
 * 
 * @params  string filename The name of the file to include, without the extension added by editor
 * @return  HTML String??
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
