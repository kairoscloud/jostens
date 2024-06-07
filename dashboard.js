    var url = window.top.location.href;
    var urlObj = new URL(url);
    var pathname = urlObj.pathname;
    var segments = pathname.split("/");
    var targetSegment = segments[3];

    document.write(
        `

  <style>
    #iframe-container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        left: 0px;
        top: 0px;
    }

    #iframe {
        position: absolute;
        top: -100px;
        left: -230px;
        width: calc(100vw + 230px);
        height: calc(100vh + 100px);
        border: none;
    }
</style>

<div id="iframe-container">
    <iframe
        id="iframe"
        src="https://app.kairoscloud.io/v2/location/` +
            targetSegment +
            `/settings/phone_number?tab=messaging-stats"
    />
</div>
  `,
    );
