const io = require('socket.io-client');
const url = "http://localhost:3000";
const name = 'Reverse Bot';

function reverseString(str) {
    return str.split("").reverse().join("");
}

let  socket = io(url, {
    reconnection: true
});
socket.on('disconnect', () => {
    console.log(this.socket.id);
});
socket.on('connect', () => {
    console.log('Socket connected');
    socket.emit('users', name);
});
socket.on('connect_error', i => {
    console.log(i);
});

  