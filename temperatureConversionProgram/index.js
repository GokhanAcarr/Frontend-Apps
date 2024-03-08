const textBox = document.getElementById("input");
const toFahrenheit = document.getElementById("celsiusCheckbox");
const toCelsius = document.getElementById("fahrenheitCheckbox");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheit.checked && toCelsius.checked) {
        result.textContent = "You can't choose both!";
    }
    else if (isNaN(textBox.value)) {
        result.textContent = "You can enter numbers only!";
    }
    else if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = "Result: " + temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = "Result: " + temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}

document.getElementById("submit").addEventListener("click", convert);
