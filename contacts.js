let cScript_ver = 30;
// The Kairos Cloud contacts custom script
// What does it do?
//  - Autofills the search field with whatever query is passed through the URL
//  - Autofills & hides the action label/field
//  - Autoclicks "ok, proceed"
//  - Hides each of the toolbar elements (5 total):
//    - pipeline change
//    - Send review requests
//    - Email verification
//    - Add/edit to company
//    - Merge up to 10 contacts
//    - Bulk WhatsApp
// This script takes the place of the old directory.js
// Runs on https://app.kairoscloud.io/v2/location/*/contacts/smart_list/All
// Loads from (github link here)
// Jacob Westra – jacob@thekairosmedia.com

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
  // this is just protocol as defined by the script loader
  // it's not necessary for the functionality of the rest of the script
  // it's just a way to keep track of the script's status
  let activeUpdateIntv = setInterval(() => {
    active[cScript_id] = Date.now();
    if (stop[cScript_id]) {
      clearInterval(activeUpdateIntv);
      console.log(cScript_id + " stopped!");
    }
  }, 2000);

  // autofill the search field with the query from the URL
  // GHL should honestly have this feature built in
  if (window.location.href.includes("?search=")) {
    waitForElement(
      ".hl-text-input.shadow-sm.focus\\:ring-curious-blue-500.focus\\:border-curious-blue-500.block.w-full.sm\\:text-sm.border-gray-300.rounded.disabled\\:opacity-50.text-gray-800.form-light",
      false,
      function (element) {
        // extract the query from the URL (?search=)
        let query = new URLSearchParams(window.location.search).get("search");
        console.log("Searchbox found. Autofilling with '" + query + "'");
        element.value = query; // autofill the search field
        // we trigger the "input" event
        element.dispatchEvent(new Event("input", { bubbles: true }));
      },
    );
  }

  // autofill the action field
  waitForElement(
    'input[placeholder="Enter a description for the action (to be shown in tracking report)"]',
    true,
    function (element) {
      fillAndHide(element);
    },
  );

  // autofill another version of the action field
  waitForElement(
    'input[placeholder="Enter a description for the action"]',
    true,
    function (element) {
      fillAndHide(element);
    },
  );

  // autofill ANOTHER version of the action field
  // was this GHL dev having a stroke? Why are we on version 3 of this? They don't even include the closing ) parenthesis.
  waitForElement(
    'input[placeholder="Write a name for the action (to be shown in tracking report"]',
    true,
    function (element) {
      fillAndHide(element);
    },
  );

  waitForElement(
    ".text-sm.font-medium.text-gray-700",
    true,
    function (element) {
      if (element.innerText == "Action") {
        fillAndHide(element);
      }
    },
  );

  // hide the action label + field
  waitForElement(
    "#bulk-action-form > div:nth-child(5)",
    true,
    function (element) {
      element.style.display = "none";
    },
  );

  // hide the info/warning box ("Please note the actions will be performed over a period of time...")
  waitForElement("#info", true, function (element) {
    element.style.display = "none";
  });

  // autoclick the "ok, proceed" button
  waitForElement(
    ".hl-btn.inline-flex.items-center.px-4.py-2.border-2.border-curious-blue-400.text-sm.font-medium.rounded.text-curious-blue-500.hover\\:bg-curious-blue-100.focus\\:outline-none.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-curious-blue-500",
    true,
    function (element) {
      if (element.innerText.toLowerCase().includes("proceed")) {
        element.click();
      }
    },
  );

  hideToolbarElement("Pipeline Change");
  hideToolbarElement("Send Review Requests");
  hideToolbarElement("Email Verification");
  hideToolbarElement("Add/Edit to Company");
  hideToolbarElement("Merge up to 10 Contacts");
  hideToolbarElement("Bulk WhatsApp");
}

function hideToolbarElement(title) {
  waitForElement(
    'span[data-tooltip="tooltip"][data-placement="top"][title="' + title + '"]',
    true,
    function (element) {
      element.style.display = "none";
    },
  );
}

function waitForElement(query, continuous, callback) {
  console.log("Listening for element '" + query + "'...");
  const observer = new MutationObserver(() => {
    const element = document.querySelector(query);
    // if exists, and if not already modified
    if (element && !element.hasAttribute("cScriptModified")) {
      element.setAttribute("cScriptModified", true); // mark as modified
      if (!continuous) {
        observer.disconnect();
      }
      console.log("Found element '" + query + "'");
      callback(element); // call the callback function with found element as arg
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initial check in case the element is already present
  const element = document.querySelector(query);
  if (element && !element.hasAttribute("cScriptModified")) {
    element.setAttribute("cScriptModified", true);
    if (!continuous) {
      observer.disconnect();
    }
    console.log("Found element '" + query + "'");
    callback(element);
  }
}

function fillAndHide(element) {
  element.value = "null";
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.style.display = "none";
}
