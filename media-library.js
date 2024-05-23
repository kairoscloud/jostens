document.addEventListener('DOMContentLoaded', function() {
    alert("test1");
    // Find the iframe element with the specific src attribute
    var iframe = document.querySelector('iframe[src="https://app.kairoscloud.io/location/PqeI2v9lcicAtJBI7mzs/medias"]');
    
    // Check if the iframe exists
    if (iframe) {
        alert("test2");
        // Add an event listener to trigger when the iframe has loaded
        iframe.addEventListener('load', function() {
            alert("test3");
            deleteElems(); // delete elements
        });
    }
});


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

// Delete the "create image using AI" banner
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

// Delete the back button

    // Find all span elements with the specified class
    var spanElements = document.querySelectorAll('.n-button__content');
    
    // Loop through all span elements to find the one containing the "Back" text
    spanElements.forEach(function(span) {
        if (span.textContent.trim() === 'Back') {
            // Remove the parent element of the found span
            span.parentNode.removeChild(span);
        }
    });

}
