// Assignment code here
var charactersLength = 8;
var array = [];
var specialCharacterArray = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=', ',','<','.','>','/','?',';',':','[',']','{','}',];
var lowerCaseArray = ['a','z','q','w','s','x','e','d','c','r','f','v','t','g','b','y','h','n','u','j','m','i','k','o','l','p',];
var upperCaseArray = ['A','Z','Q','W','S','X','E','D','C','R','F','V','T','G','B','Y','H','N','U','J','M','I','K','O','L','P',];
var numberArray =['1','2','3','4','5','6','7','8','9','0',];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); ///returns true or false password
  var passwordText = document.querySelector("#password");
  
  
  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  
  } else {
    passwordText.value = "";

  }
 
}

function generatePassword() {
  // I would generatePassword based on Prompts
var password = " ";
for(var i = 0; i < charactersLength; i++) {
  var randomIndex = Math.floor(Math.random() * array.length);
  password = password + array[randomIndex];
}
return password;
}

