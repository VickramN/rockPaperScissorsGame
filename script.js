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

    console.log(computer);


}