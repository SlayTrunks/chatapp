"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
let userCount = 0;
wss.on("connection", (socket) => {
    userCount += 1;
    console.log("user connected " + userCount);
    socket.on("message", (msg) => {
        console.log("message received :" + msg.toString());
    });
});
