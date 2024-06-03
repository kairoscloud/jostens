alert("Code version 2.25"); // uncomment when testing
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
    let element = document.getElementById('action');
    if (element) {
        element.style.display = 'none'; // hide the input field
        (Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === 'Action*')).style.display = 'none'; // hide the "action*" text above
    }

    let element2 = document.querySelector('div.px-2.--blue.info-blue.margin-30[data-v-4a572634]'); // find the blue info box
    if(element2){
        element2.style.display = 'none'; // hide it
        document.querySelector('div.modal-buttons.d-flex.align-items-center.justify-content-between.px-2[data-v-4a572634]').style.display = 'none'; // hide the "cancel" & "Ok, proceed" buttons as well
        // setTimeout(() => {
        //     element2.style.display = 'block'; // 1.5 seconds later, show it again
        // }, 1500);
    }
}
