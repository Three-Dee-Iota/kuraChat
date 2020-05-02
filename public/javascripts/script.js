/// Getting the template for the messages
let messageCardTemplate = document.getElementById("mc-index").content;
/// Container where all of users messages are stored
let userMessages = document.getElementById("cards-container");
/// Typing bar stuff
let moreAttachmentsIcon = document.getElementById("more-icon-container");
let moreAttachments = document.querySelector(".more-attachments-container");
let attachmentsContainer = document.querySelector(".attachments-container");
let typingBar = document.getElementById("typing-bar");

/// Adding a new message to the scrollable container
function newMessage() {
    let newCard = document.importNode(messageCardTemplate, true);
    userMessages.appendChild(newCard); 
}
/// ****** POP-UP-STYLE ANIMATION ****** 

/// User mute expand animation 
let muteIcon = document.getElementById("mute");
let muteUserPopup = document.querySelector(".mute-user-popup");

muteIcon.addEventListener("click", () => {
    if(muteUserPopup.classList.contains('mute-user-popup-open')) {
        muteUserPopup.classList.remove("mute-user-popup-open");
    }
    else {
        muteUserPopup.classList.add("mute-user-popup-open");
    }
});

/// Search messages expand animation 
let partnerMessagesSearch = document.getElementById('search-icon-container');
let partnerSearchPopup = document.querySelector('.search-messages-popup');

partnerMessagesSearch.addEventListener("click", () => {
    if(partnerSearchPopup.classList.contains("search-messages-popup-open")) {
        partnerSearchPopup.classList.remove("search-messages-popup-open");
    }
    else {
        partnerSearchPopup.classList.add("search-messages-popup-open");
    }
});

/// Expanding attachments animation
moreAttachmentsIcon.addEventListener("click", () => {
    if(moreAttachments.classList.contains("more-attachments-container-open")) {
        moreAttachments.classList.remove("more-attachments-container-open");
    }
    else {
        moreAttachments.classList.add("more-attachments-container-open");
    }
});

/// ************** SCROLLING EFFECT ****************** 
/// Applying the scrolling effects for the scrollable container 
let containerShadowTop = document.querySelector('.scrollable-shadow-top'); 
let containerShadowBottom = document.querySelector('.scrollable-shadow-bottom');

userMessages.addEventListener('scroll', () => {
    if(userMessages.scrollTop === 0) {
        containerShadowTop.style.backgroundColor = "transparent";
    } 
    else {
        containerShadowTop.style.backgroundColor = "#303A52";
    }
    if(userMessages.scrollHeight - userMessages.scrollTop === userMessages.clientHeight) {
        containerShadowBottom.style.backgroundColor = "transparent";
    }
    else {
        containerShadowBottom.style.backgroundColor = "#303A52";
    }
})

/// **************** USER MUTE ***********************
/// Getting the list of the mute icons
let iconsList = document.querySelector(".mute-icons-container").querySelectorAll(".option-icons");

/// Adding the listeners to the icons
for(let i = 0; i < iconsList.length; i++){
    iconsList[i].addEventListener("click", () => {
        let time = iconsList[i].innerText;
        let hours, minutes = 0, seconds = 0;
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
// *********************** SEND MESSAGE ***********************
let messageBar = document.getElementById('typing-bar');
let sendButton = document.querySelector('.send-icon-container');

function getSendMessage() {
  let message = messageBar.value;
  
  if(event.keyCode === 13) {
    console.log('sent');
  }
  sendButton.addEventListener('click', () => {
    console.log('sent');
  });
}
/// ************************* TEST ZONE **********************
for(let i = 1; i < 20; i++) {
    newMessage();
}

