//create variables that hold arrays of different types of characters (lowercase, uppercase, special characters...)//
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','[',']','{','}','|',';',':',',','.','<','>','?'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

var generatePassword = function() {

  var characterSet = [];

    var passwordLength;

    while (true) {
      passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

      if (passwordLength >= 8 && passwordLength <= 128) {
        break; // Exits the loop if the input is within the desired range
      } else {
        alert("Password length must be between 8 and 128 characters.");
      }
    }

    var includeLowercase = window.confirm("Would you like to include lowercase letters in your password?");
    if (includeLowercase) {
      characterSet = characterSet.concat(lowercaseLetters);
    }

    var includeUppercase = window.confirm("Would you like to include uppercase letters in your password?");
    if (includeUppercase) {
      characterSet = characterSet.concat(uppercaseLetters);
    }

    var includespecialCharacters = window.confirm("Would you like to include special characters in your password?");
    if (includespecialCharacters) {
      characterSet = characterSet.concat(specialCharacters);
    }

    var includeNumbers = window.confirm("Would you like to include numbers in your password?");
    if (includeNumbers) {
      characterSet = characterSet.concat(numbers);
    }
    
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }

    return password;
}

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
