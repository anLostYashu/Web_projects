const display = document.getElementById("display");

function appendValue(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}

function allClear(){
    display.value = "";
}