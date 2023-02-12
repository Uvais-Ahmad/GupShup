const socket = io(); //This only single line connect client to server. and this "socket" instance use to listen and fire event
//Now some event fire and some fired event listen here

socket.on('message' , msg => console.log(msg))