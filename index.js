const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('assets'));

//Ejs setup
app.set('view engine','ejs');
app.set('views','./views')

// const socketio = require('socket.io');

app.use('/', require('./routers'));

// const io = socketio(app);
// io.on('connection' , (socket)=>{
//     console.log("New Connection join ",socket.id);
// })

app.listen(port , (err)=>{
    if(err){
        console.log("Error occur while running server on port ",port);
    }
    console.log("GupShup server running on ",port);
})