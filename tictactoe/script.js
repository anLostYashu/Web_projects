let emptySpace = 9;
let winner;

let random = Math.floor(Math.random() * 2);
if(random == 1){
    botTurn();
}

function playerTurn(val){
    let button = document.getElementById(`cell_${val}`);

    button.style.color = "green";
    button.textContent = "O";
    button.setAttribute("disabled", "");
    if (button.className !== "game_cell game-cell-notallowed"){
        button.className = "game_cell game-cell-notallowed";
    }
    emptySpace--;

    checkWin();
    botTurn();
}

function botTurn(){

    if(emptySpace !== 0){
        let random = null;
        let button = null;

        do {
            random = Math.floor(Math.random() * 9) + 1;
            button = document.getElementById(`cell_${random}`);

        } while (button.hasAttribute("disabled"));

        button.style.color = "red";
        button.textContent = "X";
        button.setAttribute("disabled", "");
        if (button.className !== "game_cell game-cell-notallowed") {
            button.className = "game_cell game-cell-notallowed";
        }
        emptySpace--;
    }

    checkWin();
}

function checkWin(){
    let arr = [];

    for(let i = 1; i <= 9; i++){
        arr.push(document.getElementById(`cell_${i}`));
    }

    //VERTICAL CASES

    //column 1
    if (arr[0].textContent === arr[3].textContent && arr[0].textContent === arr[6].textContent){
        winner = arr[0].textContent;
    }
    //column 2
    if (arr[1].textContent === arr[4].textContent && arr[1].textContent === arr[7].textContent) {
        winner = arr[1].textContent;
    }
    //column 3
    if (arr[2].textContent === arr[5].textContent && arr[2].textContent === arr[8].textContent) {
        winner = arr[2].textContent;
    }

    //HORIZONTAL CASES

    //column 1
    if (arr[0].textContent === arr[1].textContent && arr[0].textContent === arr[2].textContent) {
        winner = arr[0].textContent;
    }
    //column 2
    else if (arr[3].textContent === arr[4].textContent && arr[3].textContent === arr[5].textContent) {
        winner = arr[3].textContent;
    }
    //column 3
    else if (arr[6].textContent === arr[7].textContent && arr[6].textContent === arr[8].textContent) {
        winner = arr[6].textContent;
    }

    //DIAGONAL CASES
    else if (arr[0].textContent === arr[4].textContent && arr[0].textContent === arr[8].textContent) {
        winner = arr[0].textContent;
    }
    //column 2
    else if (arr[2].textContent === arr[4].textContent && arr[2].textContent === arr[6].textContent) {
        winner = arr[2].textContent;
    }

    gameOver(arr);
}

function gameOver(arr){
    const heading = document.getElementById("winner-heading");

    if(winner === "O"){
        heading.style.color = "green";
        heading.textContent = "You Win";
    }

    if (winner === "X") {
        heading.style.color = "red";
        heading.textContent = "You Lose";
    }

    arr.forEach(button => {
        button.setAttribute("disabled", "");
    })
}

