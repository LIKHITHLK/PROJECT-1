$(function () {
    $('#header').load("../../common/header.html");
    $('#footer').load("../../common/footer.html")
})

function checkLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");

    if (email === "likith@gmail.com" && password === "123456") {
        alert("Login Successfull");
    } else {
        alert("Invalid Email or Password")
    }
    loginMessage.style.display = "block";
}


