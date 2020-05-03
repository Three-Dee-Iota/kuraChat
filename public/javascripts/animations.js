/// User mute expand animation 
const muteIcon = document.querySelector("#mute");
const muteUserPopup = document.querySelector(".mute-user-popup");

muteIcon.addEventListener("click", () => {
    if (muteUserPopup.classList.contains('mute-user-popup-open')) {
        muteUserPopup.classList.remove("mute-user-popup-open");
    }
    else {
        muteUserPopup.classList.add("mute-user-popup-open");
    }
});

/// Search messages expand animation 
const partnerMessagesSearch = document.querySelector('#search-icon-container');
const partnerSearchPopup = document.querySelector('.search-messages-popup');

partnerMessagesSearch.addEventListener("click", () => {
    if (partnerSearchPopup.classList.contains("search-messages-popup-open")) {
        partnerSearchPopup.classList.remove("search-messages-popup-open");
    }
    else {
        partnerSearchPopup.classList.add("search-messages-popup-open");
    }
});

/// Expanding attachments animation
const moreAttachmentsIcon = document.querySelector("#more-icon-container");
const moreAttachments = document.querySelector(".more-attachments-container");
const attachmentsContainer = document.querySelector(".attachments-container");

moreAttachmentsIcon.addEventListener("click", () => {
    if (moreAttachments.classList.contains("more-attachments-container-open")) {
        moreAttachments.classList.remove("more-attachments-container-open");
    }
    else {
        moreAttachments.classList.add("more-attachments-container-open");
    }
});