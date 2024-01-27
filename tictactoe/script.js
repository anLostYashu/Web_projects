function playerTurn(val){
    let button = document.getElementById(`cell_${val}`);

    button.style.color = "green";
    button.textContent = "O";
    button.setAttribute = "disabled";
    button.className += " game-cell-notallowed";

    botTurn();
}

function botTurn(){
    let random = 0;

    while(document.getElementById(""))

    button.style.color = "red";
    button.textContent = "X";
    button.setAttribute = "disabled";
    button.className += " game-cell-notallowed";
}

