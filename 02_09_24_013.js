const JostensTimer = setTimeout(JostensFunc, 2000);

function JostensFunc() {
  var planid = document.getElementsByClassName("jostensdem")[0];
  if (planid === undefined || planid === null) {} else {
    const URLinterval = setInterval(checkPage, 100);
    var x = document.querySelector('[title="Add School Contact"]');
    if (x === undefined || x === null) {} else {
      x.style.display = "none";
    }
  }
}

function checkPage() {
  var url = window.location.href;
  var page = url.split("/")[6];
  var detail = url.split("/")[7];
  if (detail === "smart_list") {
    ContactsFunc();
  }
  if (detail === "detail") {
    DetailFunc();
  }
  if (page === "settings") {
    SettingsFunc();
  }
}

function DetailFunc() {
  var a = document.getElementsByClassName("detailsloaded")[0];
  if (a === undefined || a === null) {
    var b = document.getElementsByName("contact.company_name")[0];
    if (b === undefined || b === null) {
      var c = document.querySelector('[protected_name="general_info"]');
      if (c === undefined || c === null) {} else {
        document.querySelector('[protected_name="general_info"]').firstChild.click();
      }
    } else {
      var d = document.getElementsByName("contact.company_name")[0].value;
      if (d === "School Contact") {
        document.querySelector('[protected_name="contact"]').style.display = "none";
        document.querySelector('[protected_name="general_info"]').style.display = "none";
        document.querySelector('[protected_name="additional_info"]').style.display = "none";
        document.querySelector('[data-id="button_1701800376469"]').addEventListener('click', viewFunc);
        var e = document.getElementsByName("contact.school_name")[0];
        if (e === undefined || e === null) {
          document.querySelector('[protected_name="school_info"]').firstChild.click();
          window.ShortURL = document.getElementsByName("contact.short_url")[0].value;
        }
        window.ShortURL = document.getElementsByName("contact.short_url")[0].value;
        document.querySelector('[protected_name="school_info"]').className += " detailsloaded";
      } else {
        document.getElementById("toolbar-contact-buttons").style.display = "block";
        document.querySelector('[protected_name="school_info"]').className += " detailsloaded";
      }
    }
  }
}

function viewFunc() {
  var link = "https://" + ShortURL;
  window.open(link);
}

function ContactsFunc() {
  var x = document.getElementsByClassName("contactsloaded")[0];
  if (x === undefined || x === null) {
    document.getElementsByClassName("btn btn-light btn-sm")[2].addEventListener("click", myIntFunc1);
    document.getElementsByClassName("btn btn-light btn-sm")[2].addEventListener("click", myIntFunc2);
    document.getElementsByClassName("btn btn-light btn-sm")[0].className += " contactsloaded";
    AddSchoolFunc();
    PasteBtnFunc();
    CopyBtnFunc();
  }
}

function myIntFunc1() {
  const myInterval1 = setInterval(myTestFunc1, 100);

  function myTestFunc1() {
    var test1 = document.getElementsByClassName("hl-btn inline-flex items-center px-4 py-2 border-2 border-curious-blue-400 text-sm font-medium rounded text-curious-blue-500 hover:bg-curious-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500")[0];
    if (test1 === undefined || test1 === null) {} else {
      document.getElementsByClassName("hl-btn inline-flex items-center px-4 py-2 border-2 border-curious-blue-400 text-sm font-medium rounded text-curious-blue-500 hover:bg-curious-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500")[0].click();
      clearInterval(myInterval1);

    }
  }
}

function myIntFunc2() {
  const myInterval2 = setInterval(myTestFunc2, 100);

  function myTestFunc2() {
    var test2 = document.getElementsByClassName("hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800")[3];
    if (test2 === undefined || test2 === null) {} else {
      document.getElementsByClassName("hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800")[3].value = "Add to Campaign / Workflow";
      document.getElementsByClassName("hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800")[3].dispatchEvent(new Event("input", {
        bubbles: true
      }));
      document.getElementsByClassName("py-1 text-nowrap")[0].style.display = "none";
      document.getElementsByClassName("form-row")[1].style.display = "none";
      clearInterval(myInterval2);

    }
  }
}

function AddSchoolFunc() {
  var x = document.getElementById("newspan1");
  if (x === undefined || x === null) {
    document.querySelector('[title="Pipeline Change"]').style.display = "none";
    document.querySelector('[title="Send Review Requests"]').style.display = "none";
    var span = document.createElement('span');
    span.setAttribute("id", "newspan1");
    span.setAttribute("data-v-07dca9cc", "");
    span.setAttribute("data-tooltip", "tooltip");
    span.setAttribute("data-placement", "top");
    span.setAttribute("data-original-title", "Add School Contact");
    var list = document.getElementsByClassName("bulk-actions-list")[0];
    list.insertBefore(span, list.children[0]);
    var btn = document.createElement('button');
    btn.setAttribute("id", "newbtn1");
    btn.setAttribute("data-v-07dca9cc", "");
    btn.setAttribute("type", "button");
    btn.setAttribute("data-original-title", "Add School Contact");
    btn.setAttribute("class", "btn btn-light btn-sm");
    document.getElementById("newspan1").appendChild(btn);
    var icon = document.createElement('i');
    icon.setAttribute("id", "newicon1");
    icon.setAttribute("data-v-07dca9cc", "");
    icon.setAttribute("class", "fas fa-school");
    document.getElementById("newbtn1").appendChild(icon);
    var span2 = document.createElement('span');
    span2.setAttribute("id", "newspan2");
    span2.setAttribute("class", "tooltip");
    span2.setAttribute("style", "right:10%; bottom:1%; display:none");
    span.insertBefore(span2, span.children[0]);
    var span3 = document.createElement('span');
    span3.setAttribute("id", "newspan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.setAttribute("style", "display:inline");
    span3.innerText = "Add School Contact";
    document.getElementById("newspan2").appendChild(span3);
    document.getElementById("newbtn1").addEventListener('click', myClick);
    document.getElementById("newspan1").addEventListener('mouseover', myHover);
    document.getElementById("newspan1").addEventListener('mouseout', myHover);
  }
}

function myClick() {
  document.querySelector('[title="Add School Contact"]').click();
}

function myHover() {
  var x = document.getElementById("newspan2");
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}

function PasteBtnFunc() {
  var x = document.getElementById("pastespan1");
  if (x === undefined || x === null) {
    var span = document.createElement('span');
    span.setAttribute("id", "pastespan1");
    span.setAttribute("data-v-07dca9cc", "");
    span.setAttribute("data-tooltip", "tooltip");
    span.setAttribute("data-placement", "top");
    span.setAttribute("data-original-title", "Paste School Settings");
    var list = document.getElementsByClassName("bulk-actions-list")[0];
    list.insertBefore(span, list.children[1]);
    var btn = document.createElement('button');
    btn.setAttribute("id", "pastebtn1");
    btn.setAttribute("data-v-07dca9cc", "");
    btn.setAttribute("type", "button");
    btn.setAttribute("data-original-title", "Paste School Settings");
    btn.setAttribute("class", "btn btn-light btn-sm");
    document.getElementById("pastespan1").appendChild(btn);
    var icon = document.createElement('i');
    icon.setAttribute("id", "pasteicon1");
    icon.setAttribute("data-v-07dca9cc", "");
    icon.setAttribute("class", "fas fa-paste");
    document.getElementById("pastebtn1").appendChild(icon);
    var span2 = document.createElement('span');
    span2.setAttribute("id", "pastespan2");
    span2.setAttribute("class", "tooltip");
    span2.setAttribute("style", "right:595px; bottom:30px; display:none");
    list.appendChild(span2);
    var span3 = document.createElement('span');
    span3.setAttribute("id", "pastespan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.innerText = "Paste School Settings";
    document.getElementById("pastespan2").appendChild(span3);
    document.getElementById("pastebtn1").addEventListener('click', myClick2);
    document.getElementById("pastespan1").addEventListener('mouseover', myHover2);
    document.getElementById("pastespan1").addEventListener('mouseout', myHover2);
  }
}

function myClick2() {
  pasterFunc();
}

function myHover2() {
  var x = document.getElementById("pastespan2");
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}

function pasterFunc() {
  window.myPaster = setInterval(pasteFunc, 100);
}

function pasteFunc() {
  try {
    document.getElementsByClassName("btn btn-light btn-sm")[8].click();
    var x = document.getElementById("alertModal___BV_modal_outer_");
    if (x === undefined || x === null) {
      var y = document.getElementsByClassName("vfm vfm--inset vfm--fixed")[2];
      if (y === undefined || y === null) {} else {
        document.getElementsByClassName("vfm vfm--inset vfm--fixed")[2].style.display = "none";
        document.getElementsByClassName("py-1 outline-none border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm")[0].value = "paste";
        document.getElementsByClassName("py-1 outline-none border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm")[0].dispatchEvent(new Event("input", {
          bubbles: true
        }));
        var z = document.getElementsByClassName("group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9")[0];
        if (z === undefined || z === null) {} else {
          document.getElementsByClassName("group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9")[0].click();
          document.getElementsByClassName("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")[0].value = "paste school settings";
          document.getElementsByClassName("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")[0].dispatchEvent(new Event("input", {
            bubbles: true
          }));
          window.myClicker = setInterval(clickFunc, 100);
          const clearClicker = setTimeout(clearclickFunc, 1000);
          alert("Pasting School Settings...");
          clearInterval(myPaster);
        }
      }
    } else {
      clearInterval(myPaster);
    }
  } catch (err) {
    clearInterval(myPaster);
    console.log("Auto Add Tag - Paste Function Error: The process was stopped.");
  }
}

function clickFunc() {
  try {
    document.getElementsByClassName("inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")[0].click();
  } catch (err) {
    console.log("Auto Add Tag - Paste Function - 'Add' Button Clicker");
  }
}

function clearclickFunc() {
  clearInterval(myClicker);
}

function CopyBtnFunc() {
  var x = document.getElementById("copyspan1");
  if (x === undefined || x === null) {
    var span = document.createElement('span');
    span.setAttribute("id", "copyspan1");
    span.setAttribute("data-v-07dca9cc", "");
    span.setAttribute("data-tooltip", "tooltip");
    span.setAttribute("data-placement", "top");
    span.setAttribute("data-original-title", "Copy School Settings");
    var list = document.getElementsByClassName("bulk-actions-list")[0];
    list.insertBefore(span, list.children[2]);
    var btn = document.createElement('button');
    btn.setAttribute("id", "copybtn1");
    btn.setAttribute("data-v-07dca9cc", "");
    btn.setAttribute("type", "button");
    btn.setAttribute("data-original-title", "Copy School Settings");
    btn.setAttribute("class", "btn btn-light btn-sm");
    document.getElementById("copyspan1").appendChild(btn);
    var icon = document.createElement('i');
    icon.setAttribute("id", "copyicon1");
    icon.setAttribute("data-v-07dca9cc", "");
    icon.setAttribute("class", "fas fa-copy");
    document.getElementById("copybtn1").appendChild(icon);
    var span2 = document.createElement('span');
    span2.setAttribute("id", "copyspan2");
    span2.setAttribute("class", "tooltip");
    span2.setAttribute("style", "right:595px; bottom:30px; display:none");
    list.appendChild(span2);
    var span3 = document.createElement('span');
    span3.setAttribute("id", "copyspan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.innerText = "Copy School Settings";
    document.getElementById("copyspan2").appendChild(span3);
    document.getElementById("copybtn1").addEventListener('click', myClick2);
    document.getElementById("copyspan1").addEventListener('mouseover', myHover3);
    document.getElementById("copyspan1").addEventListener('mouseout', myHover3);
  }
}

function myClick3() {
  copierFunc();
}

function myHover3() {
  var x = document.getElementById("copyspan2");
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}

function copierFunc() {
  window.myCopier = setInterval(copyFunc, 100);
}

function copyFunc() {
  try {
    document.getElementsByClassName("btn btn-light btn-sm")[8].click();
    var x = document.getElementById("alertModal___BV_modal_outer_");
    if (x === undefined || x === null) {
      var y = document.getElementsByClassName("vfm vfm--inset vfm--fixed")[2];
      if (y === undefined || y === null) {} else {
        document.getElementsByClassName("vfm vfm--inset vfm--fixed")[2].style.display = "none";
        document.getElementsByClassName("py-1 outline-none border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm")[0].value = "copy";
        document.getElementsByClassName("py-1 outline-none border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm")[0].dispatchEvent(new Event("input", {
          bubbles: true
        }));
        var z = document.getElementsByClassName("group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9")[0];
        if (z === undefined || z === null) {} else {
          document.getElementsByClassName("group cursor-pointer text-gray-900 hover:text-white hover:bg-blue-600 select-none relative py-2 pl-3 pr-9")[0].click();
          document.getElementsByClassName("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")[0].value = "copy school settings";
          document.getElementsByClassName("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")[0].dispatchEvent(new Event("input", {
            bubbles: true
          }));
          window.myClicker1 = setInterval(clickFunc1, 100);
          const clearClicker1 = setTimeout(clearclickFunc1, 1000);
          alert("Copying School Settings...");
          clearInterval(myCopier);
        }
      }
    } else {
      clearInterval(myCopier);
    }
  } catch (err) {
    clearInterval(myCopier);
    console.log("Auto Add Tag - Copy Function Error: The process was stopped.");
  }
}

function clickFunc1() {
  try {
    document.getElementsByClassName("inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")[0].click();
  } catch (err) {
    console.log("Auto Add Tag - Copy Function - 'Add' Button Clicker");
  }
}

function clearclickFunc1() {
  clearInterval(myClicker1);
}

function SettingsFunc() {
  var url = window.location.href;
  var page = url.split("settings")[1];
  if (page === "/phone_number?tab=trust-center") {
    var x = document.getElementById("ExampleUsecaseDescription");
    if (x === undefined || x === null) {} else {
      x.addEventListener('click', Samp1func)
    }
    var y = document.getElementById("ExampleSampleMessage1");
    if (y === undefined || y === null) {} else {
      y.addEventListener('click', Samp2func)
    }
    var z = document.getElementById("ExampleSampleMessage2");
    if (z === undefined || z === null) {} else {
      z.addEventListener('click', Samp3func)
    }
    var a = document.getElementById("ExampleUserConsent");
    if (a === undefined || a === null) {} else {
      a.addEventListener('click', Samp4func)
    }
    var b = document.getElementById("ExampleOptInMessage");
    if (b === undefined || b === null) {} else {
      b.addEventListener('click', Samp5func)
    }
  }
}

function Samp1func() {
  document.getElementsByClassName("text-gray-600 hl-text-sm-regular")[0].innerText = "This campaign will be used by our Jostens sales team to reach out to families who are ordering High School supplies for their students, including caps & gowns, class rings, letterman jackets, and more.";
  document.getElementsByClassName("custom-hidden items-center justify-start group-hover:flex")[0].style.display = "none";
  document.querySelectorAll("#CopyTextBlock")[1].style.display = "none";
  document.querySelectorAll("#CopyTextBlock")[2].style.display = "none";
}

function Samp2func() {
  document.getElementsByClassName("text-gray-600 hl-text-sm-regular")[0].innerText = "Hi John! This is YOUR_NAME from Jostens. It's time to order graduation products for your Senior! Please take a moment and click the link below to watch a few short videos to learn about the ordering process! Click here: jostens.co/freestate. Reply STOP to unsubscribe.";
  document.getElementsByClassName("custom-hidden items-center justify-start group-hover:flex")[0].style.display = "none";
  document.querySelectorAll("#CopyTextBlock")[1].style.display = "none";
}

function Samp3func() {
  document.getElementsByClassName("text-gray-600 hl-text-sm-regular")[0].innerText = "Hi Jane! This is YOUR_NAME from Jostens. It's time to start thinking about class rings for your Student! Please be watching your texts and email for more info in the days to come. Text or call me anytime with questions at YOUR_PHONE. Reply STOP to unsubscribe.";
  document.getElementsByClassName("custom-hidden items-center justify-start group-hover:flex")[0].style.display = "none";
  document.querySelectorAll("#CopyTextBlock")[1].style.display = "none";
}

function Samp4func() {
  document.getElementsByClassName("text-gray-600 hl-text-sm-regular")[0].innerText = "End users opt-in through a form on our website (jostens.co/contact-form) or by personally providing us with their contact details after reviewing the consent language on our website. New contacts agree to receive order notifications & promotional messages from us when providing their contact details online, in-person, or otherwise. Additionally end users can also text START to YOUR_PHONE.";
  document.getElementsByClassName("custom-hidden items-center justify-start group-hover:flex")[0].style.display = "none";
}

function Samp5func() {
  document.getElementsByClassName("text-gray-600 hl-text-sm-regular")[0].innerText = "You have successfully opted-in to receive notification and promotional SMS from Jostens. Please reply STOP if you need to Opt-out in the future.";
  document.getElementsByClassName("custom-hidden items-center justify-start group-hover:flex")[0].style.display = "none";
}
