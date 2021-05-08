// assignment code
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '0123456789';

var passwordText = [];

function generatePassword() {
  var confirmLength = prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  if (confirmLength === null || confirmLength < 8 || confirmLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }
}

// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);