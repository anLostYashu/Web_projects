let emptySpace = 9;
let winner;

//assigning buttons to array
let buttons = [];
for (let i = 1; i <= 9; i++) {
    buttons.push(document.getElementById(`cell_${i}`));
}

//for random first move
let random = Math.floor(Math.random() * 2);
if (random == 1) {
    botTurn();
}

function playerTurn(val) {

    let button = document.getElementById(`cell_${val}`);

    button.style.color = "green";
    button.textContent = "O";
    button.setAttribute("disabled", "");
    if (button.className !== "game-cell game-cell-notallowed") {
        button.className = "game-cell game-cell-notallowed";
    }
    emptySpace--;

    checkWin();
    botTurn();
}

function botTurn() {

    if (emptySpace !== 0) {
        let random = null;
        let button = null;

        do {
            random = Math.floor(Math.random() * 9) + 1;
            button = document.getElementById(`cell_${random}`);

        } while (button.hasAttribute("disabled"));

        button.style.color = "red";
        button.textContent = "X";
        button.setAttribute("disabled", "");
        if (button.className !== "game-cell game-cell-notallowed") {
            button.className = "game-cell game-cell-notallowed";
        }
        emptySpace--;
    }

    checkWin();
}

function checkWin() {

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


    console.log(emptySpace, winner);
    if (winner === "X" || winner === "O") {
        gameOver();
    }

    else if (emptySpace === 0 && winner === "") {
        gameOver();
    }
}

function gameOver() {

    const heading = document.getElementById("winner-heading");

    if (winner === "O") {
        heading.style.color = "green";
        heading.textContent = "You Win";
    }

    else if (winner === "X") {
        heading.style.color = "red";
        heading.textContent = "You Lose";
    }

    else {
        heading.style.color = "white";
        heading.textContent = "Draw";
    }

    buttons.forEach(button => {
        button.setAttribute("disabled", "");
    })
}