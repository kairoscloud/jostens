alert("Code version 2.9");
checkInterval = setInterval(testIfLoaded, 100);


function testIfLoaded() {
    console.log("testing!");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) {
        console.log("Loaded");
        deleteElems();
        listenForTagClick();
        clearInterval(checkInterval);
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
    (document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(6) > button")).addEventListener('click', checkInterval = setInterval(checkAndHideElement, 50));
    (document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(7) > button")).addEventListener('click', checkInterval = setInterval(checkAndHideElement, 50));
}

function checkAndHideElement() {
    let element = document.getElementById('action');
    if (element != "" && element != null && element != undefined) {
        element.style.display = 'none';
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).remove();
        clearInterval(checkInterval);
    }
}
