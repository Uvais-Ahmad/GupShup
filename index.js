const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const port = 8000;

const server = http.createServer(app);  
const io = socketio(server);    //to initialize socket lib it require server instance

app.use(express.static('assets'));
//Ejs setup
app.set('view engine','ejs');
app.set('views','./views')

io.on('connection' , (socket)=>{
    // console.log("New Connection join",socket.id);

    //Now we fire first event , Welcome current user
    // socket.emit(eventName , pass data )
    socket.emit('message',"Welcome to Gupshup ,RealTime Chat app")

    //Broadcast when a user connect to all client except sender
    socket.broadcast.emit('message','A user has joined the chat');

    //Listen when client disconnect
    socket.on('disconnect',()=>{
        //broadcast to all client include sender
        io.emit('message','A user has left the chat')
    });

    //Listen the chatMessage from client
    socket.on('chatMessage',(msg)=>{
        
        io.emit('message',msg);     //Broadcast client msg to all client
    })
})



app.use('/', require('./routers'));

server.listen(port , (err)=>{
    if(err){
        console.log("Error occur while running server on port ",port);
    }
    console.log("GupShup server running on ",port);
})