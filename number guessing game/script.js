const heading = document.getElementById("status");
const input = document.getElementById("numInput");
const button = document.getElementById("subButton");

let random = Math.floor((Math.random() * 3)) + 1;

button.onclick = function() {
    if (input.value == random) {
        heading.textContent = "Correct";
    }
    else {
        heading.textContent = "Incorrect";
    }
}