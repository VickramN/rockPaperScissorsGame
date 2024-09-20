let playerScore = 0;
let computerScore = 0;
let draw = 0;
let totalRounds = 0;
let maxRounds = 3;
let gameMode = "bestOfThree";

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 5) + 1;
  console.log(computerChoice);
  var computer;
  switch (computerChoice) {
    case 1:
      computer = "METAL";
      break;
    case 2:
      computer = "WOOD";
      break;
    case 3:
      computer = "WATER";
      break;
    case 4:
      computer = "FIRE";
      break;
    case 5:
      computer = "EARTH";
      break;
  }
  return computer;
}

function setGameMode() {
  const selectedMode = document.querySelector('input[name="gameMode"]:checked');
  if (!selectedMode) {
    console.error("No game mode selected!");
    return;
  }

  const modeValue = selectedMode.value;

  if (modeValue === "3") {
    maxRounds = 3;
    gameMode = "bestOfThree";
  } else if (modeValue === "5") {
    maxRounds = 5;
    gameMode = "bestOfFive";
  } else {
    maxRounds = Infinity;
    gameMode = "unlimited";
  }

  resetGame(); // Reset game whenever the mode changes
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    draw++;
  } else if (
    (playerSelection === "METAL" && computerSelection === "WOOD") ||
    (playerSelection === "METAL" && computerSelection === "EARTH") ||
    (playerSelection === "WOOD" && computerSelection === "WATER") ||
    (playerSelection === "WOOD" && computerSelection === "EARTH") ||
    (playerSelection === "WATER" && computerSelection === "METAL") ||
    (playerSelection === "WATER" && computerSelection === "FIRE") ||
    (playerSelection === "FIRE" && computerSelection === "WOOD") ||
    (playerSelection === "FIRE" && computerSelection === "METAL") ||
    (playerSelection === "EARTH" && computerSelection === "WATER") ||
    (playerSelection === "EARTH" && computerSelection === "FIRE")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }

  totalRounds += 1;

  document.getElementById("currentScore").innerHTML =
    playerScore + ":" + draw + ":" + computerScore;

  checkGameEnd();
}

var delayinMilliseconds = 1500;

function checkGameEnd() {
  if (gameMode !== "unlimited" && totalRounds >= maxRounds) {
    endGame();
  }
  if (playerScore == Math.ceil(maxRounds / 2)) {
    document.getElementById("results").innerHTML =
      "Congratulations, You won!!!!";
    console.log(delayinMilliseconds);
    setTimeout(resetGame, delayinMilliseconds);
  } else if (computerScore == Math.ceil(maxRounds / 2)) {
    document.getElementById("results").innerHTML =
      "The computer won, you suck!!!!";
    setTimeout(resetGame, delayinMilliseconds);
  }
}

function endGame() {
  if (playerScore > computerScore) {
    document.getElementById("results").innerHTML = "You win the series!";
  } else if (computerScore > playerScore) {
    document.getElementById("results").innerHTML =
      "The computer wins the series!";
  } else {
    document.getElementById("results").innerHTML = "It's a draw!";
  }

  setTimeout(resetGame, delayinMilliseconds);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  draw = 0;
  totalRounds = 0;
  document.getElementById("currentScore").innerHTML =
    playerScore + ":" + draw + ":" + computerScore;
  document.getElementById("results").innerHTML = "";
}

// Event listeners for the buttons
document.getElementById("metalButton").addEventListener("click", function () {
  playRound("METAL", getComputerChoice());
});

document.getElementById("waterButton").addEventListener("click", function () {
  playRound("WATER", getComputerChoice());
});

document.getElementById("woodButton").addEventListener("click", function () {
  playRound("WOOD", getComputerChoice());
});

document.getElementById("earthButton").addEventListener("click", function () {
  playRound("EARTH", getComputerChoice());
});

document.getElementById("fireButton").addEventListener("click", function () {
  playRound("FIRE", getComputerChoice());
});

// Initialize the game mode selection
setGameMode();
