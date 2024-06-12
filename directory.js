// this anonymizes the script. Makes it so that, if ran twice, it won't conflict with itself.
(function () {
  console.log("Jostens Directory Loaded!");
  let timesLoaded = 0;
  listenInterval = "";
  URLInterval = "";

  // Listen for Page Change
  window.addEventListener("routeChangeEvent", pageFunc);
  pageFunc();

  function pageFunc() {
    timesLoaded++;
    console.log("Route Change Detected!");
    var url = window.location.href.split("/");
    if (url.includes("contacts") === true && timesLoaded == 1) {
      console.log("restarting script");
      restartScript();
    }
  }

  function restartScript() {
    let checkInterval = setInterval(testIfLoaded, 100);

    function testIfLoaded() {
      console.log("Checking if loaded");
      var lastElement = document.querySelector(
        "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(14)",
      );
      if (lastElement) {
        // if the last element in the toolbar is loaded
        console.log("Loaded");
        clearInterval(checkInterval); // stop checking
        setTimeout(() => {
          // after 2 seconds,
          addSchoolContactButton();
          DeleteElems();
          listenInterval = setInterval(activeListen, 50); // repeat every 50ms, indefinitely
          URLInterval = setInterval(checkIfPageChange, 2000); // repeat every 2 seconds, indefinitely
        }, 2000);
      }
    }

    function checkIfPageChange() {
      if (!window.location.href.includes("contacts")) {
        // if not in "contacts" anymore
        clearInterval(listenInterval);
        clearInterval(URLInterval);
        throw new Error("Page change detected. Stopping script. Ignore me!"); // this stops all execution of directory.js once the user is no longer on contacts page
      }
    }

    function DeleteElems() {
      document.querySelector(
        "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(11)",
      ).style.display = "none";
      document.querySelector(
        "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)",
      ).style.display = "none";
      document.querySelector(
        "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(14)",
      ).style.display = "none";
      document.querySelector(
        "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(1)",
      ).style.display = "none";
      document.querySelector(
        "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(8)",
      ).style.display = "none";
    }
  }

  function activeListen() {
    //console.log("Listening"); // uncomment when testing

    // listen for and click the "ok, proceed" button
    let buttonElement = document.querySelector(
      "button.hl-btn.inline-flex.items-center.px-4.py-2.border-2.border-curious-blue-400.text-sm.font-medium.rounded.text-curious-blue-500.hover\\:bg-curious-blue-100.focus\\:outline-none.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-curious-blue-500",
    );
    if (buttonElement) {
      if (buttonElement.innerHTML.includes("proceed")) {
        buttonElement.click();
      }
    }

    // listen for and hide the "action" label and field
    let action = document.querySelector(
      "span[data-v-56639245][data-v-4a572634].text-sm.font-medium.text-gray-700",
    );

    if (action) {
      action.style.display = "none";
      document.querySelector(
        '.form-row .form-group input[name="description"]',
      ).style.display = "none";
    }

    let actionOther = document.querySelector(".mt-2 .mt-1 input#action");

    if (actionOther) {
      actionOther.style.display = "none";
      Array.from(document.querySelectorAll("*")).find(
        (el) => el.textContent.trim() === "Action*",
      ).style.display = "none"; // hide the "action*" text above as well
    }

    // check for the last element in the toolbar (this happens when "all" is clicked, and the toolbar refreshes)
    let lastElement = document.querySelector(
      "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(14)",
    );
    if (lastElement) {
      DeleteElems();
      addSchoolContactButton();
    }
  }

  function addSchoolContactButton() {
    console.log("Adding School Contact Button");

    let schoolContactButton = document.createElement("schoolContactButton");
    schoolContactButton.innerHTML = `
      <span
        data-v-0c055ff2=""
        data-tooltip="tooltip"
        data-placement="top"
        title="Add School Contact"
        onclick="addForm()" >
            <button
            data-v-0c055ff2=""
            type="button"
            data-original-title="Add School Contact"
            class="btn btn-light btn-sm">

            <i class="fas fa-school" style="position: relative;left: -1px;"></i>
            </button>
        </span>
`;

    let listElement = document.querySelector(
      "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left",
    );

    listElement.insertBefore(schoolContactButton, listElement.children[1]); // append it, but make it first.
  }
})(); // end anonymous function

try {
  // if this script is loaded twice, these functions will already exist. This prevents an "already declared" error.
  function addForm() {
    let body = document.querySelector("body");

    let formHTML = `<customform><div data-v-4a7d910a="" hide-title="" id="__BVID__310___BV_modal_outer_" style="position: absolute; z-index: 1040;"><div id="__BVID__310" role="dialog" aria-labelledby="__BVID__310___BV_modal_title_" aria-describedby="__BVID__310___BV_modal_body_" class="modal fade show" aria-modal="true" style="display: block; padding-left: 0px;"><div class="modal-dialog modal-sm"><span tabindex="0"></span><div id="__BVID__310___BV_modal_content_" tabindex="-1" class="modal-content"><header id="__BVID__310___BV_modal_header_" class="modal-header"><h5 id="__BVID__310___BV_modal_title_" class="modal-title"></h5><h5 data-v-4a7d910a="" class="modal-title">Add School Contact</h5><button type="button" aria-label="Close" onclick="closeForm()" class="close">×</button></header><div id="__BVID__310___BV_modal_body_" class="modal-body"><div data-v-4a7d910a="" class="modal-body"><div data-v-4a7d910a="" class="modal-body--inner"><form data-v-4a7d910a=""><div data-v-4a7d910a="" class="row"><div data-v-4a7d910a="" class="col-sm-6"><div data-v-4a7d910a="" class="form-group"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr5" data-lpignore="true" data-vv-as="First name"><div data-v-7d86ee8a="" class="flex space-x-3"><span data-v-7d86ee8a="" for="msgsndr5" class="hl-text-input-label block text-sm font-medium text-gray-700 mb-1">School Name</span><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr5" placeholder="e.g. Central High School" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr5" maxlength=""><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div></div></div><div data-v-4a7d910a="" class="col-sm-6"><div data-v-4a7d910a="" class="form-group"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr6" data-lpignore="true" data-vv-as="Last name"><div data-v-7d86ee8a="" class="flex space-x-3"><span data-v-7d86ee8a="" for="msgsndr6" class="hl-text-input-label block text-sm font-medium text-gray-700 mb-1">Mascot</span><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr5" placeholder="e.g. Lions, Tigers, Bears" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr6" maxlength=""><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div></div></div></div><div data-v-4a7d910a="" class="form-group"><span data-v-56639245="" data-v-4a7d910a="" class="text-sm font-medium text-gray-700">School Location</span><div data-v-4a7d910a=""><div data-v-4a7d910a="" class="primary-phone mb-3"><div data-v-4a7d910a="" class="flex mt-2"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr1 disabled:opacity-50 w-2/3" data-lpignore="true" autocomplete="msgsndr1"><div data-v-7d86ee8a="" class="flex space-x-3"><!----><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr1" placeholder="City, State Abbreviation" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr1" maxlength=""><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div><!----></div><div data-v-4a7d910a="" class="mt-3"><span data-v-4a7d910a="" class="error phone-error-message" style="display: none;"></span></div><div data-v-4a7d910a="" class="mt-3"><span data-v-4a7d910a="" class="error phone-error-message" style="display: none;"> Duplicate Phone Number. You can't enter the Phone Number twice </span></div></div><div data-v-4a7d910a="" class="additional-phone"></div><div data-v-4a7d910a="" class="text-curious-blue-700 mt-4 ml-1 add-email-font cursor-pointer whitespace-nowrap"><div data-v-4a7d910a="" class="personal-logo"><div data-v-4a7d910a="" id="customer_photo_dropzone" class="picture drag_drop"><!----></div><div data-v-4a7d910a="" class="picture-text"><h4 data-v-4a7d910a="">Upload School Logo</h4><p data-v-4a7d910a="">We recommend using transparent logo files.</p><div data-v-4a7d910a="" class="btns"><button data-v-4397f5e0="" data-v-4a7d910a="" type="button" class="hl-btn mr-2 inline-flex items-center px-4 py-2 border-2 border-curious-blue-400 text-sm font-medium rounded text-curious-blue-500 hover:bg-curious-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500 dz-clickable" id="profileChangePhoto"><!----> Change </button><button data-v-4a7d910a="" type="button" class="btn btn-light2"> Remove </button></div></div></div></div></div></div><div data-v-4a7d910a="" class="modal-buttons d-flex align-items-center justify-content-between"><button data-v-4397f5e0="" data-v-4a7d910a="" type="button" class="hl-btn inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500" data-dismiss="modal"><!----> Close </button><div data-v-4a7d910a=""><button data-v-4397f5e0="" data-v-4a7d910a="" type="submit" class="hl-btn  inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-apple-500 hover:bg-apple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-500 "><!---->Submit</button></div></div></form></div></div></div><!----></div><span tabindex="0"></span></div></div><div id="__BVID__310___BV_modal_backdrop_" class="modal-backdrop"></div></div></customform>`;

    // create a new HTML element with the innerHTMl above:
    var formElement = document.createElement("customForm");
    formElement.innerHTML = formHTML;

    body.appendChild(formElement);
  }

  function closeForm() {
    let body = document.querySelector("body");
    let formElement = document.querySelector("customForm");
    body.removeChild(formElement);
  }
} catch (error) {}
