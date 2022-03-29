function generatePassword(){
  //TODO: your code goes here
  const array = new Uint32Array(10);
  let password="";
  crypto.getRandomValues(array);
  for (let i = 0; i < array.length; i++) {
    password += array[i] + " ";
    return password;
  }
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
