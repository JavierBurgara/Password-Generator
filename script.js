// Assignment code here
var charactersLength ;
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
    array = []
  
  } else {
    passwordText.value = "";
    
  }
  array = [];
  charactersLength = null;
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

function getPrompts() {

  charactersLength = (prompt(" How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(charactersLength)  || charactersLength < 8 || charactersLength > 128) {
    alert("characters length has to be a number, 8 - 128 dights. Please try again.");
    return false;
  }

  if (confirm("would you like lowercase letters in your password")) {
    array = array.concat(lowerCaseArray);
    console.log("lowerCasearray  concat.array: "+ array);
  }

  if (confirm("would you like uppercase letters in your password")) {
    array = array.concat(upperCaseArray);
    console.log("upperCasearray  concat.array: "+ array);
  }

  if (confirm("would you like numbers in your password")) {
    array = array.concat(numberArray);
    console.log("numberarray  concat.array: "+ array);
  }

  if (confirm("would you like special characters in your password")) {
    array = array.concat(specialCharacterArray);
    console.log("specialCharactersarray  concat.array: "+ array);
  }
  return true;
}