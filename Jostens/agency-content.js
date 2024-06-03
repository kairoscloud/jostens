alert("Code version 2.7");
checkInterval = setInterval(testIfLoaded, 100);


function testIfLoaded() {
    console.log("testing!");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) {
        console.log("Loaded");
        deleteElems();
        clearInterval(checkInterval);
    }
}

function deleteElems() {
    try {
        document.querySelector("#Copy\\ School\\ Settings").remove();
    } catch (error) {}
    try {
    document.querySelector("#Paste\\ School\\ Settings").remove();
    } catch (error) {}
    try {
    document.querySelector("#Add\\ school\\ Contact").remove(); 
    } catch (error) {}
    try {
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    } catch (error) {}
    try {
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    } catch (error) {}
    try {
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    } catch (error) {}
    try {
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    } catch (error) {}
}
