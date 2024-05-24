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
    alert("Code updated");
    let element = "";
    tryDeleteElement2();
}

function tryDeleteElement2() {
    document.addEventListener('DOMContentLoaded', function() {
        // Create a function to try deleting the element
        function tryDeleteElement() {
            const element = document.querySelector('.mx-4.mt-5.hl-card');
            if (element) {
                element.remove();
                console.log("Element deleted");
                observer.disconnect(); // Stop observing once the element is deleted
            } else {
                console.log("Element not found, retrying...");
            }
        }
    
        // Create a MutationObserver to watch for changes in the DOM
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                tryDeleteElement(); // Try deleting the element on every mutation
            });
        });
    
        // Start observing the document body for changes
        observer.observe(document.body, {
            childList: true,  // Watch for added/removed child nodes
            subtree: true    // Watch for changes in the entire subtree
        });
    
        // Try deleting the element immediately in case it's already present
        tryDeleteElement();
    });
    
}

