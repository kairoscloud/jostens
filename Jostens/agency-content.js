alert("Code version 2.40"); // uncomment when testing
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

function deleteElems() { // you can probably guess what this does
    document.querySelector("#Copy\\ School\\ Settings").remove();
    document.querySelector("#Paste\\ School\\ Settings").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
    document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)").remove();
}

function checkAndHideElement() {
    console.log("Checking and hiding element");
    let element = document.getElementById('action');
    if (element) {
        element.style.display = 'none'; // hide the input field
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).style.display = 'none'; // hide the "action*" text above
    }

    let element2 = document.querySelector('div.px-2.--blue.info-blue.margin-30');
    if(element2){
        element2.style.display = 'none';
        let buttonElement = document.querySelector('button.hl-btn.inline-flex.items-center.px-4.py-2.border-2.border-curious-blue-400.text-sm.font-medium.rounded.text-curious-blue-500.hover\\:bg-curious-blue-100.focus\\:outline-none.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-curious-blue-500');

        // this is a little trickish, but it looks fine
        if(document.querySelector('h5.modal-title:contains("Send SMS")')){
            buttonElement.innerHTML = "Send SMS";
        } else if (document.querySelector('h5.modal-title:contains("Send Email")')){
            buttonElement.innerHTML = "Send Email";
        }

        // after 2 seconds, make it visible again
        setTimeout(() => {
            element2.style.display = 'block';
        }, 1500);
        //}
    }
}
