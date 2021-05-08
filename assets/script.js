// assignment code
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var special = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numbers = [0,1,2,3,4,5,6,7,8,9];


// add prompt and confirms to generatePassword function
function generatePassword() {

// if user clicks cancel on first prompt
  var confirmLength = prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  if (confirmLength === null || isNaN(confirmLength)) {
    alert("Please press Generate Password to try again.");
    return location.reload();
  }
// if user chooses a number out of range
  while (confirmLength < 8 || confirmLength > 128) {
    alert("Please enter a number between 8 and 128.");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    if (confirmLength === null || isNaN(confirmLength)) {
      alert("Please press Generate Password to try again.");
      return location.reload();
    }
  }
  
// add empty array for password choices
  var passwordPool = [];

  var confirmLowercase = confirm("Would you like to use lowercase characters?");
  if (confirmLowercase) {
    passwordPool = passwordPool.concat(lowercase)
}

  var confirmUppercase = confirm("Would you like to use uppercase characters?");
  if (confirmUppercase) {
    passwordPool = passwordPool.concat(uppercase)
}

  var confirmSpecial = confirm("Would you like to use special characters?");
  if (confirmSpecial) {
    passwordPool = passwordPool.concat(special)
}

  var confirmNumbers = confirm("Would you like to use numbers?");
  if (confirmNumbers) {
    passwordPool = passwordPool.concat(numbers)
}

// if user does not choose any character choices
  if (!confirmLowercase && !confirmUppercase && !confirmSpecial && !confirmNumbers) {
    alert("Your password must contain at least one type of character!");
    return location.reload();
}
// add empty string for random password
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordPool[Math.floor(Math.random() * passwordPool.length)];
  }
  return randomPassword;
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