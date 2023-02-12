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
    console.log("New Connection join",socket.id);
})



app.use('/', require('./routers'));

server.listen(port , (err)=>{
    if(err){
        console.log("Error occur while running server on port ",port);
    }
    console.log("GupShup server running on ",port);
})