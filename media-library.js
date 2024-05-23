document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the Media Library element is present
    function checkMediaLibrary() {
        // Find all h2 elements
        var h2Elements = document.getElementsByTagName('h2');
        
        // Loop through all h2 elements to find the one with the text "Media Library"
        for (var i = 0; i < h2Elements.length; i++) {
            if (h2Elements[i].textContent.trim() === 'Media Library') {
                deleteElems(); // delete
                return true; // Element found, exit the function
            }
        }
        return false; // Element not found
    }

    // Initial check in case the element is already present
    if (!checkMediaLibrary()) {
        // If not found, set up a MutationObserver to watch for changes in the DOM
        var observer = new MutationObserver(function(mutationsList, observer) {
            if (checkMediaLibrary()) {
                // Disconnect the observer if the element is found
                observer.disconnect();
            }
        });

        // Start observing the document body for changes
        observer.observe(document.body, { childList: true, subtree: true });
    }
});

function deleteElems(){

// Delete the "media library" title.
document.addEventListener('DOMContentLoaded', function() {
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
});

// Delete the "create image using AI" banner
document.addEventListener('DOMContentLoaded', function() {
    // Find the button with the specified ID
    var button = document.getElementById('imageAI');
    
    // Check if the button exists
    if (button) {
        // Navigate up to the parent div with class 'hl-card-content'
        var parentDiv = button.closest('.hl-card-content');
        
        // Check if the parent div exists
        if (parentDiv) {
            // Remove the parent div
            parentDiv.parentNode.removeChild(parentDiv);
        }
    }
});

// Delete the back button
document.addEventListener('DOMContentLoaded', function() {
    // Find all span elements with the specified class
    var spanElements = document.querySelectorAll('.n-button__content');
    
    // Loop through all span elements to find the one containing the "Back" text
    spanElements.forEach(function(span) {
        if (span.textContent.trim() === 'Back') {
            // Remove the parent element of the found span
            span.parentNode.removeChild(span);
        }
    });
});
}
