// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//user variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';
var pwd = '';
var lowerCaseChar = false;
var upperCaseChar = false;
var specialCaseChar= false;
var numberCaseChar = false;

//generating random function

function generate() {
    var confirmLength = '';
//desired character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("Make sure your User length is Correct (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
//user imput

    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerCaseChar = true
        } 
        if (confirm("Would you like to use uppercase characters?") == true) {
            upperCaseChar = true
        }
        if (confirm("Would you like to use special characters?") == true) {
            specialCaseChar = true
        }
        if (confirm("Would you like to use numerical characters?") == true) {
            numberCaseChar = true
        }
        if (lowerCaseChar === false && upperChar === false && specialChar === false && numberChar === false) {
            alert("At least one character type must be selected")
        }
    }
//generate random password
    var characters = '';
    characters += (lowerCaseChar ? lower : '');
    characters += (upperCaseChar ? upper : '');
    characters += (specialCaseChar ? special : '');
    characters += (numberCaseChar ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}