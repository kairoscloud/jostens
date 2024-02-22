// Load Function
const myInterval = setInterval(intFunc, 100);

function intFunc() {
  var a = document.getElementById('mediaimage');
  if (a === undefined || a === null) {} {
    // Client Location ID
window.locationid = getPageParameter('id');
if (locationid === "" || locationid === undefined) {
  alert("ERROR CODE 301: Please contact support.");
  document.getElementById('mediaslink').href = "javascript:void(0);";
} else {
  var startUrl = "https://app.kairoscloud.io/location/";
  var endUrl = "/medias";
  var mediasUrl = startUrl + locationid + endUrl;
  document.getElementById('mediaslink').href = mediasUrl;
  document.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
  document.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
    bubbles: true
  }));
}
    document.getElementById('pastebutton').addEventListener('click', pastebtn);
    document.getElementById('clearbutton1').addEventListener('click', clearFunction1);
    document.getElementById('mybutton2').addEventListener('click', MyFunc2);
    


  var x = document.getElementById("kNki5hB6i5ZvqlBEWjeT");
  if (x === undefined || x === null) {} {
    //encode
    //user phone
    //location id
  }
}

// Page Parameters
window.getPageParameter = function getPageParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
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

// Client Location ID
window.locationid = getPageParameter('id');
if (locationid === "" || locationid === undefined) {
  alert("ERROR CODE 301: Please contact support.");
  document.getElementById('mediaslink').href = "javascript:void(0);";
} else {
  var startUrl = "https://app.kairoscloud.io/location/";
  var endUrl = "/medias";
  var mediasUrl = startUrl + locationid + endUrl;
  document.getElementById('mediaslink').href = mediasUrl;
  document.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
  document.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
    bubbles: true
  }));
}

// Paste Logo Button
async function pastebtn() {
  try {
    var text = await navigator.clipboard.readText();
    document.getElementById('nxxune9mCfHvnxhZl3dO').value = text;
    document.getElementById('nxxune9mCfHvnxhZl3dO').dispatchEvent(new Event("input", {
      bubbles: true
    }));
    document.getElementById('schoolimagelogo1').src = text;
    document.getElementById('logopreview1').style.display = "block";
    document.getElementById('cleartext1').innerText = "Clear";
  } catch (error) {
    alert('Failed to read clipboard.');
  }
}

// Clear Logo Function
function clearFunction1() {
  document.getElementById('logopreview1').style.display = "none";
  document.getElementById('nxxune9mCfHvnxhZl3dO').value = "";
  document.getElementById('nxxune9mCfHvnxhZl3dO').dispatchEvent(new Event("input", {
    bubbles: true
  }));
  document.getElementById('schoolimagelogo1').src = "";
  document.getElementById('cleartext1').innerText = "";
}

// Logo Background Transparency
function MyFunc2() {
  var x = document.getElementById("mediaimage");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("mybutton2").innerHTML = "Is the background of my logo transparent? ↓"
  } else {
    x.style.display = "block";
    document.getElementById("mybutton2").innerHTML = "Is the background of my logo transparent? ↑"
  }
}
