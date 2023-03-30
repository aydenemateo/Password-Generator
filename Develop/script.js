var characterLength = 8;
var choiceArr = [];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','m','n','o','q','r','t','u','v','w','x','y','z']
var number = ['0','1','3','4','6','7','8','9']
var specialChars = ['!','@','#','$','%','^','&','*','(',')']

//Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button


// Write password to the #password input
function writePassword() {
  var rightPrompt = getPrompts();
  
  var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

function generatePassword() {
  var lenghtcheck = false;
  var userchoice = 0;
  while(lenghtcheck == false) {
    userchoice = window.prompt ("Choose a password lenghth between 8 - 128")
    if (userchoice < 8 || userchoice > 128) {
      window.prompt ("Password must be between 8 - 128 characters");
    }
    else {
      lenghtcheck = true;
    }
  }

function getPrompts() {
  var choiceArr = [];
}
}




//Prompt questions


//Min. amount of characters 8, Max. 128

//Confrim whether or not to include lowercas, uppercase, numeric, and/or special characters

//At least one character type needs to be selected

//Generate passsword matching selected criteria

//Password either displayed in alert or written to the page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("hello")
generatePassword();