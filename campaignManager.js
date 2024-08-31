        // Welcome to the campaign manager!
        // This is the 3rd iteration of the campaign manager, it's build mainly around Firebase
        // Campaigns are loaded in from firebase and inserted into the DOM, following a "template" (see HTML inside `` javascript below)
        // The campaigns are loaded in batches of 10, and more are loaded as the user scrolls to the bottom of the page
        // Upon updating, a few things happen
        // - Check if the name isn't already taken
        // - All contacts are updated at a rate of 9/sec (90/10sec) to avoid maxxing out the calls/sec
        // - The tag is updated
        // - We use the GHL API to make the short links
        // - The campaign is updated in firebase
        // - And some other clean-up stuff
        // A lot of the functions revolve around the "docID", which is the campaign's unique ID in firebase
        // It's an 11-character random hexadecimal string, we make it random to avoid naming collisions. The user is never really exposed to this
        // You'll see it mentioned a lot, especially in HTML element IDs. It's usually something like "'schoolName' + docID"
        // You'll also see the parameter "which", which is either 1 or 2. It's always in the context of paths or funnels, since there are two of each
        // There are a lot of moving parts here, and it's gotten complicated really quickly. Nothing some segmentation can't solve though :)
        // Jacob Westra – jacob@thekairosmedia.com, (616) 312-5302
    
        // all global variables
        let campaignsList = [];
        let rendered = [];
        let maxLoaded = 0;
        let searchMode = false;
        let validPath = [];
        validPath[1] = false;
        validPath[2] = false;
        let prevPath1s = [];
        let prevPath2s = [];
        let prevFunnel1s = [];
        let prevFunnel2s = [];
        let locationID = window.location.href.split("#")[1];

        // detect when the user has scrolled to the bottom of the campaigns
        const scrollableElement = document.getElementById("campaignsContainer");
        scrollableElement.addEventListener("scroll", () => {
            const { scrollTop, scrollHeight, clientHeight } = scrollableElement;

            if (scrollTop + clientHeight >= scrollHeight) {
                if (searchMode) {
                    return;
                }
                let nextLimit = maxLoaded + 10; // load 10 more campaigns
                let prevMaxLoaded = maxLoaded;
                console.log(
                    "Scrolled to the bottom! Loading campaigns " +
                        maxLoaded +
                        " - " +
                        nextLimit,
                );
                for (
                    maxLoaded;
                    maxLoaded < campaignsList.length && maxLoaded < nextLimit;
                    maxLoaded++
                ) {
                    // load +10 more campaigns max
                    //console.log(maxLoaded);
                    addCampaignToDOM(
                        campaignsList[maxLoaded].data(),
                        campaignsList[maxLoaded].id,
                        false,
                        nextLimit,
                    );
                }
                try {
                    document.getElementById(
                        `loading${prevMaxLoaded - 1}`,
                    ).style.display = "none";
                } catch {}
            }
        });

        // create an eventlistener for when the user presses ENTER in the search box
        document
            .getElementById("searchBox")
            .addEventListener("keydown", function (event) {
                searchMode = true;
                try {
                    document.getElementById(
                        "loading" + (maxLoaded - 1),
                    ).style.display = "none";
                } catch {} // sometimes there isn't a 'loading...' element to hide because there are less than 25 campaigns
                let search = document.getElementById("searchBox").value;
                // if search is blank, show all campaigns that've been previously rendered
                if (search == "") {
                    let campaigns = document.getElementsByClassName("campaign");
                    for (let i = 0; i < campaigns.length; i++) {
                        campaigns[i].style.display = "block";
                    }
                    try {
                        document.getElementById(
                            "loading" + (maxLoaded - 1),
                        ).style.display = "flex";
                    } catch {}
                    searchMode = false;
                    return;
                }

                if (event.key != "Enter") {
                    return;
                }

                // search array of all campaigns.
                // if campaign name includes search, display it
                // if not, hide it
                // if already displayed, skip
                for (let i = 0; i < campaignsList.length; i++) {
                    let campaignID = campaignsList[i].id;
                    let campaign = campaignsList[i].data();
                    let campaignName = campaign.name;
                    if (
                        campaignName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    ) {
                        // campaign meets criteria
                        if (rendered[campaignID]) {
                            // display it
                            document.getElementById(
                                "displayCard" + campaignID,
                            ).style.display = "block";
                        } else {
                            // add it to the DOM
                            addCampaignToDOM(campaign, campaignID, false); // why was it originally true? Maybe come back to this, jake
                        }
                    } else {
                        // campaign does not meet criteria
                        try {
                            document.getElementById(
                                "displayCard" + campaignID,
                            ).style.display = "none";
                        } catch {}
                    }
                }
            });

        let locationAccessKey = "";
        let jdlocationAccessKey = ""; // access key for Jostens Demo
        let funnelList = "";
        getLocationAccessKey(locationID);

        // retrieve all campaigns from Firebase
        // then write them to the DOM
        async function getCampaigns() {
            const campaignsRef = firestore
                .collection("campaigns_restructured")
                .doc(locationID)
                .collection("campaigns");
            const snapshot = await campaignsRef.get();
            snapshot.forEach((doc) => {
                campaignsList.push(doc);
            });

            // go for whichever is smaller: 50 or the length of the campaignsList
            for (
                maxLoaded;
                maxLoaded < campaignsList.length && maxLoaded < 25;
                maxLoaded++
            ) {
                // load 25 campaigns max
                //console.log(maxLoaded);
                addCampaignToDOM(
                    campaignsList[maxLoaded].data(),
                    campaignsList[maxLoaded].id,
                    false,
                    25,
                );
            }
        }

        async function getLocationAccessKey(loc) {
            firestore // grab the location access key from Firebase
                .collection("tokens")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.id == "owNEzpbrfBjp4weSARXD") {
                            jdlocationAccessKey =
                                doc.data().locationAccessToken;
                        }
                        if (doc.id == loc) {
                            locationAccessKey = doc.data().locationAccessToken;

                            getFunnelList();
                            // escape the forEach
                            return;
                        }
                    });
                });
        }

        async function addCampaignToDOM(campaign, docID, isNew, max) {
            if (rendered[docID]) {
                return;
            }

            let campaignName = campaign.name || "";
            let locationID = campaign.locationID || "";
            let numContacts = campaign.numContacts || "";
            let smartListID = campaign.smartListID || "";
            let jostensWebsiteLink = campaign.jostensWebsiteLink || "";
            let orderDueDate = campaign.orderDueDate || "";
            let schoolName = campaign.schoolName || "";
            let schoolLocation = campaign.schoolLocation || "";
            let schoolMascot = campaign.mascot || "";
            let schoolLogo = campaign.schoolLogo || "";
            let landingPage1 = campaign.landingPage1 || "";
            let landingPage2 = campaign.landingPage2 || "";
            let funnel1 = campaign.funnel1 || "";
            let funnel2 = campaign.funnel2 || "";
            let lastUpdated = campaign.lastUpdated || "";

            let page1IsJostens = false;
            let page2IsJostens = false;

            if (landingPage1.includes("https://jostens.co/")) {
                page1IsJostens = true;
                prevPath1s[docID] = landingPage1.split(
                    "https://jostens.co/",
                )[1];
            }
            if (landingPage2.includes("https://jostens.co/")) {
                page2IsJostens = true;
                prevPath2s[docID] = landingPage2.split(
                    "https://jostens.co/",
                )[1];
            }

            if (isNew) {
                // this will be the default for all new campaigns
                page1IsJostens = true;
                page2IsJostens = true;
            }

            prevFunnel1s[docID] = funnel1;
            prevFunnel2s[docID] = funnel2;

            let campaignsContainer =
                document.getElementById("campaignsContainer");

            rendered[docID] = true;

            if (isNew) {
                campaignsContainer.innerHTML =
                    `
                <div class="campaign" onclick="display('${docID}')" id="displayCard${docID}">
                    <div style="font-size: 14pt">
                        <span id="campaignName${docID}">${campaignName}</span>
                        <div style="font-size: 9pt" id="cardNumContacts${docID}">${numContacts == "" ? "No contacts yet. Click 'manage' to get started" : numContacts + " contacts"} </div>
                    </div>
                </div>
            ` + campaignsContainer.innerHTML;
            } else {
                // campaign is not new, so we add it to the bottom instead
                campaignsContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="campaign" onclick="display('${docID}')" id="displayCard${docID}">
                    <div style="font-size: 14pt">
                        <span id="campaignName${docID}">${campaignName}</span>
                        <div style="font-size: 9pt" id="cardNumContacts${docID}">${numContacts == "" ? "No contacts yet. Click 'manage' to get started" : numContacts + " contacts"} </div>
                    </div>
                </div>
                ${
                    max - 1 == maxLoaded
                        ? `<span class="loading" id="loading${maxLoaded}" style="display: flex">
                Loading...</span>`
                        : ""
                }
            `,
                );
            }
            // add preview

            let previewContainer = document.getElementById("previewContainer");
            previewContainer.innerHTML += `
            <span
                style="display: none"
                class="fields ghlText previewType"
                id="${docID}"
            >
                <span
                    id="updateButton${docID}"
                    class="saveNew"
                    onclick="updateCampaign('${docID}')"
                    style="cursor: pointer"
                    >Update</span
                >
                <div style="margin-top: 10px"></div>
                <span style="font-size: 16pt; outline: none; border: 1px solid transparent;" class="inputFor${docID}" id="titleFor${docID}" contenteditable="true">${campaignName}</span>
                <span style="display: none" id="oldCampaignNameFor${docID}">${campaignName}</span>
                <p style="font-size: 10pt">
                    <br>
                    <a
                        id="numContacts${docID}"
                        href=
                        "${
                            numContacts == ""
                                ? 'javascript:" style="color: grey; cursor: default"' // do nothing
                                : "https://app.kairoscloud.io/v2/location/" +
                                  locationID +
                                  "/contacts/smart_list/All?search=" +
                                  encodeURIComponent(campaignName) +
                                  '" target="_blank"'
                        }"
                        >${numContacts == "" ? "No" : numContacts} contacts</a
                    >
                    <br>
                </p>
                <div>
                <progress id="progressBar${docID}" value="32" max="366" style="width: 100%; display: none"></progress>
                </div>
                <img src="${!schoolLogo.includes("http") ? "https://jbwx.github.io/KairosMedia/iframetest/noimage.png" : schoolLogo}" style="width: 30%; padding-top: 15px; margin-bottom: -10px; margin-left: -4px; margin-top: 2px" class="logoPreview" id="imgPreview${docID}">
                <div>
                    <div class="ghlText fieldLabel">School Name</div>
                    <input
                        class="input-field inputFor${docID}"
                        id="schoolName${docID}"
                        style="width: 40%"
                        placeholder="ex. 'Central High School'"
                        value="${schoolName}"
                    />
                </div>
                <div>
                    <div class="ghlText fieldLabel">School Location</div>
                    <input
                        class="input-field inputFor${docID}"
                        id="schoolLocation${docID}"
                        style="width: 60%"
                        placeholder="City, State"
                        value="${schoolLocation}"
                    />
                </div>
                <div>
                    <div class="ghlText fieldLabel">School Mascot</div>
                    <input
                        class="input-field inputFor${docID}"
                        id="schoolMascot${docID}"
                        style="width: 30%"
                        placeholder="ex. 'Tigers'"
                        value="${schoolMascot}"
                    />
                </div>
                <div> <!-- Start school logo link -->
                        <div class="ghlText fieldLabel" style="display: flexbox">
                            School Logo Link
                        </div>
                        <span
                            type="text"
                            class="input-field ghlText"
                            onclick="openMediaLibraryTemp()"
                            style="
                                width: 15%;
                                border-radius: 5px;
                                border-top-right-radius: 0;
                                border-bottom-right-radius: 0;
                                border-right: none;
                                margin-right: -5px;

                                color: #31324a;
                                text-align: center;
                                text-decoration: none;
                                font-size: 14px;
                                background-color: #165ef0;

                                color: white;
                                font-weight: 500;
                                cursor: pointer;
                                border: 1px solid #165eff;
                            "> Open Media Storage
                            </span>
                            <input
                                class="input-field inputFor${docID}"
                                id="schoolLogo${docID}"
                                style="width: 70%; border-top-left-radius: 0; border-bottom-left-radius: 0;"
                                placeholder="ex. 'https://www.example.com/logo.png'"
                                value="${schoolLogo}"
                            />
                    </div> <!-- End school logo link -->
                <!-- campaign stuff -->
                <div>
                    <div class="ghlText fieldLabel" style="display: flexbox">
                        Jostens Website Link
                    </div>

                    <input
                        id="jostensWebsiteLink${docID}"
                        placeholder="ex. 'https://jostens.com/a10b9a639035f'"
                        value="${jostensWebsiteLink}"
                        style="
                            width: 70%;
                        "
                        class="input-field inputFor${docID}"
                        type="text"
                    />
                </div>
                <div>
                        <div class="ghlText fieldLabel" style="display: flexbox">
                            Landing Page #1
                        </div>
                        <span
                            type="text"
                            class="input-field ghlText"
                            style="
                                width: 15%;
                                border-top-right-radius: 0;
                                border-bottom-right-radius: 0;
                                border-right: none;
                                margin-right: -5px;
                            ">
                            <span class="dropdown inputFor${docID}">
                                <select id="domainSelect1${docID}" onchange="document.getElementById('path1${docID}').value = ''">
                                    <option value="${page1IsJostens ? 'Jostens.co">Jostens.co/' : 'customDomain">Custom domain... &nbsp; &nbsp;'}</option>
                                    <option value="${!page1IsJostens ? 'Jostens.co">Jostens.co/' : 'customDomain">Custom domain... &nbsp; &nbsp;'}</option>
                                </select >
                                <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 5.5L7.5 8.5L10.5 5.5" stroke="#2c3538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </span>
                            </span>
                        <input
                            id="path1${docID}"
                            placeholder="path-to-my-page"
                            oninput="checkPath('${docID}', 1)"
                            value="${isNew ? "" : page1IsJostens ? landingPage1.split("https://jostens.co/")[1] : landingPage1}"
                            style="
                                width: 48%;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                margin-right: 5%;
                                outline: none !important;
                            "
                            class="input-field inputFor${docID}"
                            type="text"
                        />
                    </div>

                    <div style="white-space: nowrap; display: ${page1IsJostens ? "block" : "none"}" id="forwardsTo1${docID}"> <!-- BEGIN FORWARD -->
                    <div style="margin-bottom: -15px; font-size: 11pt; margin-top: 10px">
                        Forwards to
                    </div>
                    <span>
                      <svg width="50" height="50" viewBox="-10 -20 60 60" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="10" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                        <line x1="10" y1="30" x2="30" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                        <line x1="25" y1="25" x2="30" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                        <line x1="25" y1="35" x2="30" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                      </svg>

                    </span>

                    <span
                      style="
                          margin-right: 5%;
                          padding-top: 12px;
                          padding-bottom: 12px;
                          padding-left: 6px;
                          padding-right: 6px;
                      "
                        class="input-field inputFor${docID}"
                    />
                      <span class="dropdown">
                          <select id="funnelSelect1${docID}" onchange="document.getElementById('path1${docID}').value = ''; checkPath('${docID}', 1)">
                              <option value="null">Select landing page...&nbsp; &nbsp; &nbsp;</option>
                              ${funnelList}
                          </select >
                          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.5 5.5L7.5 8.5L10.5 5.5" stroke="#2c3538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                      </span>
                    </span>
                </div> <!-- END FORWARD -->
                <div id="clickableLink1${docID}" class="clickableLink" onclick="openLandingPage(1, '${docID}')">Open in new tab</div>

                <!-- LANDING PAGE 2 -->
                <div style="height: 10px"></div>
                <div>
                        <div class="ghlText fieldLabel" style="display: flexbox;">
                            Landing Page #2
                        </div>
                        <span
                            type="text"
                            class="input-field ghlText"
                            style="
                                width: 15%;
                                border-right: none;
                                margin-right: -5px;
                            ">
                            <span class="dropdown inputFor${docID}">
                                <select id="domainSelect2${docID}" onchange="document.getElementById('path2${docID}').value = ''">
                                    <option value="${page2IsJostens ? 'Jostens.co">Jostens.co/' : 'customDomain">Custom domain... &nbsp; &nbsp;'}</option>
                                    <option value="${!page2IsJostens ? 'Jostens.co">Jostens.co/' : 'customDomain">Custom domain... &nbsp; &nbsp;'}</option>
                                </select >
                                <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 5.5L7.5 8.5L10.5 5.5" stroke="#2c3538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </span>
                            </span>
                        <input
                            id="path2${docID}"
                            placeholder="path-to-my-page"
                            oninput="checkPath('${docID}', 2)"
                            value="${isNew ? "" : page2IsJostens ? landingPage2.split("https://jostens.co/")[1] : landingPage2}"
                            style="
                                width: 48%;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                margin-right: 5%;
                                outline: none !important;
                            "
                            class="input-field inputFor${docID}"
                            type="text"
                        />
                    </div>

                    <div style="white-space: nowrap; display: ${page2IsJostens ? "block" : "none"}" id="forwardsTo2${docID}"> <!-- BEGIN FORWARD -->
                    <div style="margin-bottom: -15px; font-size: 11pt; margin-top: 10px; ">
                        Forwards to
                    </div>
                    <span>
                      <svg width="50" height="50" viewBox="-10 -20 60 60" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="10" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                        <line x1="10" y1="30" x2="30" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                        <line x1="25" y1="25" x2="30" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                        <line x1="25" y1="35" x2="30" y2="30" stroke="grey" stroke-width="2" stroke-linecap="round"/>
                      </svg>

                    </span>
                    <span
                    style="
                        margin-right: 5%;
                        padding-top: 12px;
                        padding-bottom: 12px;
                        padding-left: 6px;
                        padding-right: 6px;
                    "
                        class="input-field inputFor${docID}"
                    />
                      <span class="dropdown">
                          <select id="funnelSelect2${docID}" onchange="document.getElementById('path2${docID}').value = ''; checkPath('${docID}', 2)">>
                              <option value="null">Select landing page...&nbsp; &nbsp; &nbsp;</option>
                              ${funnelList}
                          </select >
                          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.5 5.5L7.5 8.5L10.5 5.5" stroke="#2c3538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                      </span>
                    </span>
                    </div> <!-- END FORWARD -->
                    <div id="clickableLink2${docID}" class="clickableLink" onclick="openLandingPage(2, '${docID}')">Open in new tab</div>
                <!-- END LANDING PAGE 2 -->
                <div>
                    <div class="ghlText fieldLabel">Order Due Date</div>
                    <input
                        type="date"
                        class="input-field inputFor${docID}"
                        id="orderDueDate${docID}"
                        style="width: 22%"
                        value="${orderDueDate}"
                        onchange="updateDate('${docID}')"
                    />
                    <!-- format: '2023-12-23T23:24' -->
                    <div class="ghlText" style="margin-top: 15px; font-size: 11pt;" id="datePreview${docID}">${getDate(orderDueDate)}</div>
                </div>
                <div>
                  <span class="saveNew" style="border: 1px solid red; background-color: #ffcece; color: #ff1b1b; cursor: pointer" onclick="deleteCampaign('${docID}')">Delete</span>
                </div>
                <br>
                <span class="lastUpdated" id="lastUpdatedFor${docID}">${lastUpdated == "" ? "" : "Last updated " + unixTimeToDate(lastUpdated)}</span>
                <br>
                <br><br>
            </span>
            `;

            await sleep(300); // wait for DOM to update

            if (funnel1 != "") {
                document.getElementById("funnelSelect1" + docID).value =
                    funnel1;
            }

            if (funnel2 != "") {
                document.getElementById("funnelSelect2" + docID).value =
                    funnel2;
            }

            // add event listeners to un-grey out "update button"
            document
                .querySelectorAll(".inputFor" + docID)
                .forEach((element) => {
                    element.addEventListener("input", () => {
                        let updateButton = document.getElementById(
                            `updateButton${docID}`,
                        );

                        if (
                            document.getElementById("domainSelect1" + docID)
                                .value == "customDomain"
                        ) {
                            document.getElementById(
                                "forwardsTo1" + docID,
                            ).style.display = "none";
                            document.getElementById(
                                "path1" + docID,
                            ).attributes.placeholder.value =
                                "https://my-custom-domain.com/path";
                            // make not green
                            let pathBox = document.getElementById(
                                "path1" + docID,
                            );
                            pathBox.style.border = "1px solid #d1d5de";
                            pathBox.style.backgroundColor = "white";
                        } else {
                            document.getElementById(
                                "forwardsTo1" + docID,
                            ).style.display = "block";
                            document.getElementById(
                                "path1" + docID,
                            ).attributes.placeholder.value = "path-to-my-page";
                        }

                        if (
                            document.getElementById("domainSelect2" + docID)
                                .value == "customDomain"
                        ) {
                            document.getElementById(
                                "forwardsTo2" + docID,
                            ).style.display = "none";
                            document.getElementById(
                                "path2" + docID,
                            ).attributes.placeholder.value =
                                "https://my-custom-domain.com/path";
                            // make not green
                            let pathBox = document.getElementById(
                                "path1" + docID,
                            );
                            pathBox.style.border = "1px solid #d1d5de";
                            pathBox.style.backgroundColor = "white";
                        } else {
                            document.getElementById(
                                "forwardsTo2" + docID,
                            ).style.display = "block";
                            document.getElementById(
                                "path2" + docID,
                            ).attributes.placeholder.value = "path-to-my-page";
                        }

                        // make the title in the card the same as the title in the preview
                        // replace newlines with nothing
                        document.getElementById(
                            `campaignName${docID}`,
                        ).innerText = document
                            .getElementById(`titleFor${docID}`)
                            .innerText.replace(/\n/g, "");
                        updateButton.classList.remove("greyedOut");
                        updateButton.innerText = "Update";
                        const images = document.querySelectorAll("logoPreview");
                    });
                });
        }

        function updateDate(docID) {
            try {
                document.getElementById("datePreview" + docID).innerText =
                    formatDate(
                        document.getElementById("orderDueDate" + docID).value,
                    );
            } catch (e) {} // date user enters won't always be valid, so just ignore if error thrown
        }

        function getDate(givenDate) {
            try {
                return formatDate(givenDate);
            } catch (e) {}
        }

        function formatDate(dateString) {
            const [year, month, day] = dateString.split("-");
            const date = new Date(Date.UTC(year, month - 1, day));

            // Add 1 to the day
            date.setUTCDate(date.getUTCDate() + 1);

            const options = { year: "numeric", month: "long", day: "numeric" };
            let finalDate = date.toLocaleDateString("en-US", options);
            if (
                finalDate.toString() == "Invalid Date" ||
                finalDate.toString() == "undefined"
            ) {
                // invalid date
                return "";
            } else {
                return finalDate;
            }
        }

        // converts unix time ex. "1724818189617" to "DoW, Mo Day, Year at Time AM/PM" format ex. "Wed, Jan 1, 2023 at 12:00 AM
        function unixTimeToDate(unixTime) {
            let date = new Date(unixTime);
            let options = {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            };
            return date.toLocaleDateString("en-US", options);
        }

        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        function display(campaignID) {
            document.querySelectorAll(".previewType").forEach((element) => {
                element.style.display = "none";
            });
            document.getElementById(campaignID).style.display = "block";
        }

        function deleteCampaign(docID) {
            document.querySelectorAll(".previewType").forEach((element) => {
                element.style.display = "none";
            });
            document.getElementById("displayCard" + docID).style.display =
                "none";
            let campaignRef = firestore
                .collection("campaigns_restructured")
                .doc(locationID)
                .collection("campaigns")
                .doc(docID);

            // Delete the document
            campaignRef
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                    deleteTag(
                        document
                            .getElementById("campaignName" + docID)
                            .innerText.toLowerCase(),
                    );
                    deleteLinkWrapper(docID);
                })
                .catch((error) => {
                    console.error("Error removing document: ", error);
                    domError("Error deleting campaign. Please try again.");
                });
        }

        async function deleteLinkWrapper(docID) {
            await getLinkID(
                document.getElementById("path1" + docID).value,
            ).then((linkID) => {
                console.log("Deleting link 1");
                deleteLink(linkID);
            });

            await getLinkID(
                document.getElementById("path2" + docID).value,
            ).then((linkID) => {
                console.log("Deleting link 2");
                deleteLink(linkID);
            });
        }

        function newCampaign() {
            let campaignsContainer =
                document.getElementById("campaignsContainer");
            if (!campaignsContainer.innerHTML.includes("tempNewCampaign")) {
                campaignsContainer.innerHTML =
                    `
                <div class="campaign" id="tempNewCampaign">
                    <span class="saveNew greyedOut" id="newSaveTemp" style="cursor: pointer; margin-top: 12px" onclick="saveNewCampaign()">Save</span>
                    <span class="manageButton" style="margin-top: 12px" onclick="cancelNewCampaign()">Cancel</span>
                    <div>
                        <input type="text" class="input-field" placeholder="Name your campaign..." style="width: 50%" id="newCampaignNameInput" autofocus>
                    </div>
                </div>
              ` + campaignsContainer.innerHTML;
                // create new event listener for newCampaignNameInput's input value changing
                document
                    .getElementById("newCampaignNameInput")
                    .addEventListener("input", function () {
                        if (
                            document.getElementById("newCampaignNameInput")
                                .value == ""
                        ) {
                            // add ".greyedOut" class to newSaveTemp
                            document
                                .getElementById("newSaveTemp")
                                .classList.add("greyedOut");
                        } else {
                            document
                                .getElementById("newSaveTemp")
                                .classList.remove("greyedOut");
                        }
                    });
                // create a new eventlistener for enter key being pressed
                document
                    .getElementById("newCampaignNameInput")
                    .addEventListener("keyup", function (event) {
                        if (
                            event.key === "Enter" &&
                            document.getElementById("newCampaignNameInput")
                                .value != ""
                        ) {
                            saveNewCampaign();
                        }
                    });
            }
        }

        function cancelNewCampaign() {
            document.getElementById("tempNewCampaign").remove();
        }

        function saveNewCampaign() {
            const campaignName = document.getElementById(
                "newCampaignNameInput",
            ).value;
            // if campaignName found in campaignsList, display error message
            for (let i = 0; i < campaignsList.length; i++) {
                if (
                    campaignsList[i].data().name.toLowerCase() ==
                    campaignName.toLowerCase()
                ) {
                    domError("Campaign name taken. Choose a different name.");
                    return;
                }
            }
            // Create a new tag for the campaign
            createTag(campaignName);
            // Generate a new document ID
            let newDocID = Math.random().toString(16).substring(4);
            // Reference to the new campaign document in the reorganized collection
            const newCampaignRef = firestore
                .collection("campaigns_restructured")
                .doc(locationID)
                .collection("campaigns")
                .doc(newDocID);
            // Set the new campaign document
            newCampaignRef
                .set({
                    name: campaignName,
                    locationID: locationID,
                })
                .then(() => {
                    console.log("Document written with ID: ", newDocID);

                    // Get the new campaign document
                    return newCampaignRef.get();
                })
                .then((doc) => {
                    if (doc.exists) {
                        document.getElementById("tempNewCampaign").remove();
                        addCampaignToDOM(doc.data(), doc.id, true);
                        campaignsList.push(doc);
                    } else {
                        console.log("No such document!");
                    }
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }

        async function tryCreateTag(campaignName) {
            let tagID = await getTagID(campaignName);
            if (tagID == null) {
                console.log("Could not find tag. Creating tag.");
                createTag(campaignName);
            }
        }

        function updateCampaign(docID) {
            if (
                document.getElementById("updateButton" + docID).classList
                    .length <= 1
            ) {
                let campaignName = document.getElementById(
                    "campaignName" + docID,
                ).innerText;
                // check if campaign name is valid (hasn't already been used)
                for (let i = 0; i < campaignsList.length; i++) {
                    if (
                        campaignsList[i].data().name.toLowerCase() ==
                        campaignName.toLowerCase()
                    ) {
                        if (campaignsList[i].id != docID) {
                            domError(
                                "Campaign name taken. Choose a different name.",
                            );

                            return;
                        }
                    }
                }

                // in some cases, tags are not being created. This is a temporary fix
                tryCreateTag(campaignName);

                //if (validPath[1]) {
                shortenLink(
                    document.getElementById("path1" + docID).value,
                    document.getElementById("funnelSelect1" + docID).value,
                    docID,
                    1,
                );
                //}
                //if (validPath[2]) {
                shortenLink(
                    document.getElementById("path2" + docID).value,
                    document.getElementById("funnelSelect2" + docID).value,
                    docID,
                    2,
                );
                //}

                let updateButton = document.getElementById(
                    `updateButton${docID}`,
                );
                updateButton.classList.add("greyedOut");
                updateButton.innerText = "Updating...";
                // update the campaign in the database
                let campaignRef = firestore
                    .collection("campaigns_restructured")
                    .doc(locationID)
                    .collection("campaigns")
                    .doc(docID);
                // get each of the input fields and store as variable
                let schoolName = document.getElementById(
                    "schoolName" + docID,
                ).value;
                let schoolLocation = document.getElementById(
                    "schoolLocation" + docID,
                ).value;
                let schoolMascot = document.getElementById(
                    "schoolMascot" + docID,
                ).value;
                let schoolLogo = document.getElementById(
                    "schoolLogo" + docID,
                ).value;
                let jostensWebsiteLink = document.getElementById(
                    "jostensWebsiteLink" + docID,
                ).value;
                let orderDueDate = document.getElementById(
                    "orderDueDate" + docID,
                ).value;

                // The two landing pages are special cases. If the domain is Jostens.co, we need to add the domain to the path
                // Elsewise, the user has entered a full URL
                let landingPage1 = document.getElementById(
                    "path1" + docID,
                ).value;
                if (
                    document.getElementById("domainSelect1" + docID).value ==
                    "Jostens.co"
                ) {
                    landingPage1 =
                        "https://jostens.co/" +
                        document.getElementById("path1" + docID).value;
                }

                // and we do the same thing for the second landing page
                let landingPage2 = document.getElementById(
                    "path2" + docID,
                ).value;
                if (
                    document.getElementById("domainSelect2" + docID).value ==
                    "Jostens.co"
                ) {
                    landingPage2 =
                        "https://jostens.co/" +
                        document.getElementById("path2" + docID).value;
                }

                let oldCampaignName = document.getElementById(
                    "oldCampaignNameFor" + docID,
                ).innerText;
                // get the two funnels
                let funnel1 = document.getElementById(
                    "funnelSelect1" + docID,
                ).value;
                let funnel2 = document.getElementById(
                    "funnelSelect2" + docID,
                ).value;
                // get the last updated date, make it current unix time
                let lastUpdated = Date.now();

                // update in firebase, throw error if it fails, success message if it works
                campaignRef
                    .update({
                        name: campaignName,
                        schoolName: schoolName,
                        schoolLocation: schoolLocation,
                        mascot: schoolMascot,
                        schoolLogo: schoolLogo,
                        jostensWebsiteLink: jostensWebsiteLink,
                        orderDueDate: orderDueDate,
                        landingPage1: landingPage1,
                        landingPage2: landingPage2,
                        funnel1: funnel1,
                        funnel2: funnel2,
                        lastUpdated: lastUpdated,
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                        domError(
                            "Failure updating campaign. Please try again.",
                        );
                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById(
                            "lastUpdatedFor" + docID,
                        ).innerText =
                            "Last updated " + unixTimeToDate(lastUpdated);
                        // What the below code does:
                        // - reconstruct custom fields
                        // - get list of contacts with tag, which is the docID
                        //    - let contactsList = getContactsByTag(campaignRef.data().docID)
                        // - update each contact with new school info
                        //    - updateList(contactsList, customfields) = repeated call to updateContact()
                        // - update campaign with new number of contacts
                        // - update UI

                        let customFields =
                            `{
                          "customFields": [
                            {
                              "key": "school_name",
                              "value": "` +
                            schoolName +
                            `"
                            },

                            {
                              "key": "mascot",
                              "value": "` +
                            schoolMascot +
                            `"
                            },

                            {
                              "key": "school_location",
                              "value": "` +
                            schoolLocation +
                            `"
                            },

                            {
                              "key": "school_logo_link",
                              "value": "` +
                            schoolLogo +
                            `"
                            },

                            {
                              "key": "jostens_website_link",
                              "value": "` +
                            jostensWebsiteLink +
                            `"
                            },

                            {
                              "key": "landing_page_1",
                              "value": "` +
                            landingPage1 +
                            `"
                            },

                            {
                              "key": "landing_page_2",
                              "value": "` +
                            landingPage2 +
                            `"
                            },

                            {
                              "key": "campaign_name",
                              "value": "` +
                            campaignName +
                            `"
                            },

                            {
                              "key": "last_updated",
                              "value": "` +
                            new Date().toISOString() +
                            `"
                            },

                            {
                              "key": "type",
                              "value": "` +
                            "customer" +
                            `"
                            },

                            {
                              "key": "order_due_date",
                              "value": "` +
                            formatDate(orderDueDate) +
                            `"
                            }

                          ],
                          "country": "US"
                        }
                        `;

                        getContactsByTag(
                            "https://services.leadconnectorhq.com/contacts/?locationId=" +
                                locationID +
                                "&query=" +
                                oldCampaignName.toLowerCase() +
                                "&limit=100",
                        ).then((data) => {
                            console.log(data);
                            updateList(data, customFields, docID);
                        });
                    }); // end .then() after updating campaign
            }
        }

        async function getContactsByTag(url) {
            //console.log(url);
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                contactsList = data.contacts;
                // since the API only returns 100 contacts at a time, we need to check if there are more contacts
                if (contactsList.length == 100) {
                    return contactsList.concat(
                        await getContactsByTag(data.meta.nextPageUrl), // recursive call to get the next contacts
                    );
                } else {
                    return contactsList;
                }
            } catch (error) {
                console.error(error);
            }
        }

        function updateList(contList, fields, docID) {
            let index = 0;
            let max = contList.length;
            if (contList.length == 0) {
                let updateButton = document.getElementById(
                    `updateButton${docID}`,
                );
                updateButton.innerText = "Update";
                // remove greyedout class from updatebutton
                updateButton.classList.remove("greyedOut");

                // update tag (grab old campaign name and new campaign name)
                let campaignName = document.getElementById(
                    "campaignName" + docID,
                ).innerText;
                let oldCampaignName = document.getElementById(
                    "oldCampaignNameFor" + docID,
                ).innerText;
                updateTag(
                    oldCampaignName.toLowerCase(),
                    campaignName.toLowerCase(),
                );
                document.getElementById("numContacts" + docID).innerText =
                    "No contacts";
                document.getElementById("cardNumContacts" + docID).innerText =
                    "No contacts yet. Click 'manage' to get started";
                return;
            }
            let progBar = document.getElementById("progressBar" + docID);
            progBar.max = max;
            progBar.value = 0;
            progBar.style.display = "block";
            let progText = document.getElementById("numContacts" + docID);
            let apiInterval = setInterval(() => {
                updateContact(contList[index].id, fields);
                progBar.value = index + 1;
                progText.innerText =
                    index + 1 + " / " + max + " contacts updated";
                index++;
                if (index >= max) {
                    clearInterval(apiInterval);
                    let updateButton = document.getElementById(
                        `updateButton${docID}`,
                    );
                    updateButton.innerText = "Update";
                    // update tag (grab old campaign name and new campaign name)
                    let campaignName = document.getElementById(
                        "campaignName" + docID,
                    ).innerText;
                    let oldCampaignName = document.getElementById(
                        "oldCampaignNameFor" + docID,
                    ).innerText;
                    updateTag(
                        oldCampaignName.toLowerCase(),
                        campaignName.toLowerCase(),
                    );
                    // remove greyedout class from updatebutton
                    updateButton.classList.remove("greyedOut");
                    setTimeout(() => {
                        progBar.style.display = "none";
                        progText.innerText = max + " contacts";
                    }, 1000);
                }
            }, 110); // every 120ms, we update a contact. This equals about 90 contacts per 10 seconds, below the API limit and giving us some space for people using the API elswehere
            firestore
                .collection("campaigns_restructured")
                .doc(locationID)
                .collection("campaigns")
                .doc(docID)
                .update({
                    // update number of contacts in campaign
                    numContacts: max,
                });
        }

        async function updateContact(contactID, fields) {
            const url =
                "https://services.leadconnectorhq.com/contacts/" + contactID;
            const options = {
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: fields,
            };

            try {
                await fetch(url, options);
                console.log("Contact updated successfully!");
            } catch (error) {
                console.error(error);
            }
        }

        async function deleteTag(tagName) {
            getTagID(tagName).then((tagID) => {
                const url =
                    "https://services.leadconnectorhq.com/locations/" +
                    locationID +
                    "/tags/" +
                    tagID;
                const options = {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + locationAccessKey,
                        Version: "2021-07-28",
                        Accept: "application/json",
                    },
                };

                try {
                    const response = fetch(url, options);
                    // const data = await response.json();
                    // console.log(data);
                    console.log("Successfully deleted tag " + tagName);
                } catch (error) {
                    console.error(error);
                }
            });
        }

        //let datax = "";
        async function updateTag(oldTag, newTag) {
            // point to anonymous async function
            getTagID(oldTag).then(async (tagID) => {
                //console.log(tagID);
                const url =
                    "https://services.leadconnectorhq.com/locations/" +
                    locationID +
                    "/tags/" +
                    tagID;
                const options = {
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer " + locationAccessKey,
                        Version: "2021-07-28",
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: '{"name":"' + newTag + '"}',
                };

                try {
                    const response = await fetch(url, options);
                    //datax = response;
                    const data = await response.json();
                    console.log(data);
                    if (
                        response.status != 200 &&
                        response.status != 201 &&
                        response.status != 204 &&
                        response.status != 202
                    ) {
                        throw new Error("Could not update tag");
                    }
                    console.log(
                        "Successfully updated tag " + oldTag + " to " + newTag,
                    );
                } catch (error) {
                    console.error(error);
                    domError("Could not update tag");
                }
            });
        }

        async function getTagID(tagName) {
            const url =
                "https://services.leadconnectorhq.com/locations/" +
                locationID +
                "/tags";
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                //console.log(data);
                let tags = data.tags;
                for (let i = 0; i < tags.length; i++) {
                    if (tags[i].name == tagName.toLowerCase()) {
                        //console.log(tags[i].id);
                        return tags[i].id;
                    }
                }
                return null;
            } catch (error) {
                console.error(error);
            }
        }

        // this never gets used
        async function addTagToContact(contactID, tag) {
            const url =
                "https://services.leadconnectorhq.com/contacts/" +
                contactID +
                "/tags";
            const options = {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: '{"tags":["' + tag + '"]}',
            };

            try {
                const response = await fetch(url, options);
                //const data = await response.json();
                //console.log(data);
                console.log("Tag successfully added to contact!");
            } catch (error) {
                console.error(error);
            }
        }

        async function createTag(tagName) {
            const url =
                "https://services.leadconnectorhq.com/locations/" +
                locationID +
                "/tags";
            const options = {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: '{"name":"' + tagName + '"}',
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                if (
                    response.status != 200 &&
                    response.status != 201 &&
                    response.status != 204 &&
                    response.status != 202
                ) {
                    throw new Error("Could not create tag");
                }
                console.log(data);
                console.log("Tag successfully created!");
            } catch (error) {
                console.error(error);
                domError("Could not create tag");
            }
        }

        async function getLinkID(path) {
            const url =
                "https://services.leadconnectorhq.com/funnels/lookup/redirect/list?locationId=owNEzpbrfBjp4weSARXD&limit=20&offset=0&search=/" +
                path +
                "$"; // through some guesswork, I've discovered that the API uses regexes to search for URLs – hence the $ at the end, which is regex for "end of string". If the URL exists, it should return only 1 result – and if not, it should return 0.
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + jdlocationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                return await response.json().then((data) => {
                    //console.log(data);
                    return data.data[0]._id;
                });
            } catch (error) {
                //console.error(path);
                //console.error(error);
            }
        }

        async function deleteLink(linkID) {
            const url =
                "https://services.leadconnectorhq.com/funnels/lookup/redirect/" +
                linkID +
                "?locationId=owNEzpbrfBjp4weSARXD";
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + jdlocationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                if (data.status != "ok") {
                    console.log(
                        "Could not delete previous link (might be first time creating link)",
                    );
                    //domError("Could not delete previous link");
                }
            } catch (error) {
                //domError("Could not delete previous link");
                onsole.log(
                    "Could not delete previous link (might be first time creating link)",
                );
            }
        }

        // tests if a string is URL safe
        function isUrlifyAble(str) {
            const urlSafePattern = /^[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]*$/;
            return urlSafePattern.test(str);
        }

        async function shortenLink(path, siteID, docID, which) {
            if (!isUrlifyAble(path)) {
                domError(
                    "Cannot shorten URL: Path contains invalid characters",
                );
                return;
            }
            if (path == "") {
                // path is empty
                domError("Cannot shorten URL: Path is empty");
                return;
            }

            let fsValue = document.getElementById(
                "funnelSelect" + which + docID,
            ).value;

            if (
                fsValue == "" ||
                fsValue == null ||
                fsValue == "null" ||
                fsValue == undefined
            ) {
                domError("Please select a funnel");
                return;
            }

            if (which == 1) {
                await getLinkID(prevPath1s[docID]).then((linkID) => {
                    if (path != prevPath1s[docID]) {
                        console.log(
                            "Deleting old link (1): /" + prevPath1s[docID],
                        );
                        prevPath1s[docID] = path;
                        deleteLink(linkID);
                    }
                });
            } else {
                // which == 2
                await getLinkID(prevPath2s[docID]).then((linkID) => {
                    if (path != prevPath2s[docID]) {
                        console.log(
                            "Deleting old link (2): /" + prevPath2s[docID],
                        );
                        prevPath2s[docID] = path;
                        deleteLink(linkID);
                    }
                });
            }

            const url =
                "https://services.leadconnectorhq.com/funnels/lookup/redirect";
            const options = {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + jdlocationAccessKey,
                    Version: "2021-07-28",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body:
                    `
                {
                  "locationId": "` +
                    "owNEzpbrfBjp4weSARXD" +
                    `",
                  "domain": "jostens.co",
                  "path": "/` +
                    path +
                    `",
                  "target": "https://app.kairoscloud.io/v2/preview/` +
                    siteID +
                    `",
                  "action": "url"
                }`,
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                // console.log("URL REDIR DATA: ");
                console.log(data);
            } catch (error) {
                //console.error(error);
                domError("Could not shorten link");
            }
        }

        async function getSiteForFunnel(funnelID, funnelName, j, length) {
            const url =
                "https://services.leadconnectorhq.com/funnels/page?locationId=" +
                locationID +
                "&funnelId=" +
                funnelID +
                "&limit=20&offset=0";
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                //console.log(data);
                for (let i = 0; i < data.length; i++) {
                    //console.log(data[i]);
                    let displayName = funnelName + " | " + data[i].name;
                    funnelList += `<option value="${data[i]._id}">${displayName.length < 55 ? displayName : displayName.substring(0, 55) + "..."} &nbsp; &nbsp; &nbsp;</option>`;
                }
                if (j == length - 1) {
                    //getCampaigns();
                }
            } catch (error) {
                console.error(error);
            }
        }

        let datax = "";
        async function getFunnelList() {
            const url =
                "https://services.leadconnectorhq.com/funnels/funnel/list?locationId=" +
                locationID;
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + locationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log("FUNNELS:");
                console.log(data);
                datax = data;
                let funnels = data.funnels;
                for (let i = 0; i < funnels.length; i++) {
                    // for each step
                    let steps = funnels[i].steps;
                    for (let j = 0; j < steps.length; j++) {
                        let funnelName = funnels[i].name;
                        let stepName = steps[j].name;
                        let siteID = steps[j].pages[0];
                        let displayName = funnelName + " | " + stepName;
                        funnelList += `<option value="${siteID}">${displayName.length < 55 ? displayName : displayName.substring(0, 55) + "..."} &nbsp; &nbsp; &nbsp;</option>`;
                    }
                }
                getCampaigns();
            } catch (error) {
                console.error(error);
            }
        }

        function closeMediaLibrary() {
            document.getElementById("mediaLibraryContainer").style.visibility =
                "hidden";
        }

        function openMediaLibrary(docID) {
            document.getElementById("mediaLibraryContainer").style.visibility =
                "visible";
            // set the docID in the hidden html
            document.getElementById("selectingMediaFor").innerText = docID;
        }

        function instateMediaLink() {
            // if button is not greyed out
            if (
                !document
                    .getElementById("mediaSelectButton")
                    .classList.contains("greyedOut")
            ) {
                let docID =
                    document.getElementById("selectingMediaFor").innerText;
                console.log(docID);
                let mediaLink = document.getElementById("mediaLink").innerText;
                // put that value into the input box
                document.getElementById("schoolLogo" + docID).value = mediaLink;
                // put the image in the preview
                document.getElementById("imgPreview" + docID).src = mediaLink;
                closeMediaLibrary();
            }
        }

        // DOM error function + global variables
        // the function is recursive; if already displaying error, it waits and attempts again
        // pushing onto an "error stack" might be a better solution for this in the future, but this is simpler
        // we use globally-scoped variables so that the function doesn't have to select the elements every time
        // the elements are static anyways, they're always in the DOM and never change
        let errorMessage = document.getElementById("errorMessage");
        let domErrorBox = document.getElementById("DOMerror");
        let errorInProg = false;
        function domError(text) {
            // // "Muted" all errors for now
            //console.log("Calling domError...");
            // if (errorInProg) {
            //     setTimeout(() => {
            //         domError(text); // recursively call it one second later
            //     }, 1000); // remove it once the animation is done
            //     return;
            // }
            // errorMessage.innerText = text;
            // domErrorBox.classList.add("swipeIn");
            console.warn("Error: " + text); // we use console.warn instead of .error to avoid stopping the script
            // errorInProg = true;
            // setTimeout(() => {
            //     domErrorBox.classList.remove("swipeIn");
            //     errorInProg = false;
            // }, 7000); // remove it once the animation is done (6s wait, 1s animation length)
        }

        // basically a wrapper function for shortenedLinkExists, just sorts out which path box is being checked, and which to change when valid/invalid
        // "which" can be 1 or 2, for the two different path boxes
        function checkPath(docID, which) {
            let dropdownForPath = document.getElementById(
                "domainSelect" + which + docID,
            );

            let pathBox = document.getElementById("path" + which + docID);
            if (
                pathBox.value == "" ||
                dropdownForPath.value == "customDomain"
            ) {
                // reset to defaults
                pathBox.style.border = "1px solid #d1d5de";
                pathBox.style.backgroundColor = "white";
                return;
            }
            shortenedLinkExists(pathBox.value).then((linkExists) => {
                if (linkExists || !isUrlifyAble(pathBox.value)) {
                    pathBox.style.border = "1px solid lightcoral";
                    pathBox.style.backgroundColor = "#EAD3D3";
                    // grey out the update button
                    // document
                    //     .getElementById("updateButton" + docID)
                    //     .classList.add("greyedOut");
                    validPath[which] = false;
                } else {
                    pathBox.style.border = "1px solid green";
                    pathBox.style.backgroundColor = "#D7EBC0";
                    // un-grey out the update button
                    // document
                    //     .getElementById("updateButton" + docID)
                    //     .classList.remove("greyedOut");
                    validPath[which] = true;
                }
            });
        }

        // check if a given short URL exists or not
        // usage: await shortenedLinkExists("example")
        async function shortenedLinkExists(path) {
            const url =
                "https://services.leadconnectorhq.com/funnels/lookup/redirect/list?locationId=owNEzpbrfBjp4weSARXD&limit=20&offset=0&search=/" +
                path +
                "$"; // through some guesswork, I've discovered that the API uses regexes to search for URLs – hence the $ at the end, which is regex for "end of string". If the URL exists, it should return only 1 result – and if not, it should return 0.
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + jdlocationAccessKey,
                    Version: "2021-07-28",
                    Accept: "application/json",
                },
            };

            try {
                const response = await fetch(url, options);
                return await response.json().then((data) => {
                    //console.log(data.count);
                    return data.count == 1; // if the count is 1, the URL exists; if not, it doesn't
                });
            } catch (error) {
                console.error(error);
            }
        }

        // temporary function for after we've got the file selector figured out
        // opens the media library in a new tab
        // https://app.kairoscloud.io/v2/location/${locationID}/media-storage#iframeEmbed
        function openMediaLibraryTemp() {
            window.open(
                `https://app.kairoscloud.io/v2/location/${locationID}/media-storage#iframeEmbed`,
                "_blank",
            );
        }

        function openLandingPage(which, docID) {
            let path = document.getElementById("path" + which + docID).value;
            //console.log("PATH: " + path);
            if (path == "") {
                return;
            }
            // jacob note: this will no longer apply once we switch away from jostens.co
            let isCustomDomain =
                document.getElementById("domainSelect" + which + docID).value ==
                "customDomain";
            //console.log("Custom domain: " + isCustomDomain);

            url = "";
            if (isCustomDomain) {
                if (path.includes("https://")) {
                    url = path;
                } else {
                    url = `https://${path}`;
                }
            } else {
                url = `https://jostens.co/${path}`;
            }
            //console.log(url);
            window.open(url, "_blank");
        }
