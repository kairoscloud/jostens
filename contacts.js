console.log("CONTACTS LOADED!");
let cScript_ver = 0;
// The Kairos Cloud contacts custom script
// What does it do?
//  - Autoclicks "ok, proceed"
//  - Hides the action label/field
//  - Hides each of the toolbar elements (5 total)
//  - Autofills the search field with whatever query is passed through the URL
// This script takes the place of the old directory.js
// Runs on https://app.kairoscloud.io/v2/location/*/contacts/smart_list/All
// Loads from (github link here)
// Jacob Westra – jacob@thekairosmedia.com

//// Begin global scope ////
let cScript_id = "contacts"; // autoload form id later
let cScript_hash = hash(document.currentScript.textContent).substring(4); // last 4 hex digits of hash
console.log(cScript_id + " v" + cScript_ver + "-" + cScript_hash); // format: id v00-ffff
active[cScript_id] = Date.now();

// declare global variables
// why put them in the global scope? It's useful to have them available in the console for debugging purposes
// all variables will be reset when main is called again

// called on initialization or restart
main_contacts();
function main_contacts() {
  // global variables we're resetting
  console.log("main called!");
}

//// End global scope ////
