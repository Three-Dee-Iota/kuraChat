const messageBar = document.querySelector('#typing-bar');
const sendButton = document.querySelector('.send-icon-container');

const ws = new WebSocket("ws://localhost:3000/", "msg")

ws.onerror = (event) => {
    console.log(event)
}

ws.onopen = (event) => {
    ws.send("Check message")
}

ws.onmessage = (event) => {
    console.log(event.data)
}

// Sends message if messageBar is in focus and <Enter> is pressed
messageBar.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && messageBar.value != '') {

        ws.send(messageBar.value);

        messageBar.value = '';
    }
});

// Sends message if sendButton is clicked
sendButton.addEventListener('click', () => {
    if (messageBar.value != '') {

        ws.send(messageBar.value);

        messageBar.value = '';
    }
}); 
