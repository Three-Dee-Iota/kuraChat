const messageBar = document.querySelector('#typing-bar');
const sendButton = document.querySelector('.send-icon-container');

async function sendMessage (msg) {
    // Sends a post request to the URL and waits for a response
    const res = await axios.post("http://192.168.0.19:3000/message", {message: msg})
    console.log("odg", res);
}

// Sends message if messageBar is in focus and <Enter> is pressed
messageBar.addEventListener('keypress', event => {
    if (event.keyCode === 13 && messageBar.value != '') {

        sendMessage(messageBar.value);

        messageBar.value = '';
    }
});

// Sends message if sendButton is clicked
sendButton.addEventListener('click', () => {
    if (messageBar.value != '') {

        sendMessage(messageBar.value);

        messageBar.value = '';
    }
}); 