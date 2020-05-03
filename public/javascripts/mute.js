/// Getting the list of the mute icons
const iconsList = document.querySelector(".mute-icons-container").querySelectorAll(".option-icons");

/// Adding the listeners to the icons
for (let i = 0; i < iconsList.length; i++) {
    iconsList[i].addEventListener("click", () => {
        let time = iconsList[i].innerText;
        time = time.slice(0, time.length - 1); /// Getting the mute duration
        time *= 1; /// Converting a string to a number
        time *= 3600; /// Convert everything to seconds
        let count = 0;
        function convertSeconds(s) { // Getting the proper time format
            let hrs = Math.floor(s / 3600);
            s -= hrs * 3600;
            let min = Math.floor(s / 60);
            let sec = s % 60;

            return hrs + ":" + min + ":" + sec;
        }
        let timer = setInterval(() => {  /// Timer Function
            console.log(convertSeconds(time - count));
            count++;
        }, 1000);
    });
}