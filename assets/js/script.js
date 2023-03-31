var characterLength = 8;
var choiceArr = [];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '3', '4', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var rightPrompt = getPrompts();
  if (rightPrompt) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = (Math.floor(Math.random() * choiceArr.length));
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("Choose a password length between 8 - 128"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be between 8 and 128");
    return false;
  }
  if (confirm("Would you like to include lowercase characters?")) {
    choiceArr = choiceArr.concat(lowercase);
  }
  if (confirm("Would you like to include uppercase characters?")) {
    choiceArr = choiceArr.concat(uppercase);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceArr = choiceArr.concat(numbers);
  }
  if (confirm("Would you like to include special characters?")) {
    choiceArr = choiceArr.concat(specialChars);
  }
  return true;
}