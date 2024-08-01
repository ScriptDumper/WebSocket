const WebSocket = require('ws');

const PORT = 3000;

const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server is running on ws://localhost:${PORT}`);

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.send('Welcome to the WebSocket server!');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);

        ws.send(`Server: You said "${message}"`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
