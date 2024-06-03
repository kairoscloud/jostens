alert("Code version 2.30"); // uncomment when testing
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

    let element2 = document.querySelector('div.d-flex.align-items-top.justify-content-start.mx-1.my-4[data-v-4a572634]'); // find the blue info box
    if(element2){
        let element3 = document.querySelector('div.d-inline-flex[data-v-4a572634] button.hl-btn[data-v-4397f5e0]:not([hidden]):not([aria-hidden])'); // find the "ok, proceed" button
        // let innerHTML2 = `<span data-v-4a572634=""><i data-v-4a572634="" class="fa fa-exclamation-triangle mr-4"></i></span><span data-v-4a572634=""> Please note The actions will be performed over a period of time. You can track the progress on the bulk actions page. </span>`;
        // let innerHTML3 = `<!----> Ok, proceed`;
        //console.log(element2.innerHTML);
        //console.log(element3.innerHTML);
        element2.style.display = 'none'; // hide the blue info box
        element3.style.display = 'none'; // hide the "ok, proceed" button
        setTimeout(() => {
            element2.style.display = 'block'; // 1.5 seconds later, show them again
            element3.style.display = 'block';
        }, 1500);   
        clearInterval(tagCheckInterval);
        setTimeout(() => {
            tagCheckInterval = setInterval(checkAndHideElement, 50); // 10 seconds later, start checking again
        }, 10000);
    }
}
