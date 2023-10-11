var generatePassword = function(characterPool, pwdLength) {
  // Your generate password function goes here.
  console.log(characterPool);
  var password= "";
  for(let i = 0; i < pwdLength; i ++) {
    password += characterPool[Math.floor(Math.random()* characterPool.length)];
  }
  return password;
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

const LETTERS = "abcdefghijklmnopqrstuvwxyz"

// Write password to the #password input
function writePassword() {
  var pwdLength = validateNumber(prompt("Enter the password length:\nMin: 8, Max: 128", 8));
  
  // If validateNumber returns false, alert invalid entry.
  if(!pwdLength) {
    console.log(pwdLength);
    alert("Invalid entry. Try again.");
    return;
  }
    // If user hits cancel, return without alert.
  if (pwdLength === null) {
    return;
  }


  // Returns if  user does not enter a NUMBER between 8 and 128
  if (pwdLength < 8 || pwdLength > 128 || Number.isNaN(pwdLength)) {
    alert("Invalid entry. Try again.");
    return;
  }

  var includeLower = window.confirm("Click Ok to use lowercase characters.");
  var includeUpper = window.confirm("Click Ok to use uppercase characters.");
  var includeNumber = window.confirm("Click Ok to use numeric characters.");
  var includeSpecial = window.confirm("Click Ok to use special characters.");

  var characterPool = [];
  // Set counter to validate any criteria were chosen.
  criteria = 0;

  if(includeLower) {
    characterPool = characterPool.concat(LETTERS.split(""));
    criteria ++;
  }
  if(includeUpper) {
    characterPool = characterPool.concat(LETTERS.toUpperCase().split(""));
    criteria ++;
  }
  if(includeNumber) {
    const NUMBERS = ['0','1','2','3','4','5','6','7','8','9'];
    characterPool = characterPool.concat(NUMBERS);
    criteria ++;
  }
  if(includeSpecial) {
    const specialCharacters = "!@#$%^&*()'/?><+=".split("");
    characterPool = characterPool.concat(specialCharacters);
    criteria ++;
  }

  if (criteria <= 0) {
    alert("No password criteria chosen. Please try again.");
    return;
  }



  var password = generatePassword(characterPool, pwdLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
