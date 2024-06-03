alert("Code version 2.2");
setInterval(testIfLoaded(), 100);


function testIfLoaded() {
    var x = document.getElementsByClassName("contactsloaded")[0];
    if (x != undefined && x != null) {
        alert("Contacts loaded");
    }
}
