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
        document.getElementById("demo").innerHTML = "You Win!!!, Rock beats Scissors"
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER"){
        computerScore += 1;
        document.getElementById("demo").innerHTML = "You Lose!!!, Paper beats Rock"
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "ROCK"){
        document.getElementById("demo").innerHTML = "A Draw!!!, Both chose Rock"
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK"){
        computerScore += 1;
        document.getElementById("demo").innerHTML = "You Lose!!!, Scissors loses to Rock"
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER"){
        playerScore += 1;
        document.getElementById("demo").innerHTML = "You Win!!!, Scissors beats Paper"
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "SCISSORS"){
        document.getElementById("demo").innerHTML = "A Draw!!!, Both chose Scissors"
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK"){
        playerScore += 1;
        document.getElementById("demo").innerHTML = "You Win!!!, Paper beats Rock"
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS"){
        computerScore += 1;
        document.getElementById("demo").innerHTML = "You Lose!!!, Scissors beats Paper"
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "PAPER"){
        document.getElementById("demo").innerHTML = "A Draw!!!, Both chose Paper"
    } 
}



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