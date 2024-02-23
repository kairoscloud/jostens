// Load Function
window.loadInt = setInterval(loadFunc, 100);

function loadFunc() {
  var x = document.getElementById("loaddiv");
  if (x === undefined || x === null) {} else {
    document.getElementsByClassName("col-12")[9].style.display = "none";
    document.getElementById("row-vmRU-jtNzU").classList.remove("hide");
    document.getElementById("row-_YL_7azO14").classList.remove("hide");
    document.getElementById("sub-heading-WG6XAr3yzg").children[0].children[0].children[0].children[0].addEventListener('click', urlFunc);
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
  var url = "https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://oauth.kairoscloud.io/redirect-url&client_id=" + id +"&scope=" + scope;
  document.getElementById("CFX6jNxLm6WeiJaeUb3o").value = url;
  document.getElementById("CFX6jNxLm6WeiJaeUb3o").dispatchEvent(new Event("input", {
    bubbles: true
  }));
  document.getElementById("sub-heading-WG6XAr3yzg").children[0].children[0].children[0].children[0].href = url;
}

// Authorization URL Function
function urlFunc() {
  document.getElementById("form-U6L7OZsxzGYub8vgDGtq").parentElement.classList.remove("d-none");
  document.getElementsByClassName("col-12")[9].style.display = "block";
  document.getElementById("row-_YL_7azO14").style.display = "none";
}
