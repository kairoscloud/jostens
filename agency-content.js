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
    let toolbarElement = document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left");
    toolbarElement.style.display = 'none';

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

  toolbarElement.innerHTML = `
  <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add Contact"><button data-v-7c5302f9="" type="button" data-original-title="Add" class="btn btn-light btn-sm contactsloaded"><i data-v-7c5302f9="" class="icon icon-plus"></i></button></span><span data-v-7c5302f9="" class="bulk-actions-list"><span id="Add school Contact" data-tooltip="tooltip" data-placement="top" data-original-title="Add School Contact" title="Add school Contact" class="tp"><span class="tooltip" style="position:absolute; top:18.5%; left:8%; display:none;">Add school Contact</span><span class="tooltip" style="position:absolute; top:18.5%; left:8%; display:none;">Copy School Settings</span><span class="tooltip" style="position:absolute; top:18.5%; left:8%; display:none;">Paste School Settings</span><span id="newspan2" class="tooltip" style="display: none; position: absolute; top: 18.5%; left: 2%;"><span id="newspan3" class="tooltip-inner">Add School Contact</span></span><button id="newbtn1" type="button" data-original-title="Add school Contact" class="btn btn-light btn-sm"><i id="newicon1" class="fas fa-school"></i></button></span><span id="Copy School Settings" data-tooltip="tooltip" data-placement="top" data-original-title="Add School Contact" title="Copy School Settings" class="tp"><span class="tooltip" style="position:absolute; top:18.5%; left:8%; display:none;">Copy School Settings</span><span class="tooltip" style="position:absolute; top:18.5%; left:8%; display:none;">Paste School Settings</span><span id="newspan2" class="tooltip" style="display:none; position:absolute; top:18.5%; left:2%"><span id="newspan3" class="tooltip-inner">Add School Contact</span></span></span><span id="Paste School Settings" data-tooltip="tooltip" data-placement="top" data-original-title="Add School Contact" title="Paste School Settings" class="tp"><span class="tooltip" style="position:absolute; top:18.5%; left:8%; display:none;">Paste School Settings</span><span id="newspan2" class="tooltip" style="display:none; position:absolute; top:18.5%; left:2%"><span id="newspan3" class="tooltip-inner">Add School Contact</span></span></span><span id="newspan1" data-v-07dca9cc="" data-tooltip="tooltip" data-placement="top" data-original-title="Add School Contact"><span id="newspan2" class="tooltip" style="display:none; position:absolute; top:18.5%; left:2%"><span id="newspan3" class="tooltip-inner">Add School Contact</span></span></span><span id="pastespan1" data-v-07dca9cc="" data-tooltip="tooltip" data-placement="top" data-original-title="Paste School Settings"><span id="pastespan2" class="tooltip" style="display: none; position: absolute; top: 18.5%; left: 5%;"><span id="pastespan3" class="tooltip-inner">Paste School Settings</span></span></span><span id="copyspan1" data-v-07dca9cc="" data-tooltip="tooltip" data-placement="top" data-original-title="Copy School Settings"><span id="copyspan2" class="tooltip" style="display: none; position: absolute; top: 18.5%; left: 8%;"><span id="copyspan3" class="tooltip-inner">Copy School Settings</span></span></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Pipeline Change" style="display: none;"><button data-v-7c5302f9="" type="button" data-original-title="Pipeline Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="fa fa-filter"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add to Automation"><button data-v-7c5302f9="" type="button" data-original-title="Campaign Selection Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="fa fa-robot" style="font-size: 17px;"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Send SMS"><button data-v-7c5302f9="" type="button" data-original-title="Bulk SMS Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon-sms-gray"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Send Email"><button data-v-7c5302f9="" type="button" data-original-title="Bulk Email Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon-email-svg-gray"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add Tag"><button data-v-7c5302f9="" type="button" data-original-title="Tag" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-tag-add"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Remove Tag"><button data-v-7c5302f9="" type="button" data-original-title="Tag" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-tag-delete"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Delete Contacts"><button data-v-7c5302f9="" type="button" data-original-title="Delete" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-trash"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Send Review Requests" style="display: none;"><button data-v-7c5302f9="" type="button" data-original-title="Review Request" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="fas fa-star"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Export Contacts"><button data-v-7c5302f9="" type="button" data-original-title="Export" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-download"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Import Contacts"><button data-v-7c5302f9="" type="button" data-original-title="Import" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-share-1"></i></button></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Email Verification"></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add/Edit to Company"></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Bulk WhatsApp"><!----></span><span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Merge up to 10 Contacts"></span></span><div data-v-7c5302f9="" class="d-inline-block"><h3 data-v-7c5302f9="" class="mx-1" style="display: none;">* No items found for selected filters </h3></div>
  `;
  toolbarElement.style.display = 'block';
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
        var manager = document.querySelector('[data-id="button_1708538695853"]').getAttribute("link");
        var sn = document.getElementsByName("contact.school_name")[0].value;
        var schoolcode = encodeURIComponent(sn);
        var link = manager.replace("SCHOOL_NAME", schoolcode);
        document.querySelector('[data-id="button_1708538695853"]').setAttribute('link', link);
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
    span2.setAttribute("style", "display:none; position:absolute; top:18.5%; left:2%");
    span.insertBefore(span2, span.children[0]);
    var span3 = document.createElement('span');
    span3.setAttribute("id", "newspan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.innerText = "Add School Contact";
    document.getElementById("newspan2").appendChild(span3);
    document.getElementById("newbtn1").addEventListener('click', myClick);
    document.getElementById("newspan1").addEventListener('mouseover', myHover);
    document.getElementById("newspan1").addEventListener('mouseout', myHover);
  }
}

function myClick() {
  document.getElementsByClassName("add-school-contact")[0].click();
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
    span2.setAttribute("style", "display:none; position:absolute; top:18.5%; left:5%");
    span.insertBefore(span2, span.children[0]);
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
    span2.setAttribute("style", "display:none; position:absolute; top:18.5%; left:8%");
    span.insertBefore(span2, span.children[0]);
    var span3 = document.createElement('span');
    span3.setAttribute("id", "copyspan3");
    span3.setAttribute("class", "tooltip-inner");
    span3.innerText = "Copy School Settings";
    document.getElementById("copyspan2").appendChild(span3);
    document.getElementById("copybtn1").addEventListener('click', myClick3);
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
