let username;
let password;

document.getElementById("submitButton").onclick = function () {
    username = document.getElementById("usernameInput").value;
    password = document.getElementById("passwordInput").value;

    console.log(username + " " + password);
}

