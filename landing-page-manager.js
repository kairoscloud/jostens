alert("Test Alert on Page");

// Page Parameters
var getPageParameter = function getPageParameter(page, sParam) {
  var sPageURL = page,
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true :
        decodeURIComponent(sParameterName[1]);
    }
  }
}

// School Name
var elmt = document.getElementById("heading-TQ6D2FZwfH").children[0].children[0].children[0];
var url = window.location.search.substring(1);
var code1 = getPageParameter(url, 's');
var code2 = decodeURIComponent(code1);
var code3 = decodeURIComponent(code2);
if (code3 === undefined || code3 === "") {} else {
  elmt.innerText = code3;
}

// Landing Page 1
var a = getPageParameter(url, 'a');
if (a === undefined || a === "") {} else {
  var page1 = decodeURIComponent(a);
  var page2 = decodeURIComponent(page1);
  var link1 = getPageParameter(page2, 'link');
  document.getElementById("sub-heading-IwIjSkUJ0_").children[0].children[0].children[0].innerText = link1;
  document.getElementById("button-2Lc0SsS2f8_btn").href = "https://" + link1;
  document.getElementById("button-KUKWa7tLCH_btn").href = "https://sites.jostens.co/builder?" + a;
  document.getElementById("button-5G3bbZQ9J-_btn").addEventListener('click', del1func);
  document.getElementById("row-A1TTPdhN1C").classList.remove("hide");
}

function del1func() {
  document.getElementById("button-2ZZvz8CiLx_btn").click();
}

// Create Button
var s1 = getPageParameter(url, 's');
var s = encodeURIComponent(s1);
var t1 = getPageParameter(url, 't');
var t = encodeURIComponent(t1);
var p = getPageParameter(url, 'p');
var id = getPageParameter(url, 'id');
var si = getPageParameter(url, 'contact_id');
var createURL = "https://sites.jostens.co/builder?s=" + s + "&t=" + t + "&p=" + p + "&id=" + id + "&si=" + si;
document.getElementById("button-kEzGDePQkp_btn").href = createURL;
