//checkboxes
const incLower = document.getElementById("lowercase_box");
const incUpper = document.getElementById("uppercase_box");
const incSymbols = document.getElementById("symbols_box");
const incNums = document.getElementById("numbers_box");

//output and buttons
const outputField = document.getElementById("output");
const generateButton = document.getElementById("generate_button");
const copyButton = document.getElementById("copyButton");

//character sets
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*_";
const numbers = "0123456789";


//global vars
let password = [];

generateButton.onclick = function () {
    password = [];

    let allowedChars = [];
    const size = 12;

    if(incLower.checked){
        allowedChars.push(...lowercase);
    }
    if (incUpper.checked) {
        allowedChars.push(...uppercase);
    }
    if (incSymbols.checked) {
        allowedChars.push(...symbols);
    }
    if (incNums.checked) {
        allowedChars.push(...numbers);
    }
    if(allowedChars === 0) {
        return 'no character sets selected!';
    }

    for(let i = 0; i < size; i++) {
        const rand = Math.floor(Math.random() * allowedChars.length);

        password.push(allowedChars[rand]);
    }

    password = password.join("");

    outputField.textContent = password;
    copyButton.style.display = "block";
};

copyButton.onclick = function () {
    navigator.clipboard.writeText(password);
    window.alert("Password has been copied!");
};
