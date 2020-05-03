const containerShadowTop = document.querySelector('.scrollable-shadow-top');
const containerShadowBottom = document.querySelector('.scrollable-shadow-bottom');

userMessages.addEventListener('scroll', () => {
    if (userMessages.scrollTop === 0) {
        containerShadowTop.style.backgroundColor = "transparent";
    }
    else {
        containerShadowTop.style.backgroundColor = "#303A52";
    }
    if (userMessages.scrollHeight - userMessages.scrollTop === userMessages.clientHeight) {
        containerShadowBottom.style.backgroundColor = "transparent";
    }
    else {
        containerShadowBottom.style.backgroundColor = "#303A52";
    }
});