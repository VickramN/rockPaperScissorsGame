/**
 * Important Variables:
 */
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let totalRounds = 0;
let maxRounds = 3;
let gameMode = "bestOfThree";

/**
 * Functions to be tested without HTML interacting bits as to not incur the
 *  wrath of the Typ'Erroar demon.
 */
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

var modeValue = "3"; // In the HTML, this is true by default.
function setGameMode() {
  // if function ignored because of it's interaction with the HTML.

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

  resetGame();
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

  // HTML seciton ignored for testing purposes.

  checkGameEnd;
}

var delayinMilliseconds = 1500;

function checkGameEnd() {
  if (gameMode !== "unlimited" && totalRounds >= maxRounds) {
    endGame();
  }
  if (playerScore == Math.ceil(maxRounds / 2)) {
    // document call ignored
    console.log(delayinMilliseconds);
    setTimeout(resetGame, delayinMilliseconds);
  } else if (computerScore == Math.ceil(maxRounds / 2)) {
    // document call ignored.
    setTimeout(resetGame, delayinMilliseconds);
  }
}

function endGame() {
  if (playerScore > computerScore) {
    // document call ignored. Following added in it's place.
    console.log("You win the series!");
  } else if (computerScore > playerScore) {
    // document call ignored. Following added in it's place.
    console.log("The computer wins the series!");
  } else {
    // document call ignored. Following added in it's place.
    console.log("It's a draw!");
  }

  setTimeout(resetGame, delayinMilliseconds);
}

function resetGame() {
  playerScore = 0;
  somputerScore = 0;
  draw = 0;
  totalRounds = 0;
  // HTML modifications ignored for JavaScript testing.
}

/**
 * Testing Suites for each function
 */

// playRound():

describe("Testing playRound(playerSelection, computerSelection){...}", () => {
  beforeEach(() => {
    // Reset draw counter before each test
    draw = 0;
    playerScore = 0;
    computerScore = 0;
    totalRounds = 0;
  });

  test("If a round is played, the round counter is incremented", () => {
    playRound("EARTH", "FIRE");
    expect(totalRounds).toBe(1);

    playRound("WATER", "METAL");
    expect(totalRounds).toBe(2);

    playRound("WOOD", "WATER");
    expect(totalRounds).toBe(3);
  });
  test("When game is at a draw, increase draw counter by 1 each draw.", () => {
    playRound("METAL", "METAL");
    expect(draw).toBe(1);

    playRound("WOOD", "WOOD");
    expect(draw).toBe(2);

    playRound("EARTH", "EARTH");
    expect(draw).toBe(3);

    playRound("FIRE", "FIRE");
    expect(draw).toBe(4);

    playRound("WATER", "WATER");
    expect(draw).toBe(5);
  });
  test("When game is not at a draw, do not increase draw counter by 1 each draw.", () => {
    playRound("WOOD", "FIRE");
    expect(draw).toBe(0);

    playRound("FIRE", "EARTH");
    expect(draw).toBe(0);
  });
  test("If player wins, increase playerScore by 1.", () => {
    playRound("FIRE", "WOOD");
    expect(playerScore).toBe(1);

    playRound("EARTH", "WATER");
    expect(playerScore).toBe(2);
  });
  test("If player wins, computerScore should remain 0.", () => {
    playRound("FIRE", "WOOD");
    expect(computerScore).toBe(0);

    playRound("EARTH", "WATER");
    expect(computerScore).toBe(0);
  });
  test("If computer wins, increase computerScore by 1.", () => {
    playRound("METAL", "WATER");
    expect(computerScore).toBe(1);

    playRound("WOOD", "FIRE");
    expect(computerScore).toBe(2);
  });
  test("If computer wins, playerScore should remain 0.", () => {
    playRound("METAL", "WATER");
    expect(playerScore).toBe(0);

    playRound("WOOD", "FIRE");
    expect(playerScore).toBe(0);
  });
  test("If Invalid input, no increase in score for computer", () => {
    playRound("AIR", "FIRE");
    expect(computerScore).toBe(0);
  });
  test("If Invalid input, no increase in score for player", () => {
    playRound("EARTH", "ACID");
    expect(playerScore).toBe(0);
  });
});

// setGameMode() Tests

describe("Tests for setGameMode(){..}", () => {
  beforeEach(() => {
    modeValue = "3";
    gameMode = "bestOfThree";
    maxRounds = 3;
  });
  test("Best of 3, or the default values, are selected.", () => {
    setGameMode();
    expect(gameMode).toBe("bestOfThree");
    expect(maxRounds).toBe(3);
  });
  test("Best of 5 is selected.", () => {
    modeValue = "5";
    setGameMode();
    expect(gameMode).toBe("bestOfFive");
    expect(maxRounds).toBe(5);
  });
  test("Unlimted rounds is selected.", () => {
    modeValue = "unlimited";
    setGameMode();
    expect(gameMode).toBe("unlimited");
    expect(maxRounds).toBe(Infinity);
  });
  test("modeValue is not an expected String value.", () => {
    modeValue = "4";
    setGameMode();
    expect(gameMode).not.toBe("bestOfThree");
    expect(maxRounds).not.toBe(4);
  });
  test("modeValue is not a String value", () => {
    modeValue = 4;
    setGameMode();
    expect(gameMode).not.toBe("bestOfThree");
    expect(maxRounds).not.toBe(4);
  });
});
