function doGet(e) {

  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("index");
}

function btnExecuteClicked(uname) {
  Logger.log("EXECUTE!!!");
  Logger.log(uname);
}