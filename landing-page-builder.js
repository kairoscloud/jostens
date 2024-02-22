// URL Parameters
window.encodedURI = window.location.search.substring(1);
window.decodedURI = decodeURIComponent(encodedURI);
window.settings = decodedURI.replace(/\+/g, ' ');
window.getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = settings,
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
var pnl = document.getElementById("sub-heading-mj-k4aCoe1");
var pnd = "tel:7858404264‬";
pnl.children[0].children[0].children[0].children[0].href = pnd;

// Load Function
window.iframe = document.getElementById("iframe").contentWindow.document;
const loaderText = setTimeout(loadFunc, 10000);

function loadFunc() {
  var x = iframe.getElementById("closebtn");
  if (x === undefined || x === null) {
    var y = document.getElementById("refreshbutton");
    y.addEventListener('click', refreshFunc);
    document.getElementById("refreshdiv").style.display = "block";
  }
}

function refreshFunc() {
  window.location.reload();
}

window.MyStart = setInterval(startFunc, 50);
var s = getUrlParameter('s');
var s1 = encodeURIComponent('s');
var s2 = encodeURIComponent('s1')
window.defaultURL = s2 + "ha=Senior Families&ba=Important Graduation Information Below!&pa=Everything you need to know to order your graduation products.&ot=Grad Order Due Date:&od=Wednesday, October 30th&va=https://storage.googleapis.com/msgsndr/yfyIrXrm61r57rx3ex4N/media/65cbe745462516526e2344a2.mp4&vb=https://storage.googleapis.com/msgsndr/yfyIrXrm61r57rx3ex4N/media/65cbe745e0653a318a129693.mp4&vc=https://storage.googleapis.com/msgsndr/yfyIrXrm61r57rx3ex4N/media/65cbe7451cd52f29dc008c28.mp4&vd=https://storage.googleapis.com/msgsndr/yfyIrXrm61r57rx3ex4N/media/65cbe745138859936393908a.mp4&ah=1 MINUTE, 38 SECONDS&at=Introduction to the Process&bh=2 MINUTES, 18 SECONDS&bt=Most Popular Way to Order&ch=1 MINUTE, 44 SECONDS&ct=Upgrade Announcing Graduation&dh=1 MINUTE, 56 SECONDS&dt=Walk You Through the Website&ob=Order Now&bl=https://www.jostens.com/&ft=Your school’s graduation partner since 1979.&rn=Jeff Heline&ph=7858404264‬&em=jeff.heline@jostens.com";

function startFunc() {
  var x = iframe.getElementById("closebtn");
  if (x === undefined || x === null) {} else {
    // URL Slashtag Header
    iframe.getElementsByClassName("col-12")[42].style.display = "none";
    // URL Slashtag
    iframe.getElementsByClassName("col-12")[43].style.display = "none";
    // Form Custom Code
    iframe.getElementsByClassName("col-12")[44].style.display = "none";
    // Save Landing Page
    iframe.getElementsByClassName("col-12")[45].style.display = "none";
    // School Logo Link
    iframe.getElementsByClassName("col-12")[46].style.display = "none";
    // Video Link 1
    iframe.getElementsByClassName("col-12")[47].style.display = "none";
    // Video Link 2
    iframe.getElementsByClassName("col-12")[48].style.display = "none";
    // Video Link 3
    iframe.getElementsByClassName("col-12")[49].style.display = "none";
    // Video Link 4
    iframe.getElementsByClassName("col-12")[50].style.display = "none";
    // Custom Color 1
    iframe.getElementsByClassName("col-12")[51].style.display = "none";
    // Custom Color 2
    iframe.getElementsByClassName("col-12")[52].style.display = "none";
    // Save Template
    iframe.getElementsByClassName("col-12")[53].style.display = "none";
    // Encoded URL
    iframe.getElementsByClassName("col-12")[54].style.display = "none";
    // School Contact ID
    iframe.getElementsByClassName("col-12")[55].style.display = "none";
    // Client Location ID
    iframe.getElementsByClassName("col-12")[56].style.display = "none";
    // User Phone Number
    iframe.getElementsByClassName("col-12")[57].style.display = "none";
    // Loading Icon
    document.getElementById("image-SAp0P9SNTl").style.display = "none";
    // Refresh Alert
    document.getElementById("refreshdiv").style.display = "none";
    // Show Form
    document.getElementById("iframe").style.display = "block";
    // Add Event Listeners
    iframe.getElementById("cccbtn").addEventListener('click', ccFunc);
    iframe.getElementById('pastebtn').addEventListener('click', pst1);
    iframe.getElementById("clear1").addEventListener('click', clear1);
    iframe.getElementById('pastebtn1').addEventListener('click', btn1);
    iframe.getElementById('pastebtn2').addEventListener('click', btn2);
    iframe.getElementById('pastebtn3').addEventListener('click', btn3);
    iframe.getElementById('pastebtn4').addEventListener('click', btn4);
    iframe.getElementById('clear2').addEventListener('click', clear2);
    iframe.getElementById("importswitch").addEventListener('click', importSwitch);
    iframe.getElementById('continuebtn').addEventListener('click', contFunc);
    iframe.getElementById("saveswitch").addEventListener('click', saveFunc);
    x.addEventListener('click', closeFunc);
    // Check for IDs
    window.locationid = getUrlParameter('id');
    window.schoolid = getUrlParameter('si');
    if (locationid === "" || locationid === undefined) {
      window.lidv = false;
    } else {
      window.lidv = true;
    }
    if (schoolid === "" || schoolid === undefined) {
      window.sidv = false;
    } else {
      window.sidv = true;
    }
    // Location ID Missing
    if (lidv === false && sidv === true) {
      alert("ERROR CODE 301: Please contact support.");
      iframe.getElementById('mediaslink').href = "javascript:void(0);";
      iframe.getElementById("HSacSfvzoJoCUeDQX1cT").value = schoolid;
      iframe.getElementById("HSacSfvzoJoCUeDQX1cT").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    // School ID Missing
    if (lidv === true && sidv === false) {
      alert("ERROR CODE 302: Please contact support.");
      var startUrl = "https://app.kairoscloud.io/location/";
      var endUrl = "/medias";
      var mediasUrl = startUrl + locationid + endUrl;
      iframe.getElementById('mediaslink').href = mediasUrl;
      iframe.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
      iframe.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    // Both IDs Missing
    if (lidv === false && sidv === false) {
      alert("ERROR CODE 303: Please contact support.");
      iframe.getElementById('mediaslink').href = "javascript:void(0);";
    }
    // Both IDs Present
    if (lidv === true && sidv === true) {
      var startUrl = "https://app.kairoscloud.io/location/";
      var endUrl = "/medias";
      var mediasUrl = startUrl + locationid + endUrl;
      iframe.getElementById('mediaslink').href = mediasUrl;
      iframe.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
      iframe.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
        bubbles: true
      }));
      iframe.getElementById("HSacSfvzoJoCUeDQX1cT").value = schoolid;
      iframe.getElementById("HSacSfvzoJoCUeDQX1cT").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    // User Phone Number
    var userphone = getUrlParameter('p');
    iframe.getElementById("rty6ckbPMktzvsYSAW1M").value = userphone;
    iframe.getElementById("rty6ckbPMktzvsYSAW1M").dispatchEvent(new Event("input", {
      bubbles: true
    }));
    // Finish
    clearInterval(MyStart);
    importFunc(defaultURL);
    window.editorInt = setInterval(editorFunc, 50);
  }
}

// Import Settings
function importSwitch() {
  var value = iframe.getElementById("importswitch").checked;
  if (value === true) {
    importFunc(settings);
  }
  if (value === false) {
    window.location.reload();
  }
}

function importFunc(url) {
  var getimportURL = function getimportURL(sParam) {
    var sPageURL = url,
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
  // Mascot
  var ma = getimportURL('ma');
  if (ma === undefined) {} else {
    iframe.getElementById("DzcUKIO0kLtT5Xv5SP2D").value = ma;
    iframe.getElementById("DzcUKIO0kLtT5Xv5SP2D").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // School Name
  var hs = getimportURL('hs');
  if (hs === undefined) {} else {
    iframe.getElementById("zCxe90EEKqnbK7aqJp4n").value = hs;
    iframe.getElementById("zCxe90EEKqnbK7aqJp4n").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // School Location
  var cs = getimportURL('cs');
  if (cs === undefined) {} else {
    iframe.getElementById("US1EIuubo877vgGIwNQU").value = cs;
    iframe.getElementById("US1EIuubo877vgGIwNQU").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // School Logo
  var ml = getimportURL('ml');
  if (ml === undefined) {} else {
    iframe.getElementById("nxxune9mCfHvnxhZl3dO").value = ml;
    iframe.getElementById("nxxune9mCfHvnxhZl3dO").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Header
  var ha = getimportURL('ha');
  if (ha === undefined) {} else {
    iframe.getElementById("TET2FHWhUoQD3Bv3Bfyg").value = ha;
    iframe.getElementById("TET2FHWhUoQD3Bv3Bfyg").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Body
  var ba = getimportURL('ba');
  if (ba === undefined) {} else {
    iframe.getElementsByName("NihzdkPrZ5Yxd4G2gTz3")[0].value = ba;
    iframe.getElementsByName("NihzdkPrZ5Yxd4G2gTz3")[0].dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Paragraph
  var pa = getimportURL('pa');
  if (pa === undefined) {} else {
    iframe.getElementsByName("GDFkpNOXBtRJ4xcjweZT")[0].value = pa;
    iframe.getElementsByName("GDFkpNOXBtRJ4xcjweZT")[0].dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Order Text
  var ot = getimportURL('ot');
  if (ot === undefined) {} else {
    iframe.getElementById("Ix9eKM67zYkjLg8BS7AK").value = ot;
    iframe.getElementById("Ix9eKM67zYkjLg8BS7AK").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Order Due Date
  var od = getimportURL('od');
  if (od === undefined) {} else {
    iframe.getElementById("hDpwuNG3sapWVjftFTYq").value = od;
    iframe.getElementById("hDpwuNG3sapWVjftFTYq").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 1 Link
  var va = getimportURL('va');
  if (va === undefined) {} else {
    iframe.getElementById("NP766W2NR9AgdKib31YY").value = va;
    iframe.getElementById("NP766W2NR9AgdKib31YY").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 1 Header
  var ah = getimportURL('ah');
  if (ah === undefined) {} else {
    iframe.getElementById("KepeYrwP2GXoKAujbNYC").value = ah;
    iframe.getElementById("KepeYrwP2GXoKAujbNYC").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 1 Text
  var at = getimportURL('at');
  if (at === undefined) {} else {
    iframe.getElementById("JslauWgmpt3AbFQxXTOw").value = at;
    iframe.getElementById("JslauWgmpt3AbFQxXTOw").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 2 Link
  var vb = getimportURL('vb');
  if (vb === undefined) {} else {
    iframe.getElementById("aNl3qWWDr2YTargyJUbN").value = vb;
    iframe.getElementById("aNl3qWWDr2YTargyJUbN").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 2 Header
  var bh = getimportURL('bh');
  if (bh === undefined) {} else {
    iframe.getElementById("YH68DLXajukY4fzwlGwr").value = bh;
    iframe.getElementById("YH68DLXajukY4fzwlGwr").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 2 Text
  var bt = getimportURL('bt');
  if (bt === undefined) {} else {
    iframe.getElementById("RlxJ81j456Hcf3Gy6aPy").value = bt;
    iframe.getElementById("RlxJ81j456Hcf3Gy6aPy").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 3 Link
  var vc = getimportURL('vc');
  if (vc === undefined) {} else {
    iframe.getElementById("J0kRs1Gqcpd67daAPAoO").value = vc;
    iframe.getElementById("J0kRs1Gqcpd67daAPAoO").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 3 Header
  var ch = getimportURL('ch');
  if (ch === undefined) {} else {
    iframe.getElementById("PWlAhfhhl7irFDbA0jvV").value = ch;
    iframe.getElementById("PWlAhfhhl7irFDbA0jvV").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 3 Text
  var ct = getimportURL('ct');
  if (ct === undefined) {} else {
    iframe.getElementById("73Ti9s2teC5sPxVjEh3L").value = ct;
    iframe.getElementById("73Ti9s2teC5sPxVjEh3L").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 4 Link
  var vd = getimportURL('vd');
  if (vd === undefined) {} else {
    iframe.getElementById("GfFLSuQSqHwt73yRYVZV").value = vd;
    iframe.getElementById("GfFLSuQSqHwt73yRYVZV").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 4 Header
  var dh = getimportURL('dh');
  if (dh === undefined) {} else {
    iframe.getElementById("hpwfqhindAay8f1flnkg").value = dh;
    iframe.getElementById("hpwfqhindAay8f1flnkg").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Video 4 Text
  var dt = getimportURL('dt');
  if (dt === undefined) {} else {
    iframe.getElementById("sVuas606vclxhopeKkWg").value = dt;
    iframe.getElementById("sVuas606vclxhopeKkWg").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Order Button Text
  var ob = getimportURL('ob');
  if (ob === undefined) {} else {
    iframe.getElementById("h0jhcLjSsRNdlRjTrpfW").value = ob;
    iframe.getElementById("h0jhcLjSsRNdlRjTrpfW").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Order Button Link
  var bl = getimportURL('bl');
  if (bl === undefined) {} else {
    iframe.getElementById("JJBK3OgPrgTCkEGmniyp").value = bl;
    iframe.getElementById("JJBK3OgPrgTCkEGmniyp").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Footer
  var ft = getimportURL('ft');
  if (ft === undefined) {} else {
    iframe.getElementById("HxjYU7fa3Qj3zUCMvrRm").value = ft;
    iframe.getElementById("HxjYU7fa3Qj3zUCMvrRm").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Rep Name
  var rn = getimportURL('rn');
  if (rn === undefined) {} else {
    iframe.getElementById("1VNKE1Nj50OqTChhwSjW").value = rn;
    iframe.getElementById("1VNKE1Nj50OqTChhwSjW").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Phone
  var ph = getimportURL('ph');
  if (ph === undefined) {} else {
    iframe.getElementById("w5N2W2uCjDDTpPVBy4BH").value = ph;
    iframe.getElementById("w5N2W2uCjDDTpPVBy4BH").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Email
  var em = getimportURL('em');
  if (em === undefined) {} else {
    iframe.getElementById("LH4fI5SA28hjNBHvnKgp").value = em;
    iframe.getElementById("LH4fI5SA28hjNBHvnKgp").dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  // Custom Color 1
  var ca = getimportURL('ca');
  if (ca === undefined) {} else {
    iframe.getElementById("color1").value = ca;
  }
  // Custom Color 2
  var cb = getimportURL('cb');
  if (cb === undefined) {} else {
    iframe.getElementById("color2").value = cb;
  }
}

function hiderFunc(disp) {
  iframe.getElementsByClassName("col-12")[2].style.display = disp;
  iframe.getElementsByClassName("col-12")[3].style.display = disp;
  iframe.getElementsByClassName("col-12")[4].style.display = disp;
  iframe.getElementsByClassName("col-12")[5].style.display = disp;
  iframe.getElementsByClassName("col-12")[6].style.display = disp;
  iframe.getElementsByClassName("col-12")[7].style.display = disp;
  iframe.getElementsByClassName("col-12")[8].style.display = disp;
  iframe.getElementsByClassName("col-12")[9].style.display = disp;
  iframe.getElementsByClassName("col-12")[10].style.display = disp;
  iframe.getElementsByClassName("col-12")[11].style.display = disp;
  iframe.getElementsByClassName("col-12")[12].style.display = disp;
  iframe.getElementsByClassName("col-12")[13].style.display = disp;
  iframe.getElementsByClassName("col-12")[14].style.display = disp;
  iframe.getElementsByClassName("col-12")[15].style.display = disp;
  iframe.getElementsByClassName("col-12")[16].style.display = disp;
  iframe.getElementsByClassName("col-12")[17].style.display = disp;
  iframe.getElementsByClassName("col-12")[18].style.display = disp;
  iframe.getElementsByClassName("col-12")[19].style.display = disp;
  iframe.getElementsByClassName("col-12")[20].style.display = disp;
  iframe.getElementsByClassName("col-12")[21].style.display = disp;
  iframe.getElementsByClassName("col-12")[22].style.display = disp;
  iframe.getElementsByClassName("col-12")[23].style.display = disp;
  iframe.getElementsByClassName("col-12")[24].style.display = disp;
  iframe.getElementsByClassName("col-12")[25].style.display = disp;
  iframe.getElementsByClassName("col-12")[26].style.display = disp;
  iframe.getElementsByClassName("col-12")[27].style.display = disp;
  iframe.getElementsByClassName("col-12")[28].style.display = disp;
  iframe.getElementsByClassName("col-12")[29].style.display = disp;
  iframe.getElementsByClassName("col-12")[30].style.display = disp;
  iframe.getElementsByClassName("col-12")[31].style.display = disp;
  iframe.getElementsByClassName("col-12")[32].style.display = disp;
  iframe.getElementsByClassName("col-12")[33].style.display = disp;
  iframe.getElementsByClassName("col-12")[34].style.display = disp;
  iframe.getElementsByClassName("col-12")[35].style.display = disp;
  iframe.getElementsByClassName("col-12")[36].style.display = disp;
  iframe.getElementsByClassName("col-12")[37].style.display = disp;
  iframe.getElementsByClassName("col-12")[38].style.display = disp;
  iframe.getElementsByClassName("col-12")[39].style.display = disp;
  iframe.getElementsByClassName("col-12")[40].style.display = disp;
  iframe.getElementsByClassName("col-12")[41].style.display = disp;
}

// Close Button
function closeFunc() {
  var ctnbtn = iframe.getElementsByClassName("col-12")[41];
  if (ctnbtn.style.display === "none") {
    iframe.getElementsByClassName("col-12")[42].style.display = "none";
    iframe.getElementsByClassName("col-12")[43].style.display = "none";
    iframe.getElementsByClassName("col-12")[44].style.display = "none";
    iframe.getElementsByClassName("col-12")[45].style.display = "none";
    iframe.getElementById("closebtn").children[0].children[0].innerText = "Clear";
    hiderFunc("block");
    clearInterval(myTester);
  } else {
    var emptyURL = "ma=&hs=&cs=&ha=&ba=&pa=&ot=&od=&ml=&va=&vb=&vc=&vd=&ah=&at=&bh=&bt=&ch=&ct=&dh=&dt=&ob=&bl=&ft=&rn=&ph=&em=";
    importFunc(emptyURL);
    ccFunc();
  }
}

// Editor Function
function editorFunc() {
  // Mascot
  var m = iframe.getElementById("DzcUKIO0kLtT5Xv5SP2D").value;
  document.getElementsByTagName("u")[0].innerText = m;
  // School Name
  var sn = iframe.getElementById("zCxe90EEKqnbK7aqJp4n").value;
  document.getElementsByTagName("u")[1].innerText = sn;
  // School Location
  var sl = iframe.getElementById("US1EIuubo877vgGIwNQU").value;
  document.getElementsByTagName("u")[2].innerText = sl;
  // Mascot Logo
  var ml = iframe.getElementById('nxxune9mCfHvnxhZl3dO').value;
  document.querySelector('[alt="School Logo"]').src = ml;
  if (ml === "") {
    iframe.getElementById('clear1').style.display = "none";
  } else {
    iframe.getElementById('clear1').style.display = "block";
    var l1 = document.querySelector('[alt="School Logo"]');
    if (l1.src === ml) {} else {
      l1.src = ml;
    }
  }
  // Header
  var h = iframe.getElementById("TET2FHWhUoQD3Bv3Bfyg").value;
  document.getElementsByTagName("u")[3].innerText = h;
  // Body
  var b = iframe.getElementsByName("NihzdkPrZ5Yxd4G2gTz3")[0].value;
  document.getElementById("sub-heading-6n_TI2F6gW").children[0].children[0].children[0].children[0].innerText = b;
  // Paragraph
  var p = iframe.getElementsByName("GDFkpNOXBtRJ4xcjweZT")[0].value;
  document.getElementById("sub-heading-ZFxcXSeMHj").children[0].children[0].children[0].innerText = p;
  // Order Text
  var ot = iframe.getElementById("Ix9eKM67zYkjLg8BS7AK").value;
  document.getElementById("sub-heading-VK1lsEgbYO").children[0].children[0].children[0].children[0].innerText = ot;
  // Due Date
  var dd = iframe.getElementById("hDpwuNG3sapWVjftFTYq").value;
  document.getElementById("sub-heading-VK1lsEgbYO").children[0].children[0].children[1].children[0].innerText = dd;
  // Video 1 Link
  var va = iframe.getElementById("NP766W2NR9AgdKib31YY").value;
  var v1 = document.getElementById('video1');
  if (va === "") {
    document.getElementById("custom-code-d8lO6KWjtA").style.display = "none";
    document.getElementById("sub-heading-Ylg1cORUX-").style.display = "none";
    v1.src = va;
  } else {
    if (v1.src === va) {} else {
      v1.src = va;
      document.getElementById("custom-code-d8lO6KWjtA").style.display = "block";
      document.getElementById("sub-heading-Ylg1cORUX-").style.display = "block";
    }
  }
  // Video 1 Header
  var v1h = iframe.getElementById("KepeYrwP2GXoKAujbNYC").value;
  document.getElementById("sub-heading-Ylg1cORUX-").children[0].children[0].children[0].children[0].innerText = v1h;
  // Video 1 Text
  var v1t = iframe.getElementById("JslauWgmpt3AbFQxXTOw").value;
  document.getElementById("sub-heading-Ylg1cORUX-").children[0].children[0].children[1].innerText = v1t;
  // Video 2 Link
  var vb = iframe.getElementById("aNl3qWWDr2YTargyJUbN").value;
  var v2 = document.getElementById('video2');
  if (vb === "") {
    document.getElementById("custom-code-RZUEdVtQ7T").style.display = "none";
    document.getElementById("sub-heading-tfHd3do2rz").style.display = "none";
    v2.src = vb;
  } else {
    if (v2.src === vb) {} else {
      v2.src = vb;
      document.getElementById("custom-code-RZUEdVtQ7T").style.display = "block";
      document.getElementById("sub-heading-tfHd3do2rz").style.display = "block";
    }
  }
  // Video 2 Header
  var v2h = iframe.getElementById("YH68DLXajukY4fzwlGwr").value;
  document.getElementById("sub-heading-tfHd3do2rz").children[0].children[0].children[0].children[0].innerText = v2h;
  // Video 2 Text
  var v2t = iframe.getElementById("RlxJ81j456Hcf3Gy6aPy").value;
  document.getElementById("sub-heading-tfHd3do2rz").children[0].children[0].children[1].innerText = v2t;
  // Video 3 Link
  var vc = iframe.getElementById("J0kRs1Gqcpd67daAPAoO").value;
  var v3 = document.getElementById('video3');
  if (vc === "") {
    document.getElementById("custom-code-R334bkGGBx").style.display = "none";
    document.getElementById("sub-heading--wm3rckrU9").style.display = "none";
    v3.src = vc;
  } else {
    if (v3.src === vc) {} else {
      v3.src = vc;
      document.getElementById("custom-code-R334bkGGBx").style.display = "block";
      document.getElementById("sub-heading--wm3rckrU9").style.display = "block";
    }
  }
  // Video 3 Header
  var v3h = iframe.getElementById("PWlAhfhhl7irFDbA0jvV").value;
  document.getElementById("sub-heading--wm3rckrU9").children[0].children[0].children[0].children[0].innerText = v3h;
  // Video 3 Text
  var v3t = iframe.getElementById("73Ti9s2teC5sPxVjEh3L").value;
  document.getElementById("sub-heading--wm3rckrU9").children[0].children[0].children[1].innerText = v3t;
  // Video 4 Link
  var vd = iframe.getElementById("GfFLSuQSqHwt73yRYVZV").value;
  var v4 = document.getElementById('video4');
  if (vd === "") {
    document.getElementById("custom-code-Jk6R1pqkpv").style.display = "none";
    document.getElementById("sub-heading-qKDY3mZWsO").style.display = "none";
    v4.src = vd;
  } else {
    if (v4.src === vd) {} else {
      v4.src = vd;
      document.getElementById("custom-code-Jk6R1pqkpv").style.display = "block";
      document.getElementById("sub-heading-qKDY3mZWsO").style.display = "block";
    }
  }
  // Video 4 Header
  var v4h = iframe.getElementById("hpwfqhindAay8f1flnkg").value;
  document.getElementById("sub-heading-qKDY3mZWsO").children[0].children[0].children[0].children[0].innerText = v4h;
  // Video 4 Text
  var v4t = iframe.getElementById("sVuas606vclxhopeKkWg").value;
  document.getElementById("sub-heading-qKDY3mZWsO").children[0].children[0].children[1].innerText = v4t;
  // Clear Button
  if (va === "" && vb === "" && vc === "" && vd === "") {
    iframe.getElementById('clear2').style.display = "none";
  } else {
    iframe.getElementById('clear2').style.display = "block";
  }
  // Order Button Text
  var obt = iframe.getElementById("h0jhcLjSsRNdlRjTrpfW").value;
  document.getElementById("button-eJDFWYt1Rf_btn").children[0].children[1].innerText = obt;
  // Order Button Link
  var obl = iframe.getElementById("JJBK3OgPrgTCkEGmniyp").value;
  document.getElementById("button-eJDFWYt1Rf_btn").href = obl;
  // Footer
  var f = iframe.getElementById("HxjYU7fa3Qj3zUCMvrRm").value;
  document.getElementById("heading-BJT6TVjlDD").children[0].children[0].children[0].children[0].innerText = f;
  // Rep Name
  var rn = iframe.getElementById("1VNKE1Nj50OqTChhwSjW").value;
  document.getElementById("sub-heading-TJG32SZs8o").children[0].children[0].children[2].innerText = rn;
  // Phone Number
  var pn = iframe.getElementById("w5N2W2uCjDDTpPVBy4BH").value;
  var pnv = "tel:" + pn;
  document.getElementById("sub-heading-mj-k4aCoe1").children[0].children[0].children[0].children[0].href = pnv;
  // Email
  var e = iframe.getElementById("LH4fI5SA28hjNBHvnKgp").value;
  var ev = "mailto:" + e;
  document.getElementById("sub-heading-mj-k4aCoe1").children[0].children[0].children[0].children[1].href = ev;
  // Custom Color 1
  var c1 = iframe.getElementById("color1").value;
  document.getElementsByClassName("heading-VTuHFR7rgH")[0].style.setProperty('--color1', c1);
  iframe.getElementById("oaRAjF7NTwMl8lbMUWAI").value = c1;
  iframe.getElementById("oaRAjF7NTwMl8lbMUWAI").dispatchEvent(new Event("input", {
    bubbles: true
  }));
  // Custom Color 2
  var c2 = iframe.getElementById("color2").value;
  document.getElementsByClassName("heading-VTuHFR7rgH")[0].style.setProperty('--color2', c2);
  iframe.getElementById("FR6Hl2UuIQj7EjQpFqQX").value = c2;
  iframe.getElementById("FR6Hl2UuIQj7EjQpFqQX").dispatchEvent(new Event("input", {
    bubbles: true
  }));
  if (c1 === "#000000" && c2 === "#000000") {
    iframe.getElementById("cccbtn").style.display = "none";
  } else {
    iframe.getElementById("cccbtn").style.display = "block";
  }
  if (m === "" && sn === "" && sl === "" && ml === "" && h === "" && b === "" && p === "" && ot === "" && dd === "" && va === "" && v1h === "" && v1t === "" && vb === "" && v2h === "" && v2t === "" && vc === "" && v3h === "" && v3t === "" && vd === "" && v4h === "" && v4t === "" && obt === "" && obl === "" && f === "" && rn === "" && pn === "" && e === "" && c1 === "#000000" && c2 === "#000000") {
    var ctnbtn = iframe.getElementsByClassName("col-12")[41];
    if (ctnbtn.style.display === "none") {
      iframe.getElementById("closebtn").style.display = "block";
    } else {
      iframe.getElementById("closebtn").style.display = "none";
    }
  } else {
    iframe.getElementById("closebtn").style.display = "block";
  }
  var slashtag = iframe.getElementById('UB1lI6PsThvKS9RpQ1Bi').value;
  var URL = "ma=" + m + "&hs=" + sn + "&cs=" + sl + "&ml=" + ml + "&ha=" + h + "&ba=" + b + "&pa=" + p + "&ot=" + ot + "&od=" + dd + "&va=" + va + "&ah=" + v1h + "&at=" + v1t + "&vb=" + vb + "&bh=" + v2h + "&bt=" + v2t + "&vc=" + vc + "&ch=" + v3h + "&ct=" + v3t + "&vd=" + vd + "&dh=" + v4h + "&dt=" + v4t + "&ob=" + obt + "&bl=" + obl + "&ft=" + f + "&rn=" + rn + "&ph=" + pn + "&em=" + e + "&ca=" + c1 + "&cb=" + c2 + "&link=" + "jostens.co/" + slashtag;
  var url1 = encodeURIComponent(URL);
  var url2 = encodeURIComponent(url1);
  iframe.getElementById('kNki5hB6i5ZvqlBEWjeT').value = url2;
  iframe.getElementById('kNki5hB6i5ZvqlBEWjeT').dispatchEvent(new Event("input", {
    bubbles: true
  }));
}

// Clear Custom Colors
function ccFunc() {
  var black = "#000000";
  iframe.getElementById("color1").value = black;
  iframe.getElementById("color2").value = black;
}

// Paste Logo Button
async function pst1() {
  try {
    var text = await navigator.clipboard.readText();
    iframe.getElementById('nxxune9mCfHvnxhZl3dO').value = text;
    iframe.getElementById('nxxune9mCfHvnxhZl3dO').dispatchEvent(new Event("input", {
      bubbles: true
    }));
  } catch (error) {
    alert('Failed to read clipboard!');
  }
}

function clear1() {
  iframe.getElementById('nxxune9mCfHvnxhZl3dO').value = "";
  iframe.getElementById('nxxune9mCfHvnxhZl3dO').dispatchEvent(new Event("input", {
    bubbles: true
  }));
}

// Paste Videos Buttons
async function btn1() {
  try {
    var text = await navigator.clipboard.readText();
    iframe.getElementById('NP766W2NR9AgdKib31YY').value = text;
    iframe.getElementById('NP766W2NR9AgdKib31YY').dispatchEvent(new Event("input", {
      bubbles: true
    }));
  } catch (error) {
    alert('Failed to read clipboard!');
  }
}

async function btn2() {
  try {
    var text = await navigator.clipboard.readText();
    iframe.getElementById('aNl3qWWDr2YTargyJUbN').value = text;
    iframe.getElementById('aNl3qWWDr2YTargyJUbN').dispatchEvent(new Event("input", {
      bubbles: true
    }));
  } catch (error) {
    alert('Failed to read clipboard!');
  }
}

async function btn3() {
  try {
    var text = await navigator.clipboard.readText();
    iframe.getElementById('J0kRs1Gqcpd67daAPAoO').value = text;
    iframe.getElementById('J0kRs1Gqcpd67daAPAoO').dispatchEvent(new Event("input", {
      bubbles: true
    }));
  } catch (error) {
    alert('Failed to read clipboard!');
  }
}

async function btn4() {
  try {
    var text = await navigator.clipboard.readText();
    iframe.getElementById('GfFLSuQSqHwt73yRYVZV').value = text;
    iframe.getElementById('GfFLSuQSqHwt73yRYVZV').dispatchEvent(new Event("input", {
      bubbles: true
    }));
  } catch (error) {
    alert('Failed to read clipboard!');
  }
}

function clear2() {
  iframe.getElementById('NP766W2NR9AgdKib31YY').value = "";
  iframe.getElementById('NP766W2NR9AgdKib31YY').dispatchEvent(new Event("input", {
    bubbles: true
  }));
  iframe.getElementById('aNl3qWWDr2YTargyJUbN').value = "";
  iframe.getElementById('aNl3qWWDr2YTargyJUbN').dispatchEvent(new Event("input", {
    bubbles: true
  }));
  iframe.getElementById('J0kRs1Gqcpd67daAPAoO').value = "";
  iframe.getElementById('J0kRs1Gqcpd67daAPAoO').dispatchEvent(new Event("input", {
    bubbles: true
  }));
  iframe.getElementById('GfFLSuQSqHwt73yRYVZV').value = "";
  iframe.getElementById('GfFLSuQSqHwt73yRYVZV').dispatchEvent(new Event("input", {
    bubbles: true
  }));
}

// Continue Button
function contFunc() {
  var locid = iframe.getElementById("4VnDd3UjXSNaugruH3k2").value;
  var schid = iframe.getElementById("HSacSfvzoJoCUeDQX1cT").value;
  if (locid === "") {
    window.locidv = false;
  } else {
    window.locidv = true;
  }
  if (schid === "") {
    window.schidv = false;
  } else {
    window.schidv = true;
  }
  // Location ID Missing
  if (locidv === false && schidv === true) {
    alert("ERROR CODE 301: Please contact support.");
  }
  // School ID Missing
  if (locidv === true && schidv === false) {
    alert("ERROR CODE 302: Please contact support.");
  }
  // Both IDs Missing
  if (locidv === false && schidv === false) {
    alert("ERROR CODE 303: Please contact support.");
  }
  // Both IDs Present
  if (locidv === true && schidv === true) {
    hiderFunc("none");
    iframe.getElementsByClassName("col-12")[42].style.display = "block";
    iframe.getElementsByClassName("col-12")[43].style.display = "block";
    iframe.getElementsByClassName("col-12")[44].style.display = "block";
    iframe.getElementById("closebtn").children[0].children[0].innerText = "Back";
    iframe.getElementById("p5sLdsk6yDRDw3s0fReW").value = "false";
    iframe.querySelector('[type="submit"]').addEventListener('click', submitFunc);
    window.myTester = setInterval(testFunc, 50);
  }
}

// Slashtag Availability
function testFunc() {
  var name = iframe.getElementById("UB1lI6PsThvKS9RpQ1Bi").value;
  var error = iframe.getElementById("errortext");
  var taken = iframe.getElementById("taken");
  var value = document.getElementById("sub-heading-ZexnrZlovp").innerText;
  var values = value.split(" ");
  var list = values.indexOf(name);
  var text = "jostens.co/" + name;
  iframe.getElementById("jostensco").innerText = text;
  if (name === "") {
    error.style.display = "none";
    taken.style.display = "none";
    iframe.getElementById("slashtagtext").style.display = "block";
    iframe.getElementById("savetemplate").style.display = "none";
    iframe.getElementsByClassName("col-12")[45].style.display = "none";
  } else {
    let regex = /^[a-z]+$/;
    var result = regex.test(name);
    if (result === true) {
      error.style.display = "none";
      if (list === -1) {
        taken.style.display = "none";
        iframe.getElementById("slashtagtext").style.display = "block";
        iframe.getElementById("savetemplate").style.display = "block";
        iframe.getElementsByClassName("col-12")[45].style.display = "block";
      } else {
        taken.style.display = "block";
        iframe.getElementById("slashtagtext").style.display = "block";
        iframe.getElementById("savetemplate").style.display = "none";
        iframe.getElementsByClassName("col-12")[45].style.display = "none";
      }
    } else {
      error.style.display = "block";
      taken.style.display = "none";
      iframe.getElementById("slashtagtext").style.display = "none";
      iframe.getElementById("savetemplate").style.display = "none";
      iframe.getElementsByClassName("col-12")[45].style.display = "none";
    }
  }
}

// Import Settings
function importSwitch() {
  var value = iframe.getElementById("importswitch").checked;
  if (value === true) {
    importFunc(settings);
  }
  if (value === false) {
    window.location.reload();
  }
}

// Save as Template
function saveFunc() {
  var value = iframe.getElementById("saveswitch").checked;
  if (value === true) {
    iframe.getElementById("p5sLdsk6yDRDw3s0fReW").value = "true";
  }
  if (value === false) {
    iframe.getElementById("p5sLdsk6yDRDw3s0fReW").value = "false";
  }
}

// Submit Function
function submitFunc() {
  clearInterval(editorInt);
  clearInterval(myTester);
}
