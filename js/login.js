
var logMe = function () {
    var user = document.getElementById("username");
    var pass = document.getElementById("password");

    var userValue = "test";
    var userPass = "test";

    if(user.value == userValue && pass.value == userPass) {

        alert("You are logged" + "\n " + userValue);
         window.open("index.html");

    } else {

        alert("Incorrect username or password");
         window.location.href ="login.html";
    }

};

