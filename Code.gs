function doGet(e) {

  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("index");
}

function btnExecuteClicked() {
  Logger.log("EXECUTE!!!");
}