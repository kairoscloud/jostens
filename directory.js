console.log("Jostens Directory Loaded!");

// Random Refresh ID
window.id = Math.random().toString(36).slice(2, 7);

// Listen for Page Change
window.addEventListener('routeChangeEvent', pageFunc);
pageFunc();

// Contacts Page
function pageFunc() {
  console.log("Route Change Detected!");
  var x = document.getElementById("contacts-page-js");
  alert(x);
  var url = window.location.href.split("/");
  if (url.includes("contacts") === true) {
    var contacts = document.createElement('script');
    var src1 = "https://kairoscloud.github.io/jostens/contacts-page.js?" + id;
    contacts.setAttribute("id", "contacts-page-js");
    contacts.src= src1;
    document.getElementsByTagName('head')[0].appendChild(contacts);
  }
}
