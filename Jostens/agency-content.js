alert("Code version 2.18");
checkInterval = setInterval(testIfLoaded, 100);


function testIfLoaded() {
    console.log("Checking if loaded");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) {
        console.log("Loaded");
        clearInterval(checkInterval);
        deleteElems();
        listenForTagClick();
    }
}

function deleteElems() {
    document.querySelector("#Copy\\ School\\ Settings").remove();
    document.querySelector("#Paste\\ School\\ Settings").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
}

function listenForTagClick() {
    setTimeout(() => {
        document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(6)").addEventListener('click', checkForAction()); // add tag
        document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(7)").addEventListener('click', checkForAction()); // remove tag
    }, 5000); // for some odd reason, the two get auto-clicked when the page loads, so we need to wait a bit before adding the event listeners
    }

function checkForAction() {
    console.log("clicked!");
    tagCheckInterval = setInterval(checkAndHideElement, 50);
}

function checkAndHideElement() {
    console.log("listening for action!");
    let element = document.getElementById('action');
    if (element) {
        console.log("Found!");
        element.style.display = 'none';
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).remove();
        clearInterval(tagCheckInterval);
    }
}
