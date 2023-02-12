const socket = io(); //This only single line connect client to server. and this "socket" instance use to listen and fire event
//Now some event fire and some fired event listen here

const chatCont = document.getElementById('right');
socket.on('message' , msg => {
    console.log('Client Msg : ',msg);
    outputMessage(msg);

    //scroll Down auto
    chatCont.scrollTop = chatCont.scrollHeight;
})

const chatForm = document.getElementById('chat_form');
chatForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let msg = e.target.elements.msg.value;  //Get the text msg
       
    socket.emit('chatMessage',msg); //fire event, send msg to server 

    e.target.elements.msg.value = '';   //clear the input
    e.target.elements.msg.focus();
    
})

function outputMessage(msg){
    //select message container which is aside#right
    const div = document.createElement('div');
    const chatMsg = `<div class="border w-75 ms-auto rounded p-3 pt-1 bg-info mt-2 mx-4" id="ChatMessage">
                        <p id="name" class="d-flex justify-content-between">~Name <span>9:00 AM</span></p>
                        <p>${msg}</p>
                    </div>`;
    div.innerHTML = chatMsg;
    document.getElementById('right').appendChild(div);  //appendChild only add element which create by .createElement()
}