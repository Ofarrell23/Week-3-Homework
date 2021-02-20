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

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var lowercaseChar = "abcdefghijklmnop";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalChar = "1234567890"
var specialChar = "!@#$%^&*()_+"
var charType = 0;
var assembly = "";
var passwordText = "";
var alphaLength = 25
var tryAgain = false;
var lowChoice = true;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {

    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
}
// password variable is an array placeholder for user generated amount of length
var password = [];

// Start random selection variables: 
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}

var ps = password.join("");
UserInput(ps);
return ps;


function UserInput(ps) {
    document.getElementById("password").textContent = ps;

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword()
    
}

generateBtn.addEventListener("click", generatePassword);
}