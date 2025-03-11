import {WebSocketServer} from "ws"

const wss = new WebSocketServer({port:8000})

let userCount = 0;
wss.on("connection",(socket)=>{
    userCount +=1;
    console.log("user connected "+userCount);

    socket.on("message",(msg)=>{
        console.log("message received :"+msg.toString())
    })
})



