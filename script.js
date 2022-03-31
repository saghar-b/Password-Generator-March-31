function generatePassword() {
  // variables
  let msg = "";
  let passlength = 0;
  let upCase = true;
  let lowCase = true;
  let incNum = true;
  let specChar = true;
  let password = "";
  let str = "";

  // get the length of password from user
  passlength = prompt("Please select the length of your password");
  // repeat the same question while  the length of password is not a number or
  // its less than 8 ot bigger than 128 
  while (isNaN(passlength) || passlength < 8 || passlength > 128) {
    console.log("booo")
    passlength = 0;
    passlength = prompt("Please select the length of your password");
  }

  // repeat the questions while all the answers are No
  // user should select at least one password criteria 
  do {
    upCase = confirm("Do you want your password include UPPER CASE letter?")
    lowCase = confirm("Do you want your password include lowercase letter?")
    specChar = confirm("Do you want your password include special Charector?")
    incNum = confirm("Do you want your password include Numbers?")

    //if user select Upper Case option, call includeUpCase function
    if (upCase) {
      str = includeUpCase(str);
    }
    //if user select Lower Case option, call includeLowCase function
    if (lowCase) {
      str = includeLowCase(str);
    }

    //if user select Special Charectar option, call incSpecificChar function
    if (specChar) {
      str = incSpecificChar(str);
    }

    //if user select Number option, call includeNum function
    if (incNum) {
      str = includeNum(str);
    }

  }
  while (!lowCase && !upCase && !specChar && !incNum)

  // call randomPass function to creat the password
  password = randomPass(passlength, str);


  return password;
}

// includeUpCase function to add Upper case to the str
function includeUpCase(myStr) {
  myStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return myStr;

}

// includeLowCase function to add Lower case to the str
function includeLowCase(myStr) {
  myStr += "abcdefghijklmnopqrstuvwxyz";
  return myStr;
}
// includeNum function to add Numbers to the str

function includeNum(myStr) {
  myStr += "0123456789";
  return myStr;
}

// incSpecificChar function to add Special Charectra to the str
function incSpecificChar(myStr) {
  myStr += "@#$&#!";
  return myStr;
}

// creat the password function
function randomPass(passlength, fullStr) {

  let passGen = "";
  for (i = 0; i < passlength; i++) {
    var char = Math.floor(Math.random()
      * fullStr.length + 1);
    passGen += fullStr.charAt(char);
  }
  return passGen;

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
// SubmitBtn.addEventListener("click", passLength());
