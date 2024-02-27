// Load Function
window.loadInt = setInterval(loadFunc, 100);

function loadFunc() {
  var x = document.getElementById("loaddiv");
  if (x === undefined || x === null) {} else {
    document.getElementsByClassName("col-12")[8].style.display = "none";
    document.getElementById("row-vmRU-jtNzU").classList.remove("hide");
    document.getElementById("row-_YL_7azO14").classList.remove("hide");
    document.getElementById("sub-heading-WG6XAr3yzg").children[0].children[0].children[0].children[0].addEventListener('click', urlFunc);
    window.editorInt = setInterval(editorFunc, 100);
    clearInterval(loadInt);
    fillformFunc();
  }
}

// Fill Form Function
function fillformFunc() {
  var url = window.location.href;
  var fill = url.split("?")[1];
  if (fill === undefined || fill === null || fill === "") {} else {
    var id = fill.split("id=")[1].split("&sec=")[0];
    alert(id);
  }
}

// Editor Function
function editorFunc() {
  var id = document.getElementById("DMqsWSFgrZGG6HSv8ZGS").value;
  var scope = document.getElementById("bwsVb6yruPE21WBFcCSM").value;
  var url = "https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://oauth.kairoscloud.io/url-redirect&client_id=" + id +"&scope=" + scope;
  document.getElementById("CFX6jNxLm6WeiJaeUb3o").value = url;
  document.getElementById("CFX6jNxLm6WeiJaeUb3o").dispatchEvent(new Event("input", {
    bubbles: true
  }));
  document.getElementById("sub-heading-WG6XAr3yzg").children[0].children[0].children[0].children[0].href = url;
}

// Authorization URL Function
function urlFunc() {
  document.getElementById("form-U6L7OZsxzGYub8vgDGtq").parentElement.classList.remove("d-none");
  document.getElementsByClassName("col-12")[8].style.display = "block";
  document.getElementById("row-_YL_7azO14").style.display = "none";
}
