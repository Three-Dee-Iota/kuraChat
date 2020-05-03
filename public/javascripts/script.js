/// Getting the template for the messages
const messageCardTemplate = document.querySelector("#mc-index").content;
/// Container where all of users messages are stored
const userMessages = document.querySelector("#cards-container");

console.log("ja sam cigan");

/// Adding a new message to the scrollable container
function newMessage() {
    const newCard = document.importNode(messageCardTemplate, true);
    userMessages.appendChild(newCard); 
}
/// ****** POP-UP-STYLE ANIMATION ****** 

/// ************************* TEST ZONE **********************
for(let i = 1; i < 20; i++) {
    newMessage();
}

