// Assignment code here
var charactersLength = 8;
var array = [];
var specialCharacterArray = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=', ',','<','.','>','/','?',';',':','[',']','{','}',];
var lowerCaseArray = ['a','z','q','w','s','x','e','d','c','r','f','v','t','g','b','y','h','n','u','j','m','i','k','o','l','p',];
var upperCaseArray = ['A','Z','Q','W','S','X','E','D','C','R','F','V','T','G','B','Y','H','N','U','J','M','I','K','O','L','P',];
var numberArray =['1','2','3','4','5','6','7','8','9','0',];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);