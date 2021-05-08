// assignment code
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var special = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// prompts and confirms
function generatePassword() {
  var confirmLength = prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  if (confirmLength === null || confirmLength < 8 || confirmLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }
var passwordPool = [];
  var confirmLowercase = confirm("Would you like to use lowercase characters?");
  if (confirmLowercase === true) { 
    for (i = 0; i < lowercase.length; ++i) {
      passwordPool.push(lowercase[i]);
    }
  }
  var confirmUppercase = confirm("Would you like to use uppercase characters?");
  if (confirmUppercase === true) {
    for (i = 0; i < uppercase.length; ++i) {
      passwordPool.push(uppercase[i]);
    }
  }
  var confirmSpecial = confirm("Would you like to use special characters?");
  if (confirmSpecial === true) {
    for (i = 0; i < special.length; ++i) {
      passwordPool.push(special[i]);
    }
  }
  var confirmNumbers = confirm("Would you like to use numbers?");
  if (confirmNumbers === true) {
    for (i = 0; i < numbers.length; ++i) {
      passwordPool.push(numbers[i]);
    }
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