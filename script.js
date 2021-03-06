// Initiate password generater
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password variable values: 
 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperCase = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    
  // Initial prompt for password critera
    enter = parseInt(prompt("How many characters do you want in your password? Choose between 8 and 128"));
    
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } 
    else if (enter < 8 || enter > 128) {
        // User validation
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } 
    else {
        // Asking for password criteria
        confirmNumber = confirm("Do you want numbers?");
        confirmCharacter = confirm("Do you want special characters?");
        confirmUppercase = confirm("Do you want uppercase letters?");
        confirmLowercase = confirm("Do you want lowercase letters?");
    };

    // User validation
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // Input prompts to determine choices
    // Conditional statement for 4 criteria
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, lowerCase, upperCase);
    }
    // Conditional statement for 3 criteria
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upperCase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowerCase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowerCase, upperCase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerCase, upperCase);
    }
    // Conditional statement for 2 criteria
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerCase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperCase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerCase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerCase.concat(upperCase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperCase);
    }
    // Conditional statement for 1 criteria
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerCase;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = upperCase;
    };

    // Password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection for all variables - .push() adds new items to the end of an array, and returns the new length. 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    // Var ps assigned to resulting password - .join() returns the array as a string.
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// Displays generated password in box - deployed and works!!!
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
