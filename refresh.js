// based mostly on agency-refresh.js. I'll be sure to optimize this
// TODO: run a test to see which page the script is running on, and import the appropriate script based on which page is loading it
// for now, everything is just media-library.js
// I'll fix this after that's done.

var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
var id = Math.random().toString(36).slice(2, 7);
var src = "https://drewderose.github.io/jostenscustomcode/media-library.js?" + id;
script.setAttribute("id", "jostens-custom-code_agency-content");
script.src= src;
head.appendChild(script);
