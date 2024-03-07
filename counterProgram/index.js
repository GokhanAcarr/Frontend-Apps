let increaseButton = document.getElementById("increaseButton");
let decreaseButton = document.getElementById("decreaseButton");
let resetButton = document.getElementById("resetButton");
let counter = document.getElementById("counter");
let count = 0;

increaseButton.onclick = function () {
    count++;
    counter.textContent = count;
}
decreaseButton.onclick = function () {
    count--;
    counter.textContent = count;
}
resetButton.onclick = function () {
    count = 0;
    counter.textContent = count;
}