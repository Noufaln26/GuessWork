let rand = Math.floor(Math.random() * 100) + 1;

const guessList = document.querySelector(".guessList");

const lastResult = document.querySelector(".lastResult");
const lowOrhigh = document.querySelector(".lowOrhigh");
const guessText = document.querySelector(".guessText");
const guessSubmit = document.querySelector(".guessSubmit");
const guessLeft = document.querySelector(".guessLeft");

let guessCount = 1;

function checkGuess() {
  const userGuess = Number(guessText.value);
  if (guessCount == 1) {
    guessList.textContent = "Previous guesses: ";
  }

  guessList.textContent += userGuess + " ";

  if (userGuess === rand) {
    lastResult.textContent = " Congo, you got it right this time !";
    lastResult.style.backgroundColor = "Green";
    lowOrhigh.textContent = "";
    setGameOver();
  } else if (guessCount === 5) {
    lastResult.textContent = "!!! Game Over !!!";
    lowOrhigh.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "Red";
    userGuess < rand
      ? (lowOrhigh.textContent += `Guessed number ${userGuess} was too low\n`)
      : (lowOrhigh.textContent += `Guessed number ${userGuess} was guess was too high\n`);
    
  }
 
  guessCount++;
  guessLeft.textContent=`${6-guessCount} chances left`;
  guessText.value="";
  guessText.focus();
}

guessSubmit.addEventListener("click", checkGuess, false);

function setGameOver() {
  guessText.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start a new game";
  document.body.appendChild(resetButton);
  console.log(document.body);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1;
  const resultSection = document.querySelectorAll(".resultSection p");
  for (const eachResult of resultSection) {
    eachResult.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessText.disabled = false;
  guessSubmit.disabled = false;
  guessText.value = "";
  guessLeft.value= "";
  guessText.focus();
  lastResult.getElementsByClassName.backgroundColor = "white";
  rand = Math.floor(Math.random() * 100) + 1;
}

