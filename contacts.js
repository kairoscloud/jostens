let cScript_ver = 6;
// The Kairos Cloud contacts custom script
// What does it do?
//  - Autofills the search field with whatever query is passed through the URL
// To-do:
//  - Autoclicks "ok, proceed"
//  - Hides the action label/field
//  - Hides each of the toolbar elements (5 total)
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
let sbox = "";
main_contacts();
function main_contacts() {
  waitForElement(
    ".hl-text-input.shadow-sm.focus\\:ring-curious-blue-500.focus\\:border-curious-blue-500.block.w-full.sm\\:text-sm.border-gray-300.rounded.disabled\\:opacity-50.text-gray-800.form-light",
    function (element) {
      sbox = element;
      element.value = "autofilled!"; // autofill the search field
      // we press "enter" to search
      const event = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13, // 'Enter' key code
        which: 13,
        bubbles: true, // Allows the event to bubble up the DOM
      });
      element.dispatchEvent(event);
    },
  );
}

function waitForElement(query, callback) {
  const observer = new MutationObserver(() => {
    const element = document.querySelector(query);
    if (element && !element.hasAttribute("cScriptModified")) {
      element.setAttribute("cScriptModified", true);
      observer.disconnect();
      callback(element);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initial check in case the element is already present
  const element = document.querySelector(query);
  if (element && !element.hasAttribute("cScriptModified")) {
    element.setAttribute("cScriptModified", true);
    observer.disconnect();
    callback(element);
  }
}

//// End global scope ////
