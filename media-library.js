console.log("script loaded!");
setTimeout(deleteElems(), 10000);

function deleteElems(){

// Delete the "media library" title.

    // Find all h2 elements
    var h2Elements = document.getElementsByTagName('h2');
    
    // Loop through all h2 elements to find the one with the text "Media Library"
    for (var i = 0; i < h2Elements.length; i++) {
        if (h2Elements[i].textContent.trim() === 'Media Library') {
            // Remove the found element
            h2Elements[i].parentNode.removeChild(h2Elements[i]);
            break; // Exit the loop once the element is found and removed
        }
    }

}


if (window.location.href === "https://app.kairoscloud.io/location/PqeI2v9lcicAtJBI7mzs/medias") {
    
    removeElementRepeatedly(1000);

function removeElementRepeatedly(interval) {
    var checkInterval = setInterval(function() {
        if (elementToRemove !== null) {
            (document.querySelector('.mx-4.mt-5.hl-card')).remove();
            clearInterval(checkInterval); // Stop checking once the element is removed
        }
    }, interval);
}
}
