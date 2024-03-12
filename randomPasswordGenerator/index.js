function toggleActive(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.toggle("active");
}

function generatePassword() {
    var resultDiv = document.getElementById("result");
    var password = "";

    var lowerCaseButton = document.getElementById("lowerCase");
    if (lowerCaseButton.classList.contains("active")) {
        password += "abcdefghijklmnopqrstuvwxyz";
    }

    var upperCaseButton = document.getElementById("upperCase");
    if (upperCaseButton.classList.contains("active")) {
        password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    var numberCaseButton = document.getElementById("numberCase");
    if (numberCaseButton.classList.contains("active")) {
        password += "0123456789";
    }

    var specialCaseButton = document.getElementById("specialCase");
    if (specialCaseButton.classList.contains("active")) {
        password += "!@#$%^&*()_+";
    }

    if (password === "") {
        resultDiv.textContent = "Please select at least one option!";
        return;
    }

    password = shuffle(password);

    var digitNumber = document.getElementById("digitNumber").value;
    if (digitNumber > 16) {
        digitNumber = 16;
    }
    var generatedPassword = password.slice(0, 16);

    resultDiv.textContent = generatedPassword;
}

function shuffle(str) {
    var array = str.split('');
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join('');
}

document.getElementById("lowerCase").addEventListener("click", function () {
    toggleActive("lowerCase");
});

document.getElementById("upperCase").addEventListener("click", function () {
    toggleActive("upperCase");
});

document.getElementById("numberCase").addEventListener("click", function () {
    toggleActive("numberCase");
});

document.getElementById("specialCase").addEventListener("click", function () {
    toggleActive("specialCase");
});

document.getElementById("generator").addEventListener("click", function () {
    generatePassword();
});
