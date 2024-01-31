const options = ["rock", "paper", "scissors"];

const displayPlayerMove = document.getElementById("span-player");
const displayBotMove = document.getElementById("span-bot");
const displayPlayerScore = document.getElementById("para-player-score");
const displayBotScore = document.getElementById("para-bot-score");
const gameResult = document.getElementById("game-end-heading");

let playerScore = 0;
let botScore = 0;

function game(val) {

    let playerMove = val;
    displayPlayerMove.textContent = `Player Move: ${playerMove}`;

    let botMove = options[Math.floor(Math.random() * 3)];
    displayBotMove.textContent = `Bot Move: ${botMove}`;

    //Check Win
    switch (playerMove) {
        case "rock":
            if(botMove === "scissors") {
                playerWin();
            }
            else if (botMove === "paper") {
                BotWin();
            }
            else {
                draw();
            }

            break;

        case "paper":
            if (botMove === "rock") {
                playerWin();
            }
            else if (botMove === "scissors") {
                BotWin();
            }
            else {
                draw();
            }

            break;

        case "scissors":
            if (botMove === "paper") {
                playerWin();
            }
            else if (botMove === "rock") {
                BotWin();
            }
            else {
                draw();
            }

            break;
    }

    displayPlayerScore.textContent = playerScore;
    displayBotScore.textContent = botScore;
}

function playerWin() {
    playerScore++;
    gameResult.textContent = "You Win!";
    gameResult.style.color = "green";
}

function BotWin() {
    botScore++;
    gameResult.textContent = "You Lose!";
    gameResult.style.color = "red";
}

function draw() {
    gameResult.textContent = "Draw!";
    gameResult.style.color = "grey";
}