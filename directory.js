console.log("Jostens Directory Loaded!");

// Listen for Page Change
window.addEventListener("routeChangeEvent", pageFunc);
pageFunc();

function pageFunc() {
  console.log("Route Change Detected!");
  var url = window.location.href.split("/");
  if (url.includes("contacts") === true) {
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
      clearInterval(checkInterval);
      // add school contact button after 2s delay
      setTimeout(addSchoolContactButton, 2000);
      return; // exit the function
    }
  }

  function addSchoolContactButton() {
    // set a 2-second delay, then execute the following code

    console.log("Adding School Contact Button");

    let schoolContactButton = document.createElement("schoolContactButton");
    schoolContactButton.innerHTML = `<span
        data-v-0c055ff2=""
        data-tooltip="tooltip"
        data-placement="top"
        title="Add School Contact"
        onclick="alert('Test!');" >
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

    listElement.append(schoolContactButton);
    DeleteElems();
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
  }
}
