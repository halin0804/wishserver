let express = require("express");
let app = express();
let WebSocket = require('ws'); //웹소켓모듈 추가

app.use(express.static('public'));
app.get("/", function(req, res){
    res.sendfile("index.html");
});

const ws = new WebSocket.Server({ port: 8000 });

wss.on('connection', (ws) => {
    console.log('A client connected.');

    // When a message is received from the client
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);

        // Send the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('A client disconnected.');
    });
});


app.listen(3000, function(){
    console.log("App is running on port 3000");
});
