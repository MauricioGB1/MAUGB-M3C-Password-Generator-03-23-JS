// Assignment code here

var passwordLength;
var lowercaseInput;
var uppercaseInput;
var numberInput;
var specialcharacterInput;
var lengthInput;

var upperCase = [ "a","b","c","d","e", "f", "g", "h", "i", "j", "k",
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerCase = [ "A","B","C","D","E", "F", "G", "H", "I", "J", "K",
 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [ 0, 1, 2, 3, 4 ,5 ,6, 8 ,9 ];
var specialCharacter = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";",
 "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", " ", "~", ]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  newPassword= generatePassword();
  document.getElementById("password").placeholder = newPassword;
  };
  

function generatePassword() {
   lengthInput  = parseInt(prompt("Please specificy the number of charactes for you password minimum 8 and maximum 128" ));
        if (!lengthInput) {
          alert("Please enter a value to proceed");
        }
        else if (lengthInput < 8 ||  lengthInput > 128) {   
        
        lengthInput=parseInt(prompt("Pasword lenght should be between 8 to 128 characters!" ));
     
      }
      if  (lengthInput) {
      uppercaseInput = confirm(
      " Would you like to include Uppercase Characters for your password?" );
      console.log(uppercaseInput);

      lowercaseInput = confirm(
    " Would you like to include Lowercase Characters for your password?" );
      console.log(lowercaseInput);
      
      numberInput = confirm(
    " Would you like to include Numbers for your password?" );
       console.log(numberInput);
  
     specialcharacterInput = confirm(
    " Would you like to include Special characters for your password?" );
      console.log(specialcharacterInput);
      }
      
      if (!uppercaseInput && !lowercaseInput && !numberInput && !specialcharacterInput) {
    passwordInput = alert("you need to include at leat one option to complete password criteria input, Please Try Again!");
    }   

        // Only one type of selection option
        else if (uppercaseInput) {
        passwordInput = upperCase;
        }
        else if (lowercaseInput) {
        passwordInput = lowerCase;
        }
        else if (numberInput) {
        passwordInput = number;
        }
        else if (specialcharacterInput) {
        passwordInput = specialCharacter;
        }

        // Two types of selection options
        else if (uppercaseInput && lowercaseInput) {
        passwordInput = upperCase.concat(lowerCase);
        }
        else if (uppercaseInput && numberInput) {
        passwordInput = upperCase.concat(number);
        }
        else if (uppercaseInput && specialcharacterInput) {
        passwordInput = upperCase.concat(specialCharacter);
        }
        else if (lowercaseInput && numberInput) {
        passwordInput = lowerCase.concat(number);
        }
        else if (lowercaseInput && specialcharacterInput) {
        passwordInput = lowerCase.concat(specialCharacter);
        }
        else if (numberInput && specialcharacterInput) {
        passwordInput = number.concat(specialCharacter);
        }

        // Three types of selection options
        else if (uppercaseInput && lowercaseInput && numbersInput) {
          passwordInput = upperCase.concat(lowerCase, number);
        }
        else if (uppercaseInput && lowercaseInput && specialcharacterInput) {
          passwordInput = upperCase.concat(lowerCase, specialCharacter);
        }
        else if (lowercaseInput && numbersInput && specialCharacterInput) {
            passwordInput = lowerCase.concat(number, specialCharacter);
        }

        // All four  types of characters options
        else if (uppercaseInput && lowercaseInput && numbersInput && specialCharacterInput) {
        passwordInput = upperCase.concat(lowerCase, number, specialCharacter);
        }

        var newPassword = [];

        // Iteration to select values
        for (var i = 0; i < lengthInput; i++) {
          console.log(passwordInput);
          var randomNumber = passwordInput[Math.floor(Math.random() * passwordInput.length)];
          newPassword.push(randomNumber);
         }
      console.log(newPassword.join(''));
      return (newPassword.join(''));
        }

       var newPassword = password.join("");
       UserInput(newPassword);
       return newPassword;
      }

function UserInput(newPassword) {
  document.getElementById("password").textcontent = newPassword;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});