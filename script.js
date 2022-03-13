// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
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
// console.log(generatePassword);
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  window.alert("Let's Start generating a Password!");
  // console.log(generatePassword());
  //Prompts
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
  // var crunch = true;
  //while (password.length < length) {
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
  if ((validCharacters = "")) {
    window.alert(" ERROR: at least one type of characters must be selected");
    return;
  }

  while (password.length < length) {
    //determine a random character from validCharacters
    const randomChar = Math.ceil(
      validCharacters.length * Math.random() * Math.random()
    )(
      //add the random character to the password
      (password += randomChar)
    );
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
