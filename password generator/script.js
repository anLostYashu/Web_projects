const incLower = document.getElementById("lowercase_box");
const incUpper = document.getElementById("uppercase_box");
const incSymbols = document.getElementById("symbols_box");
const incNums = document.getElementById("numbers_box");
const output = document.getElementById("output");
const generate = document.getElementById("generate_button");

function generatePassword(){
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbols = "!@#$%^&*_"
    const numbers = "0123456789"

    let allChars = [];

    if(incLower.checked){
        allChars.push(lowercase);
    }
    if(incUpper.checked){
        allChars.push(uppercase);
    }
    if(incSymbols.checked)
    {
        allChars.push(symbols);
    }
    if(incNums.checked){
        allChars.push(numbers);
    }
    if(allChars === 0){
        return 'select at least 1 character set.'
    }

    console.log(allChars);
}