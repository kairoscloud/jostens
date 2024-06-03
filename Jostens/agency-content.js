alert("Code version 2.32"); // uncomment when testing
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

    let element2 = document.querySelector('div.modal-body[data-v-4a572634]');
    if(element2){
        console.log("Found element2");
        element2.style.display = 'none';
        // after 2 seconds, make it visible again
        setTimeout(() => {
            element2.style.display = 'block';
        }, 2000);
    }

    // try {
    //     document.getElementById('action').style.display = 'none'; // hide the input field
    // } catch {}
    // try {
    //     (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).style.display = 'none'; // hide the "action*" text above
    // } catch {}
    // try {
    //     document.querySelector('div.d-inline-flex[data-v-4a572634] button.hl-btn[data-v-4397f5e0]:not([hidden]):not([aria-hidden])').style.display = 'none'; // find the "ok, proceed" button
    // } catch {}
    // try {
    //     document.querySelector('div.d-flex.align-items-top.justify-content-start.mx-1.my-4[data-v-4a572634]').style.display = 'none'; // find the blue info box
    // } catch {}
}
