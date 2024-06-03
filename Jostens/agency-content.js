alert("Code version 2.4");
checkInterval = setInterval(testIfLoaded(), 100);


function testIfLoaded() {
    console.log("testing!");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) {
        alert("Loaded");
    }
}
