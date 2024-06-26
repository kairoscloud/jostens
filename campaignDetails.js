let checkIfCampaignDetailsInterval = setInterval(() => {
  console.log("Listening for campaign details...");
  if (document.querySelector("#SubNavPaneHeader > div > div > div")) {
    if (
      (document.querySelector("#SubNavPaneHeader > div > div > div").innerText =
        "Campaign Details")
    )
      clearInterval(checkIfCampaignDetailsInterval);
    campaignDetails();
  }
}, 3000);

function campaignDetails() {
  alert("campaign details detected!");
}
