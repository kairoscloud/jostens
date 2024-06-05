console.log("Jostens Directory Loaded!");
window.addEventListener('routeChangeEvent', function(e) {
  var url = window.location.href.split("/");
  if (url.contains("contacts") === true) {
    var contacts = document.createElement('script');
    var src1 = "https://kairoscloud.github.io/jostens/contacts-page.js";
    contacts.setAttribute("id", "contacts-page-js");
    contacts.src= src1;
    document.getElementsByTagName('head')[0].appendChild(contacts);
  }
})
