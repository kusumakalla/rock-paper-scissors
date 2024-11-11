

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
    else if (x == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("what is your choice?");
    return humanChoice;
}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("Its a tie!");
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! scissors beats paper.");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! scissors beats paper.");
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! rock beats scissors.");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! paper beats rock.");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! rock beats scissors.");
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {

        // let humanChoice = getHumanChoice();
        // let computerChoice = getComputerChoice();
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {

        console.log("You win!. Your score is", humanScore);
    }
    else {
        console.log("You lose!. Your score is ", humanScore);
    }

}
playGame();