const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (msg) => {
        console.log(`Message received: ${msg}`);
        io.emit('message', msg); // Broadcast message
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const PORT = 3500;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${3500}`);
});
