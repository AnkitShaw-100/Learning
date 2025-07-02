const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.sendFile("/public/index.html");
});

io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    socket.on('user message', (message) => {
        console.log('Received message : ' + message);
        io.emit('message', {
            id: socket.id,
            text: message
        });
    });


    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});