/**
 * doGet
 * 
 * This function is called by the web server. Thgis function generates an HTML
 * response to be sent to the browser.
 * 
 * @param object e Additional request parameters
 * @return HTML Response to be sent to browser as HTML.
 */

function doGet(e) {

  return HtmlService.createTemplateFromFile('index') 
          .evaluate()
          .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

/**
 * include
 * 
 * Include an external file in the current file.
 * 
 * @params  string filename The name of the file to include, without the extension added by editor
 * @return  string HTML encoded representation of file to be included
 */

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


/**
 * btnExecuteClicked
 * 
 * This function runs to handle 'btnExecute' being clicked on the front end. It appends data passed to the form to a
 * Google Spreadsheet. Note that the URL of the spreadsheet is hard-coded, and is local in the function, and the 
 * spreadsheet must already exist in your gDrive. These are all bad ideas, but they are used for simplicity.
 * 
 * @param JSON userInfo Contains data from input fields passed from the front end
 * @return void
 */
function btnExecuteClicked(userInfo) {

  Logger.log(userInfo);

  var url ="https://docs.google.com/spreadsheets/d/1DuaKm2L1mCmqiPQGDxMW2wrchxJT1a8CHy03WLIFFJg/edit?gid=0#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([userInfo.fName, userInfo.lName, userInfo.weapon, new Date()]);
}