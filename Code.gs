function doGet(e) {

  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("index");
}

function btnExecuteClicked(userInfo) {

  Logger.log(userInfo);

  var url ="https://docs.google.com/spreadsheets/d/1DuaKm2L1mCmqiPQGDxMW2wrchxJT1a8CHy03WLIFFJg/edit?gid=0#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([userInfo.fName, userInfo.lName, userInfo.weapon, new Date()]);
}