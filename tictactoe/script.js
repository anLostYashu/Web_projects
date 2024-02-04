const buttons = document.querySelectorAll(".cell-buttons");
const gameHeading = document.getElementById("winner_heading");

let emptySpaces = 9;
const PLAYER = "O";
const BOT = "X";
let winner = "";

if (Math.floor(Math.random() * 2) === 0) {
    botTurn();
}

async function playerTurn(val) {
    buttons[val].textContent = PLAYER;
    buttons[val].classList.add("player-cell");
    buttons[val].setAttribute("disabled", "");
    emptySpaces--;

    findWinner();
    await botTurn();
}

async function botTurn() {
    if (emptySpaces !== 0) {
        let random;

        do {
            random = Math.floor(Math.random() * 9);

        } while (buttons[random].hasAttribute("disabled"));

        buttons[random].textContent = BOT;
        buttons[random].classList.add("bot-cell");
        buttons[random].setAttribute("disabled", "");
        emptySpaces--;

        findWinner();
    }
}

function findWinner() {
    //VERTICAL CASES
    for (let i = 0; i <= 2; i++) {
        if (buttons[i].textContent === buttons[i + 3].textContent && buttons[i].textContent === buttons[i + 6].textContent) {
            winner = buttons[i].textContent;
        }
    }

    //HORIZONTAL CASES
    for (let i = 0; i <= 6; i += 3) {
        if (buttons[i].textContent === buttons[i + 1].textContent && buttons[i].textContent === buttons[i + 2].textContent) {
            winner = buttons[i].textContent;
        }
    }

    //DIAGONAL CASES
    if (buttons[0].textContent === buttons[4].textContent && buttons[0].textContent === buttons[8].textContent) {
        winner = buttons[0].textContent;
    }

    if (buttons[2].textContent === buttons[4].textContent && buttons[2].textContent === buttons[6].textContent) {
        winner = buttons[2].textContent;
    }

    
    if (winner === BOT || winner === PLAYER || emptySpaces === 0) {
        displayWinner();
    }
}

function displayWinner() {
    if (winner === PLAYER) {
        gameHeading.textContent = "You Win!";
        gameHeading.style.color = "green";
    }
    else if (winner === BOT) {
        gameHeading.textContent = "You Lose!";
        gameHeading.style.color = "red";
    }
    else if (emptySpaces === 0 && winner === "") {
        gameHeading.textContent = "Draw!";
        gameHeading.style.color = "grey";
    }

    buttons.forEach(button => {
        button.setAttribute("disabled", "");
        button.style.cursor = "not-allowed";
    })

    document.getElementById("alert_message").style.display = "block";
}