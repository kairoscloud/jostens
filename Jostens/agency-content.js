alert("Code version 2.16");
checkInterval = setInterval(testIfLoaded, 100);


function testIfLoaded() {
    console.log("Checking if loaded");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) {
        console.log("Loaded");
        clearInterval(checkInterval);
        deleteElems();
        setInterval(lookForElems(), 100);
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

function lookForElems(){ // this repeats every 100ms
    let element = document.querySelector("#__BVID__330___BV_modal_content_"); // this is for the SMS/email dialogue box
    if (element){
        element.style.display = 'none';
        setTimeout(function(){ // hide it, but unhide it after 2 seconds
            element.style.display = 'block';
        }, 2000);
    }

    let element2 = document.getElementById('action'); // this is for the "action" form
    if (element2) {
        element2.style.display = 'none'; // make it invisible
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).remove(); // hide the label element above
    }

}
