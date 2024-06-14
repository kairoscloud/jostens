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
    if (
      url.includes("contacts") === true &&
      allowedLocation(window.location.href)
    ) {
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
      // if the last element in the toolbar is loaded
      if (lastElement) {
        // if not Jostens subaccount...
        if (
          !document
            .querySelector(".filter-option .filter-option-inner")
            .innerHTML.includes("Jostens")
        ) {
          throw new Error(
            "Not a Jostens subaccount. Stopping script. Ignore me!",
          );
          clearInterval(checkInterval);
        }
        console.log("Loaded");
        clearInterval(checkInterval); // stop checking
        listenInterval = setInterval(activeListen, 50); // repeat every 50ms, indefinitely
        URLInterval = setInterval(checkIfPageChange, 2000); // repeat every 2 seconds, indefinitely
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
  }

  function activeListen() {
    //console.log("Listening"); // uncomment when testing

    if (!allowedLocation(window.location.href)) {
      throw new Error("Not allowed location. Stopping script. Ignore me!");
    }

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
      let actionForm = document.querySelector(
        '.form-row .form-group input[name="description"]',
      );
      actionForm.value = "dummyValue";
      // action.style.display = "none";
      // actionForm.style.display = "none";
    }

    let actionOther = document.querySelector(".mt-2 .mt-1 input#action");

    if (actionOther) {
      actionOther.value = "dummyValue";
      // actionOther.style.display = "none";
      // Array.from(document.querySelectorAll("*")).find(
      //   (el) => el.textContent.trim() === "Action*",
      // ).style.display = "none"; // hide the "action*" text above as well
    }

    // check for the last element in the toolbar (this happens when "all" is clicked, and the toolbar refreshes)
    let lastElement = document.querySelector(
      "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(14)",
    );
    if (lastElement) {
      DeleteElems();
      if (!document.getElementById("schoolContactButton")) {
        addSchoolContactButton();
      }
    }
  }

  function DeleteElems() {
    // JACOB TODO: name each element being deleted in comments
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

  function addSchoolContactButton() {
    console.log("Adding School Contact Button");

    let schoolContactButton = document.createElement("schoolContactButton");
    schoolContactButton.innerHTML = `
      <span
        data-v-0c055ff2=""
        data-tooltip="tooltip"
        data-placement="top"
        title="Add School Contact"
        id="schoolContactButton"
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

    // add eventListeners to display tooltip when hovering over
    schoolContactButton.addEventListener("mouseover", () => {
      let offsetX = 0;
      // This is to account for the menu's being opened or not. If the menu is open, the tooltip will be off by a bit.
      if (
        document
          .querySelector(
            "#sidebar-v2 > div.sm\\:hidden.lg\\:block.xl\\:block.absolute.-right-2.bottom-5.z-50 > button",
          )
          .innerHTML.includes("fa-chevron-circle-left")
      ) {
        offsetX = 250;
      } else {
        offsetX = 83;
      }
      let body = document.querySelector("body");
      let tooltipElem = document.createElement("addSchoolTooltip");
      tooltipElem.id = "addSchoolTooltip";
      tooltipElem.innerHTML =
        `<div id="__bv_tooltip_167__addSchoolTooltip" role="tooltip" tabindex="-1" data-v-0c055ff2="" class="tooltip b-tooltip bs-tooltip-top" x-placement="top" style="position: absolute; transform: translate3d(` +
        offsetX +
        `px, 141px, 0px); top: 0px; left: 0px; will-change: transform;"><div class="arrow" style="left: 50px;"></div><div class="tooltip-inner">Add School Contact</div></div>`;
      body.append(tooltipElem);
    });

    schoolContactButton.addEventListener("mouseout", () => {
      document.getElementById("addSchoolTooltip").remove();
    });
  }
})(); // end anonymous function

try {
  // if this script is loaded twice, these functions will already exist. This prevents an "already declared" error.
  function addForm() {
    let body = document.querySelector("body");

    let formHTML = `<customform><div data-v-4a7d910a="" hide-title="" id="__BVID__310___BV_modal_outer_" style="position: absolute; z-index: 1040;"><div id="__BVID__310" role="dialog" aria-labelledby="__BVID__310___BV_modal_title_" aria-describedby="__BVID__310___BV_modal_body_" class="modal fade show" aria-modal="true" style="display: block; padding-left: 0px;"><div class="modal-dialog modal-sm"><span tabindex="0"></span><div id="__BVID__310___BV_modal_content_" tabindex="-1" class="modal-content"><header id="__BVID__310___BV_modal_header_" class="modal-header"><h5 id="__BVID__310___BV_modal_title_" class="modal-title"></h5><h5 data-v-4a7d910a="" class="modal-title">Add School Contact</h5><button type="button" aria-label="Close" onclick="closeForm()" class="close">×</button></header><div id="__BVID__310___BV_modal_body_" class="modal-body"><div data-v-4a7d910a="" class="modal-body"><div data-v-4a7d910a="" class="modal-body--inner"><form data-v-4a7d910a=""><div data-v-4a7d910a="" class="row"><div data-v-4a7d910a="" class="col-sm-6"><div data-v-4a7d910a="" class="form-group"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr5" data-lpignore="true" data-vv-as="First name"><div data-v-7d86ee8a="" class="flex space-x-3"><span data-v-7d86ee8a="" for="msgsndr5" class="hl-text-input-label block text-sm font-medium text-gray-700 mb-1">School Name</span><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr5" placeholder="e.g. Central High School" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr5" maxlength="" id="ASCname"><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div></div></div><div data-v-4a7d910a="" class="col-sm-6"><div data-v-4a7d910a="" class="form-group"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr6" data-lpignore="true" data-vv-as="Last name"><div data-v-7d86ee8a="" class="flex space-x-3"><span data-v-7d86ee8a="" for="msgsndr6" class="hl-text-input-label block text-sm font-medium text-gray-700 mb-1">Mascot</span><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr5" placeholder="e.g. Lions, Tigers, Bears" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr6" maxlength="" id="ASCmascot"><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div></div></div></div><div data-v-4a7d910a="" class="form-group"><span data-v-56639245="" data-v-4a7d910a="" class="text-sm font-medium text-gray-700">School Location</span><div data-v-4a7d910a=""><div data-v-4a7d910a="" class="primary-phone mb-3"><div data-v-4a7d910a="" class="flex mt-2"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr1 disabled:opacity-50 w-2/3" data-lpignore="true" autocomplete="msgsndr1"><div data-v-7d86ee8a="" class="flex space-x-3"><!----><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr1" placeholder="City, State Abbreviation" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr1" maxlength="" id="ASClocation"><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div><!----></div><div data-v-4a7d910a="" class="mt-3"><span data-v-4a7d910a="" class="error phone-error-message" style="display: none;"></span></div><div data-v-4a7d910a="" class="mt-3"><span data-v-4a7d910a="" class="error phone-error-message" style="display: none;"> Duplicate Phone Number. You can't enter the Phone Number twice </span></div></div></div><div data-v-4a7d910a="" class="form-group"><span data-v-56639245="" data-v-4a7d910a="" class="text-sm font-medium text-gray-700">School Logo Link</span><div data-v-4a7d910a=""><div data-v-4a7d910a="" class="primary-phone mb-3"><div data-v-4a7d910a="" class="flex mt-2"><div data-v-7d86ee8a="" data-v-4a7d910a="" class="hl-text-input-container msgsndr1 disabled:opacity-50 w-2/3" data-lpignore="true" autocomplete="msgsndr1"><div data-v-7d86ee8a="" class="flex space-x-3"><!----><!----></div><div data-v-7d86ee8a="" class="relative rounded-md shadow-sm"><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!----></div><div data-v-7d86ee8a="" class="absolute inset-y-0 left-0 mx-2 flex items-center pointer-events-none hl-text-input-addon"><!----></div><input data-v-7d86ee8a="" type="text" data-lpignore="true" autocomplete="msgsndr1" placeholder="e.g. https://example.com/logo.png" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="msgsndr1" maxlength="" id="ASClogo"><!----><div data-v-7d86ee8a="" class="absolute inset-y-0 right-0 flex items-center pointer-events-none hl-text-input-addon pr-3"><!----></div></div><!----><!----></div><!----></div></div></div></div></div><div data-v-4a7d910a="" class="modal-buttons d-flex align-items-center justify-content-between"><button data-v-4397f5e0="" data-v-4a7d910a="" type="button" class="hl-btn inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500" data-dismiss="modal" onclick="closeForm()"><!----> Close </button><div data-v-4a7d910a=""><button data-v-4397f5e0="" data-v-4a7d910a="" type="submit" class="hl-btn  inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-apple-500 hover:bg-apple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-500 " onclick="submitForm(event)"><!---->Submit</button></div></div></form></div></div></div><!----></div><span tabindex="0"></span></div></div><div id="__BVID__310___BV_modal_backdrop_" class="modal-backdrop"></div></div></customform>`;

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

  function submitForm(event) {
    event.preventDefault(); // prevent it from going to another page. Not sure why it does this

    // NOTE TO JACOB: this code came from https://highlevel.stoplight.io/docs/integrations/1a30b217da571-get-location-access-token-from-agency-token
    // CompanyID: eRzyNWgO7fUGsvSQv7eR // (Kairos Cloud agency), what you're accessing from
    // locationId: owNEzpbrfBjp4weSARXD // (jostens demo), what you're accessing. You will create a contact in this subaccount

    // taken from I9 on the sheet
    let accessTokenP =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJDb21wYW55IiwiYXV0aENsYXNzSWQiOiJlUnp5TldnTzdmVUdzdlNRdjdlUiIsInNvdXJjZSI6IklOVEVHUkFUSU9OIiwic291cmNlSWQiOiI2NWQ5MDdiMmNjYTdjZTdkNmNiZDhkYWUtbHN6NXlybG4iLCJjaGFubmVsIjoiT0FVVEgiLCJwcmltYXJ5QXV0aENsYXNzSWQiOiJlUnp5TldnTzdmVUdzdlNRdjdlUiIsIm9hdXRoTWV0YSI6eyJzY29wZXMiOlsiYnVzaW5lc3Nlcy5yZWFkb25seSIsImJ1c2luZXNzZXMud3JpdGUiLCJjb21wYW5pZXMucmVhZG9ubHkiLCJjYWxlbmRhcnMucmVhZG9ubHkiLCJjYWxlbmRhcnMud3JpdGUiLCJjYWxlbmRhcnMvZXZlbnRzLnJlYWRvbmx5IiwiY2FsZW5kYXJzL2V2ZW50cy53cml0ZSIsImNhbGVuZGFycy9ncm91cHMucmVhZG9ubHkiLCJjYWxlbmRhcnMvZ3JvdXBzLndyaXRlIiwiY2FsZW5kYXJzL3Jlc291cmNlcy5yZWFkb25seSIsImNhbGVuZGFycy9yZXNvdXJjZXMud3JpdGUiLCJjYW1wYWlnbnMucmVhZG9ubHkiLCJjb252ZXJzYXRpb25zLnJlYWRvbmx5IiwiY29udmVyc2F0aW9ucy53cml0ZSIsImNvbnZlcnNhdGlvbnMvbWVzc2FnZS5yZWFkb25seSIsImNvbnZlcnNhdGlvbnMvbWVzc2FnZS53cml0ZSIsImNvbnZlcnNhdGlvbnMvcmVwb3J0cy5yZWFkb25seSIsImNvbnRhY3RzLnJlYWRvbmx5IiwiY29udGFjdHMud3JpdGUiLCJjb3Vyc2VzLndyaXRlIiwiY291cnNlcy5yZWFkb25seSIsImZvcm1zLnJlYWRvbmx5IiwiZm9ybXMud3JpdGUiLCJpbnZvaWNlcy5yZWFkb25seSIsImludm9pY2VzLndyaXRlIiwiaW52b2ljZXMvc2NoZWR1bGUucmVhZG9ubHkiLCJpbnZvaWNlcy9zY2hlZHVsZS53cml0ZSIsImludm9pY2VzL3RlbXBsYXRlLnJlYWRvbmx5IiwiaW52b2ljZXMvdGVtcGxhdGUud3JpdGUiLCJsaW5rcy5yZWFkb25seSIsImxjLWVtYWlsLnJlYWRvbmx5IiwibGlua3Mud3JpdGUiLCJsb2NhdGlvbnMud3JpdGUiLCJsb2NhdGlvbnMucmVhZG9ubHkiLCJsb2NhdGlvbnMvY3VzdG9tVmFsdWVzLnJlYWRvbmx5IiwibG9jYXRpb25zL2N1c3RvbVZhbHVlcy53cml0ZSIsImxvY2F0aW9ucy9jdXN0b21GaWVsZHMucmVhZG9ubHkiLCJsb2NhdGlvbnMvY3VzdG9tRmllbGRzLndyaXRlIiwibG9jYXRpb25zL3Rhc2tzLnJlYWRvbmx5IiwibG9jYXRpb25zL3Rhc2tzLndyaXRlIiwibG9jYXRpb25zL3RhZ3MucmVhZG9ubHkiLCJsb2NhdGlvbnMvdGFncy53cml0ZSIsImxvY2F0aW9ucy90ZW1wbGF0ZXMucmVhZG9ubHkiLCJtZWRpYXMucmVhZG9ubHkiLCJtZWRpYXMud3JpdGUiLCJmdW5uZWxzL3JlZGlyZWN0LnJlYWRvbmx5IiwiZnVubmVscy9wYWdlLnJlYWRvbmx5IiwiZnVubmVscy9mdW5uZWwucmVhZG9ubHkiLCJmdW5uZWxzL3JlZGlyZWN0LndyaXRlIiwib2F1dGgud3JpdGUiLCJvYXV0aC5yZWFkb25seSIsIm9wcG9ydHVuaXRpZXMucmVhZG9ubHkiLCJvcHBvcnR1bml0aWVzLndyaXRlIiwicGF5bWVudHMvb3JkZXJzLnJlYWRvbmx5IiwicGF5bWVudHMvb3JkZXJzLndyaXRlIiwicGF5bWVudHMvaW50ZWdyYXRpb24ucmVhZG9ubHkiLCJwYXltZW50cy9pbnRlZ3JhdGlvbi53cml0ZSIsInBheW1lbnRzL3RyYW5zYWN0aW9ucy5yZWFkb25seSIsInBheW1lbnRzL3N1YnNjcmlwdGlvbnMucmVhZG9ubHkiLCJwYXltZW50cy9jdXN0b20tcHJvdmlkZXIucmVhZG9ubHkiLCJwYXltZW50cy9jdXN0b20tcHJvdmlkZXIud3JpdGUiLCJwcm9kdWN0cy5yZWFkb25seSIsInByb2R1Y3RzLndyaXRlIiwicHJvZHVjdHMvcHJpY2VzLnJlYWRvbmx5IiwicHJvZHVjdHMvcHJpY2VzLndyaXRlIiwic2Fhcy9jb21wYW55LnJlYWQiLCJzYWFzL2NvbXBhbnkud3JpdGUiLCJzYWFzL2xvY2F0aW9uLnJlYWQiLCJzYWFzL2xvY2F0aW9uLndyaXRlIiwic25hcHNob3RzLnJlYWRvbmx5Iiwic25hcHNob3RzLndyaXRlIiwic29jaWFscGxhbm5lci9vYXV0aC5yZWFkb25seSIsInNvY2lhbHBsYW5uZXIvb2F1dGgud3JpdGUiLCJzb2NpYWxwbGFubmVyL3Bvc3QucmVhZG9ubHkiLCJzb2NpYWxwbGFubmVyL3Bvc3Qud3JpdGUiLCJzb2NpYWxwbGFubmVyL2FjY291bnQucmVhZG9ubHkiLCJzb2NpYWxwbGFubmVyL2FjY291bnQud3JpdGUiLCJzb2NpYWxwbGFubmVyL2Nzdi5yZWFkb25seSIsInNvY2lhbHBsYW5uZXIvY3N2LndyaXRlIiwic29jaWFscGxhbm5lci9jYXRlZ29yeS5yZWFkb25seSIsInNvY2lhbHBsYW5uZXIvdGFnLnJlYWRvbmx5Iiwic3VydmV5cy5yZWFkb25seSIsInVzZXJzLnJlYWRvbmx5IiwidXNlcnMud3JpdGUiLCJ3b3JrZmxvd3MucmVhZG9ubHkiXSwiY2xpZW50IjoiNjVkOTA3YjJjY2E3Y2U3ZDZjYmQ4ZGFlIiwiY2xpZW50S2V5IjoiNjVkOTA3YjJjY2E3Y2U3ZDZjYmQ4ZGFlLWxzejV5cmxuIiwiYWdlbmN5UGxhbiI6ImFnZW5jeV9tb250aGx5XzQ5NyJ9LCJpYXQiOjE3MTgzOTE1MzYuMzA3LCJleHAiOjE3MTg0Nzc5MzYuMzA3fQ.E_P0tIg2DzbtbxLplfqduy59iZ0Vvad2AAEaWL-fQpNnaYjX2nw56Dd3rMU9vtPpNz_458KKZDpDrTmQE8myzc1vez7iIzbknjCwqZZ4Uq4oBgQ0RsA1WbtaY4kE_LYSvN4ND0MZAsb-a5A9bBW20mxUWdMZqX2uENJos55EF9TTjGF-X-InCmd1b5neUVFm1weGQUgVRQ3dCvc2A1DtE4J1Nc-UFmN4_S2Q-tmSkbdB5O9E5ZP9P0f2czhjPqW16C4dpgdS5rCDIhfUHW7dqBqOoH8dfJAi8sQ-8FqIIf6YHFDrewI0Sey1NSaCK2ky2jSYwmShlANfMOGzvYBnwv9R_sz0R1PgWmc_PxxJfkxzCGsaSv7Bk8x_JbXGSv7Ed1JJ5Kvd_lNm0g3-Y7y_A5cb0ZCsPBwdlSCV5nEdmH9nuaA1qImBQfVY3zOoM8k4MpPYR9uFBLqlCq7vPPnuJm626cCh2TS6YHn9d-1EDlSDUvHW3sYdqKvouk4TFKTBqwd0eiHWReHx8x9DQSAcYeh98TCTLLI_ZuAYnMX-OxldFCXzPXG0l0p_uLw01iEqbogM6e4aWePHChruOBZUmAmskOtL_KN95L9xdpQztBi2dOn6_cTHK7xHMkLovrAw-kCgKF_Z_YcFyYxM1RYUd4aNkI_HaSthZacS0GflMiI";

    let locationP = window.location.href.split("/")[5];

    let contactP =
      `{
      "firstName": "School",
      "lastName": "Contact",
      "companyName": "` +
      document.getElementById("ASCname").value +
      `",
      "locationId": "` +
      locationP +
      `",
      "dnd": true,
      "tags": [
        "school"
      ],
      "customFields": [
              {
                "key": "school_name",
                "field_value": "` +
      document.getElementById("ASCname").value +
      `"
              },
              {
                "key": "mascot",
                "field_value": "` +
      document.getElementById("ASCmascot").value +
      `"
              },
              {
                "key": "school_location",
                "field_value": "` +
      document.getElementById("ASClocation").value +
      `"
              },
              {
                "key": "school_logo_link",
                "field_value": "` +
      document.getElementById("ASClogo").value +
      `"
              },
              {
                "key": "last_updated",
                "field_value": "` +
      new Date().toISOString() +
      `"
              }
            ]
          }`;

    createNewContact(accessTokenP, locationP, contactP);
    closeForm();
  }

  function createNewContact(accessToken, location, contact) {
    getAccessToken(accessToken, location).then((result) => {
      createContact(result, contact);
    });

    async function getAccessToken(accessTokenX, locationX) {
      const url = "https://services.leadconnectorhq.com/oauth/locationToken";
      const options = {
        method: "POST",
        headers: {
          Version: "2021-07-28",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: "Bearer " + accessTokenX,
        },
        body: new URLSearchParams({
          companyId: "eRzyNWgO7fUGsvSQv7eR", // Kairos Cloud agency
          locationId: locationX,
        }),
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        //console.log(data);
        return data.access_token;
      } catch (error) {
        console.error(error);
      }
    }

    async function createContact(tokenX, contactX) {
      const url = "https://services.leadconnectorhq.com/contacts/";
      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + tokenX,
          Version: "2021-07-28",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: contactX,
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }
} catch (error) {}

function allowedLocation(pageURL) {
  let pagelocation = pageURL.split("/")[5];
  return (
    pagelocation == "owNEzpbrfBjp4weSARXD" || // jostens demo
    pagelocation == "Psie74UmJnCQR7xxTRXa" || // jostens of Newhall, CA
    pagelocation == "jvJWOe4Ds0CGBV6p2cl9" || // jostens of Pittsburg, KS
    pagelocation == "SUIEeAqgsArrIiPCkEna" || // jostens of Kalamazoo, MI
    pagelocation == "piRoFhArDXY4EYyWbmex" || // jostens of Lisle, IL
    pagelocation == "PqeI2v9lcicAtJBI7mzs" || // jostens of NE Kansas
    pagelocation == "20wqXn14oRdWJ2IN02G3" // your local jostens (Clackmas, OR)
  );
}
