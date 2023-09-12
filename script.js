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


function playRound(playerSelection, computerSelection){
   
    if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS"){
        playerScore += 1;
        return("You Win!!!, Rock beats Scissors")
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER"){
        computerScore += 1;
        return("You Lose!!!, Paper beats Rock")
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "ROCK"){
        return("A Draw!!!, Both chose Rock")
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK"){
        computerScore += 1;
        return("You Lose!!!, Scissors loses to Rock")
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER"){
        playerScore += 1;
        return("You Win!!!, Scissors beats Paper")
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "SCISSORS"){
        return("A Draw!!!, Both chose Scissors")
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK"){
        playerScore += 1;
        computerScore += 1;
        return("You Win!!!, Paper beats Rock")
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS"){
        computerScore += 1;
        return("You Lose!!!, Scissors beats Paper")
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "PAPER"){
        return("A Draw!!!, Both chose Paper")
    } 
}



window.addEventListener( click, playRound());
console.log(playerSelection);
