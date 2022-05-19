// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Arrays for value keys
var lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharList =[" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "<", "+", ",", "-", ".", "/", "\\", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Declare random number function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }

// Declare function to prompt questions and generate password
function generatePassword() {
var minReq = 0; // This is used to track the amount of password requirements
var password = ""

var length = prompt("How many characters long do you want your password to be? (Min 8, Max 127)");

if (length < 8 || length > 127){ //Check password length
  alert("Please make sure the length of your password meets the requirements!");
  return;
}

else if (isNaN(length)) { //Check password length type
  alert("Please make sure the length of your password is a numeric value!");
  return;
}

while (lowerCase != "YES" && lowerCase != "NO") { //Validates input
  var lowerCase = prompt("Would you like lower case characters? (Type \"Yes or No\")");
  lowerCase = lowerCase.toUpperCase();
  if (lowerCase != "YES" && lowerCase != "NO") {
    alert("Please enter a valid input");
  }
}

while (upperCase != "YES" && upperCase != "NO") {
  var upperCase = prompt("Would you like upper case characters? (Type \"Yes or No\")");
  upperCase = upperCase.toUpperCase();
  if (upperCase != "YES" && upperCase != "NO") {
    alert("Please enter a valid input");
  }
}

while (number != "YES" && number != "NO") {
var number = prompt("Would you like number characters? (Type \"Yesor No\")");
  number = number.toUpperCase();
  if (number != "YES" && number != "NO") {
    alert("Please enter a valid input");
  }
}

while (special != "YES" && special != "NO") {
var special = prompt("Would you like special characters? (Type \"Yes or No\")");
  special = special.toUpperCase();
  if (special != "YES" && special != "NO") {
    alert("Please enter a valid input");
  }
}

//Create a master array to generate characters based on selected criteria
var passwordCharArray = [];
if (lowerCase == "YES"){
  passwordCharArray = passwordCharArray.concat(lowerCaseAlphabet);
  minReq ++;
  }

if (upperCase == "YES"){
  passwordCharArray = passwordCharArray.concat(upperCaseAlphabet);
  minReq ++;
  }

if (number == "YES"){
  passwordCharArray = passwordCharArray.concat(numberList);
  minReq ++;
  }

if (special == "YES"){
  passwordCharArray = passwordCharArray.concat(specialCharList);
  minReq ++;
  }

//Check minReq to make sure at least on requiremnt is selected
if (minReq == 0){
  alert("Please make sure you select at least one requirement!");
  return;
}

//Generate password given selected criteria
else {
  for (var i = 0; i < length; i++) {
    randomNumber = getRandomInt(passwordCharArray.length);
    password +=passwordCharArray[randomNumber];
    }
    return password;
  writePassword;
}
}






