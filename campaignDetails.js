let checkIfCampaignDetailsInterval = setInterval(() => {
  //console.log("Listening for campaign details...");
  if (
    document.querySelector(
      "#FormMessagingUsecase > div > div.n-form-item.n-form-item--medium-size.n-form-item--top-labelled.hl-form-item > label > span.n-form-item-label__text",
    )
  ) {
    if (
      (document.querySelector(
        "#FormMessagingUsecase > div > div.n-form-item.n-form-item--medium-size.n-form-item--top-labelled.hl-form-item > label > span.n-form-item-label__text",
      ).innerText = "Campaign Use case")
    ) {
      clearInterval(checkIfCampaignDetailsInterval);
      campaignDetails();
    }
  }
}, 3000);

function campaignDetails() {
  alert("Found campaign details!");
  document
    .querySelector("#ExampleUsecaseDescription > div > div")
    .setAttribute("onclick", "test(event)");
}

function test(event) {
  event.preventDefault();
  alert("Clicked!");
}
