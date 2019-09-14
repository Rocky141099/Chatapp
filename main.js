let database = firebase.database();

database.ref('/chat').on('value', function(data) {
    console.log(data.val())
});

const login = () => {

    let uname = document.getElementById("uname").value
    let mail = document.getElementById("mail").value

    if(uname==="Rocky" && mail==="xyz@gmail.com"){
        console.log("Login Succesful")
        window.open("file:///C:/Users/Raghav/Desktop/Summer%20Training/New%20folder/Me/Chatapp/Chatapp2.html", "_self")
    }

    else if(uname==="Raghav" && mail==="abc@gmail.com"){
        console.log("Login Succesful")
        window.open("file:///C:/Users/Raghav/Desktop/Summer%20Training/New%20folder/Me/Chatapp/Chatapp.html", "_self")
    }
    else{
        console.log("Login Failed")
        alert("Invalid Username or Email");
    }
}

const writeindatabase1 = (messageobject) => {
    database.ref("/chat").push(messageobject);
}

const readfromdatabase = () => {
    database.ref('/chat').on('value',function(data){
        let messages = data.val();
        $("#display1").empty();
        for(messagekey in messages){
            //console.log("messagekey",messagekey)
            //console.log("message",messages[messagekey])
            let message = messages[messagekey];
            
            $("#display1").append(`<p>${message.user}: ${message.message} </p>`)
        }
    });
}

const readfromdatabase1 = () => {
    
    database.ref('/chat').on('value',function(data){
        let messages = data.val();
        $("#display").empty();
        for(messagekey in messages){
            let message = messages[messagekey];
            $("#display").append(`<p>${message.user}: ${message.message}</p>`) 
        }
    });
}

const send = () => {
    let message = document.getElementById("messagebox").value

    let messageobject = {
        message: message,
        user: "Raghav",
        EMAIL: "abc@gmail.com"
    }
    
    writeindatabase1(messageobject);
    $("#messagebox").val("");
}

const send1 = () => {
    let message1 = document.getElementById("messagebox1").value

    let messageobject1 = {
        message: message1,
        user: "Rocky",
        EMAIL: "xyz@gmail.com"
    }
    writeindatabase1(messageobject1);
    $("#messagebox1").val("");
}

readfromdatabase();
readfromdatabase1();
