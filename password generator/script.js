const incLower = document.getElementById("lowercase_box");
const incUpper = document.getElementById("uppercase_box");
const incSymbols = document.getElementById("symbols_box");
const incNums = document.getElementById("numbers_box");
const output = document.getElementById("output");
const generate = document.getElementById("generate_button");
const copy = document.getElementById("copyButton");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*_";
const numbers = "0123456789";

let password = [];

generate.onclick = function () {
  let allChars = [];
  const size = 12;

  if (incLower.checked) {
    allChars.push(...lowercase);
  }
  if (incUpper.checked) {
    allChars.push(...uppercase);
  }
  if (incSymbols.checked) {
    allChars.push(...symbols);
  }
  if (incNums.checked) {
    allChars.push(...numbers);
  }
  if (allChars === 0) {
    return "select at least 1 character set.";
  }

  for (let i = 0; i < size; i++) {
    let random = Math.floor(Math.random() * allChars.length);

    password.push(allChars[random]);
  }

  password = password.join("");
  output.textContent = password;

  copy.style.display = "block";
};

copy.onclick = function () {
  navigator.clipboard.writeText(password);
};
