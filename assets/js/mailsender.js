const sendMail = require('sendmail')();


function mailFunction() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    console.log(message)
    alert(message)
}