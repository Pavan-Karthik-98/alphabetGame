
//Generating alphabets from 'A' to 'Z'

var alphabets = [];
var k = 0;
for (let i = 65; i < 91; i++) {
  alphabets[k] = String.fromCharCode(i);
  k++;
}

//Generating random numbers from 1 to 26 

function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 26) + 1;
  var randomAlphabet = alphabets[randomNumber - 1];
  document.getElementById("displayNumber").innerHTML = randomAlphabet;
  window.setTimeout(function () {
    document.getElementById("displayResponse").innerHTML = "";
  }, 1000);
}

// Returning the alphabet according to the user given number

function returnAlphabetNumber(number) {
  for (let i = 0; i < alphabets.length; i++) {
    if (alphabets[i] == number) {
      return i + 1;
    }
  }
}

//Executes if the given number is Correct

function correctCase() {
  document.getElementById("displayResponse").className = "correct";
  document.getElementById("displayResponse").innerHTML = "Correct";
  document.getElementById("inputValue").value = "";
  generateRandomNumber();
}

//Executes if the given number is Wrong

function wrongCase() {
  document.getElementById("displayResponse").className = "wrong";
  document.getElementById("displayResponse").innerHTML = "Wrong";
}

generateRandomNumber();

document.getElementById("inputValue").onkeyup = function () {
  var displayedValue = document.getElementById("displayNumber").innerHTML;
  var userGivenValue = document.getElementById("inputValue").value;
  var flag = 0;
  if (userGivenValue == returnAlphabetNumber(displayedValue)) {
    flag = 1;
    console.log("passed");
  } else {
    flag = 0;
  }
  if (flag == 1) {
    correctCase();
  } else {
    wrongCase();
  }
};
