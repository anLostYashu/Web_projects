const heading = document.getElementById("counter-head");
const decrement = document.getElementById("dec-button");
const reset = document.getElementById("res-button");
const increment = document.getElementById("inc-button");

decrement.onclick = function() {
    heading.textContent = Number(heading.textContent) - 1;
}

reset.onclick = function() {
    heading.textContent = 0;
}

increment.onclick = function() {
    
}