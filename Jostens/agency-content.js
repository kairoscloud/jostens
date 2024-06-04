restartScript();
function restartScript(){
alert("Code version 2.47X"); // uncomment when testing
checkInterval = setInterval(testIfLoaded, 100);


function testIfLoaded() {
    console.log("Checking if loaded");
    var lastElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(17)");
    if (lastElement) { // if the last element in the toolbar is loaded
        console.log("Loaded");
        clearInterval(checkInterval);
        deleteElems();
        tagCheckInterval = setInterval(checkAndHideElement, 50); // this will repeat indefinitely every 50ms
    }
}

function deleteElems() { // remove each of the following
    document.querySelector("#Copy\\ School\\ Settings").remove(); // copy school settings
    document.querySelector("#Paste\\ School\\ Settings").remove(); // paste school settings
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove(); // "Bulk Whatsapp", which is a hidden element, but apparently the node is still there
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove(); // Email verification
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove(); // Add/edit to company
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove(); // Merge up to 10 contacts
}

function checkAndHideElement() {
    console.log("Checking and hiding element");
    let element = document.getElementById('action');
    if (element) { // as soon as the "action" field is found...
        element.style.display = 'none'; // hide it
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).style.display = 'none'; // hide the "action*" text above as well
    }

    let element2 = document.querySelector('div.px-2.--blue.info-blue.margin-30'); // look for the blue warning textbox
    if(element2){ // if it exists...
        element2.style.display = 'none';
        let buttonElement = document.querySelector('button.hl-btn.inline-flex.items-center.px-4.py-2.border-2.border-curious-blue-400.text-sm.font-medium.rounded.text-curious-blue-500.hover\\:bg-curious-blue-100.focus\\:outline-none.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-curious-blue-500');
        let infoBoxTitle = document.querySelector('header.modal-header > h5.modal-title > h5.modal-title[data-v-4a572634]').innerHTML;
        // this is a little trickish, but it looks fine. It replaces the "Ok, proceed" text with either "send SMS" or "send email". You can't remove the button, because that would break the script that auto-clicks it.
        buttonElement.innerHTML = infoBoxTitle;
        // console.log(infoBoxTitle);
        if(infoBoxTitle == " Add to Automation "){
            buttonElement.click(); // click the button, this is to fix what happens in "automation".
        }
        // after 1.2 seconds, make it visible again.
        setTimeout(() => {
            element2.style.display = 'block';
        }, 1200);

    }
}
}
