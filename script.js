function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)+1;
    var computer;
    switch(computerChoice){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer =  "SCISSORS";
            break;
        case 3:
            computer =  "PAPER";
            break;
    }
    return computer;
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;



function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS"){
        playerScore += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":"+ computerScore;
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER"){
        computerScore += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "ROCK"){
        draw += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK"){
        computerScore += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER"){
        playerScore += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "SCISSORS"){
        draw += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK"){
        playerScore += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS"){
        computerScore += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "PAPER"){
        draw += 1;
        document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;
    } 
    if(playerScore == 5){
        document.getElementById("results").innerHTML = "Congratulations, You won!!!!"
        playerScore = 0;
        computerScore = 0;
    }   else if(computerScore == 5){
        document.getElementById("results").innerHTML = "The computer won, you suck!!!!"
        playerScore = 0;
        computerScore = 0;
    }
}

document.getElementById("currentScore").innerHTML = playerScore + ":" + draw + ":" + computerScore;

const rockButton = document.getElementById("rockButton");
rockButton.addEventListener("click", function(){
    playRound(rockButton.innerHTML,getComputerChoice());
});

const paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", function(){
    playRound(paperButton.innerHTML,getComputerChoice());
});

const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", function(){
    playRound(scissorsButton.innerHTML,getComputerChoice());
});