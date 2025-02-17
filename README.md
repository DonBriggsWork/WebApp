# WebApp Tutorial

Following a tutorial from YouTube to learn WebApp development, again. This time, may it work out mightily.

I am following a tutorial video series found on Youtube to use Google Action Scripts to build a "Web App". A Google Apps Script web app is an HTML GUI to wrap other Google Scripts. This allows them to be accessible from the web. At least, that is my goal. 
I will commit my code after every successful step, and every lesson chapter. Note that I am following the WebApp tutorial on YouTube located at: https://www.youtube.com/watch?v=RRQvySxaCW0&list=PLv9Pf9aNgemt82hBENyneRyHnD-zORB3l

My ultimate intention is to create an application that can serve as GUI/Front end for an application that I am creating called 'RulesBot' which will automatically organize your gmail based upon pre-set rules.

## Part 1

** Step 1 **

Basic setup. Created a script with 'doGet' function and an HTML file for output. Had the script display the HTML. Played with passing and logging parameters in the Get request.

** Step 2 **

Playing with request parameters and logging.

** Step 3 **

Added an HTML button, and JavaScript to handle it. Still not very complex, but I was happy it worked. Moving on!

** Step 4 **

Added an input box to accept "username" value. Passed it to server, and logged it.

** Step 5 **

Added code to write the "username" value captured from the input box to a Spreadsheet that we had just manually created. Now this is getting cool! We had just manually created the spreadhseet. In the code we accessed it by it's URL. Could have also accessed it by it's ID.

** Step 6 **

Added code to write current date and time to spreadsheet, along with username. Very cool. Remember to manually run btnExecuteClicked function from editor to set permissions before trying to run WebApp, otherwise permissions error will be generated.

## Part 2 - Template Partials & Passing Objects

** Step 1 **

Change input fields to two text fielods and a select box. Pass values to server as a single JSON object. Note that while the field data could be passed to the back end as a single JSON object, the JSON fields had to be passed to appendRow individually. (ie: ws.appendRow([userInfo.fName, userinfo.lName, etc]).

** Step 2 **

Refactor JavaScript and CSS into seperate files, index-js.html and index-css.html respectively. Initially the "include()" code line would print instead of executiung. I had to find a corrected version of the include() function online, and also update the doGet() function. This part was kinda a pain in the butt.

## Part 3 - Materialize CSS UI

** Step 1 **

Add support for Materialize CSS framwork. Add CSS and JS to index.html.
