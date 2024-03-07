let label = document.getElementById("dice");

document.getElementById("rollButton").onclick = function () {
    label.textContent = Math.floor(Math.random() * 6) + 1;
}