var generatePassword = function(characterPool, pwdLength) {
  // Your generate password function goes here.
  var password= "";
  for(let i = 0; i < pwdLength; i ++) {
    
  }
}

// Returns Number if all digits of the String are numeric. Else returns false.
var validateNumber = function(string) {
  for (let i = 0; i < string.length; i ++) {
    const NUMBERS = ['0','1','2','3','4','5','6','7','8','9'];
    if(NUMBERS.includes(string[i])) {
      if (i + 1 == string.length) {
        return parseInt(string);
      }
      continue;
    } else {
      return false;
    }
  }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

// Write password to the #password input
function writePassword() {
  var pwdLength = validateNumber(prompt("Enter the password length:\nMin: 8, Max: 128", 8));
  
  if(!pwdLength) {
    console.log(pwdLength)
    return; 
  }
  
  if (pwdLength === null) {
    return;
  }


  // Returns if  user does not enter a NUMBER between 8 and 128
  if (pwdLength < 8 || pwdLength > 128 || Number.isNaN(pwdLength)) {
    alert("Try again");
    console.log(pwdLength);
    return null;
  }

  var includeLower = window.confirm("Click okay to use lowercase characters.");
  var includeUpper = window.confirm("Click okay to use uppercase characters.");
  var includeNumber = window.confirm("Click okay to use numberic characters.");
  var includeSpecial = window.confirm("Click okay to use special characters.");

  var characterPool = [];

  if(includeLower) {
    characterPool=characterPool.concat(LETTERS);
  }
  if(includeUpper) {
    characterPool=characterPool.concat(LETTERS.toUpperCase());
  }
  if(includeNumber) {
    const NUMBERS = ['0','1','2','3','4','5','6','7','8','9'];
    characterPool=characterPool,concat(NUMBERS);
  }
  if(includeSpecial) {
    const specialCharacters = ["!@#$%^&*()'/?><+=".split("")];
    characterPool = characterPool.concat(specialCharacters);
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Prompt user for password length
// Verify Password length
// Confirm lower case
// Confirm upper case
// Confirm numeric characters
// Confirm special characters

// Implement generatePassword() using those parameters
  // if lowerCase
  // if upperCase
  // if numeric
  // specialCharacters
  // return password
