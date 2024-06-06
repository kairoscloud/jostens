setInterval(updateTimestamp, 100);
    let appended = false;

    function updateTimestamp() {
        // Check if the element exists
        var timestampElement = document.querySelector(
            "#video-SsRJcUhC9--video-js > div.vjs-control-bar > div.vjs-current-time.vjs-time-control.vjs-control > span.vjs-current-time-display",
        );
        if (timestampElement) {
            // Get the timestamp
            var timestamp = timestampToSeconds(timestampElement.innerHTML);
            // Update the timestamp
            if (timestamp != 0) {
                document.querySelector("#timestamp2").innerHTML = timestamp;
            }
        }

        let buttonElement = document.querySelector(
            "#video-SsRJcUhC9--video-js > div.vjs-control-bar > button.vjs-fullscreen-control.vjs-control.vjs-button",
        );

        console.log(buttonElement.textContent);

        if (buttonElement.textContent == "Fullscreen") {
            appended = false;
        }

        if (
            buttonElement &&
            buttonElement.textContent == "Exit Fullscreen" &&
            !appended
        ) {
            appended = true;
            console.log("Appending!");

            // do all of the following code after a 0.5 second delay
            setTimeout(() => {
                document.querySelector(
                    "#video-SsRJcUhC9--video-js > div.vjs-text-track-display",
                ).innerHTML +=
                    `<img src="https://jacobwestra.com/KairosMedia/iframetest/logo.png"
                    style="
                        position: absolute;
                        top: 10%;
                        left: 3%;
                        width: 15%;
                        z-index: 1;
                        pointer-events: none;
                    "
                    alt="Overlay Image"/>`;
                console.log(
                    document.querySelector(
                        "#video-SsRJcUhC9--video-js > div.vjs-text-track-display",
                    ).innerHTML,
                );
            }, 200);
        }
    }

    function timestampToSeconds(timestamp) {
        const [minutes, seconds] = timestamp.split(":").map(parseFloat);
        return minutes * 60 + seconds;
    }
