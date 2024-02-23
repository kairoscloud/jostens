// Load Function
window.loadInt = setInterval(loadFunc, 100);

function loadFunc() {
  var x = document.getElementById("loaddiv");
  if (x === undefined || x === null) {} else {
    document.getElementsByClassName("col-12")[9].style.display = "none";
    window.editorInt = setInterval(editorFunc, 100);
    clearInterval(loadInt);
  }
}

// Editor Function
function editorFunc() {
  var name = document.getElementById("sLwJpaukHsCUNTMv7rFe").value;
  var id = document.getElementById("DMqsWSFgrZGG6HSv8ZGS").value;
  var secret = document.getElementById("elUUxg52bvrZQbXeNkQi").value;
  var sso = document.getElementById("FTHAL47JZmnqQZIwyvc9").value;
  var scope = document.getElementById("bwsVb6yruPE21WBFcCSM").value;
  var url = "https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://oauth.kairoscloud.io&client_id=" + id +"&scope=" + scope;
  document.getElementById("sub-heading-WG6XAr3yzg").children[0].chilren[0].children[0].innerText = url;
}
