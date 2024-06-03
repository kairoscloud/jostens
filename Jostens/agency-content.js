alert("Code version 2.14");
checkInterval = setInterval(testIfLoaded, 100);


function testIfLoaded() {
    console.log("Checking if loaded");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) {
        console.log("Loaded");
        clearInterval(checkInterval);
        deleteElems();
        listenForTagClick();
        listenforEmailSMSClick();
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
    (document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(6) > button")).addEventListener('click', checkForAction());
    (document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(7) > button")).addEventListener('click', checkForAction());
}

function checkForAction() {
    tagCheckInterval = setInterval(checkAndHideElement, 500);
}

function checkAndHideElement() {
    console.log("listening for action!");
    let element = document.getElementById('action');
    if (element != "" && element != null && element != undefined) {
        element.style.display = 'none';
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).remove();
        clearInterval(tagCheckInterval);
    }
}

function listenforEmailSMSClick(){
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(4)").addEventListener('click', checkforEmailSMSElement());
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(5)").addEventListener('click', checkforEmailSMSElement());
}

function checkforEmailSMSElement(){
    checkEmailSMSInterval = setInterval(checkAndHideEmailSMS, 500);
}

function checkAndHideEmailSMS() {
    let element = document.querySelector("#__BVID__330___BV_modal_content_");
    if (element){
        element.style.display = 'none';
        setTimeout(function(){
            element.style.display = 'block';
        }, 2000);
    }
}
