var generateBtn = document.querySelector("#generate");

var preferences = {
  passwordLength: 0,
  randomLowerLetters: 0,
  randomUpperLetters: 0,
  randomNumbers: 0,
  randomSpecialCharacters: 0,
};

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  window.alert("Let's Start generating a Password!");

  preferences.passwordLength = window.prompt(
    "Password Length\n\nType a number from 8 to 128 and press OK.",
    "8"
  );

  while (preferences.passwordLength < 8 || preferences.passwordLength > 128) {
    alert("you entered an invalid number!");
    preferences.passwordLength = window.prompt(
      "Password Length\n\nType a number from 8 to 128 and press OK.",
      "8"
    );
  }
  preferences.randomLowerLetters = window.confirm("Include lowercase letters?");
  preferences.randomUpperLetters = window.confirm("Include uppercase letters?");
  preferences.randomNumbers = window.confirm("Include numbers?");
  preferences.randomSpecialCharacters = window.confirm(
    "Include Special Characters?"
  );

  var length = preferences.passwordLength;
  var string = "abcdefghijklmnopqrstuvwxyz";
  var stringup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  var character = "";

  var validCharacters = "";
  if (preferences.randomLowerLetters == true) {
    validCharacters += string;
  }

  if (preferences.randomUpperLetters == true) {
    validCharacters += stringup;
  }

  if (preferences.randomNumbers == true) {
    validCharacters += numeric;
  }

  if (preferences.randomSpecialCharacters == true) {
    validCharacters += punctuation;
  }
  if (validCharacters == "") {
    window.alert(" ERROR: at least one type of characters must be selected");
    return;
  }

  while (password.length < length) {
    var randomChar = validCharacters(
      Math.floor(Math.random() * validCharacters.length)
    );

    password += randomChar;
  }
  console.log(password);
  password = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return password.substr(0, length);
}
