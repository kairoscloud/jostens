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

// Load Function
window.loadInterval = setInterval(loadFunc, 100);

function loadFunc() {
  var a = document.getElementById('mediaimage');
  if (a === undefined || a === null) {} {
    // Check for Params
    window.locationid = getPageParameter('id');
    if (locationid === "" || locationid === undefined) {
      window.lidv = false;
    } else {
      window.lidv = true;
    }
    window.userphone = getPageParameter('p');
    if (userphone === "" || userphone === undefined) {
      window.pidv = false;
    } else {
      window.pidv = true;
    }
    if (lidv === false && pidv === true) {
      alert("ERROR CODE 301: Please contact support.");
      document.getElementsByClassName("col-12 menu-field-wrap")[8].style.display = "none";
      document.getElementById('mediaslink').href = "javascript:void(0);";
      document.getElementById("rty6ckbPMktzvsYSAW1M").value = userphone;
      document.getElementById("rty6ckbPMktzvsYSAW1M").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    if (lidv === true && pidv === false) {
      alert("ERROR CODE 201: You will NOT be notified about the status of this submission.");
      var startUrl = "https://app.kairoscloud.io/location/";
      var endUrl = "/medias";
      var mediasUrl = startUrl + locationid + endUrl;
      document.getElementById('mediaslink').href = mediasUrl;
      document.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
      document.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    if (lidv === false && pidv === false) {
      alert("ERROR CODE 502: Please contact support.");
      document.getElementsByClassName("col-12 menu-field-wrap")[8].style.display = "none";
      document.getElementById('mediaslink').href = "javascript:void(0);";
    }
    if (lidv === true && pidv === true) {
      var startUrl = "https://app.kairoscloud.io/location/";
      var endUrl = "/medias";
      var mediasUrl = startUrl + locationid + endUrl;
      document.getElementById('mediaslink').href = mediasUrl;
      document.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
      document.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
        bubbles: true
      }));
      document.getElementById("rty6ckbPMktzvsYSAW1M").value = userphone;
      document.getElementById("rty6ckbPMktzvsYSAW1M").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    // Add Event Listeners
    document.getElementById('pastebutton').addEventListener('click', pastebtn);
    document.getElementById('clearbutton1').addEventListener('click', clearFunction1);
    document.getElementById('mybutton2').addEventListener('click', MyFunc2);
    // Finish
    clearInterval(loadInterval);
    window.editorInt = setInterval(editorFunc, 100);
  }
}

// Editor Function
function editorFunc() {
  var mascot = document.getElementById("DzcUKIO0kLtT5Xv5SP2D").value;
  var school = document.getElementById("zCxe90EEKqnbK7aqJp4n").value;
  var location = document.getElementById("US1EIuubo877vgGIwNQU").value;
  var logo = document.getElementById("nxxune9mCfHvnxhZl3dO").value;
  var id = document.getElementById("4VnDd3UjXSNaugruH3k2").value;
  var phone = document.getElementById("rty6ckbPMktzvsYSAW1M").value;
  var url = "ma=" + mascot + "&hs=" + school + "&cs=" + location + "&ml=" + logo + "&id=" + id + "&up=" + phone;
  var url1 = encodeURIComponent(url);
  var url2 = encodeURIComponent(url1);
  document.getElementById("kNki5hB6i5ZvqlBEWjeT").value = url2;
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
