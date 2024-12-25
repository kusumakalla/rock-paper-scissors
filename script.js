

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

// function getHumanChoice() {
//     let humanChoice = prompt("what is your choice?");
//     return humanChoice;
// }



let result = document.querySelector(".result");

// function playGame() {
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();



    if (humanChoice == computerChoice) {
        result.textContent = `Its a tie! your score: ${humanScore} computer score : ${computerScore}`;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        result.textContent = `Paper beats Rock. your score:, ${humanScore} computer score : ${computerScore}`;

    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        result.textContent = `scissors beats paper. your score:${humanScore} computer score: ${computerScore}`;

    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        result.textContent = `scissors beats paper. your score: ${humanScore} computer score :${computerScore}`;

    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        result.textContent = `rock beats scissors. your score: ${humanScore} computer score :${computerScore}`;

    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        result.textContent = `paper beats rock. your score:${humanScore} computer score :${computerScore}`;

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        result.textContent = `rock beats scissors. your score:${humanScore} computer score :${computerScore}`;

    }

    if (humanScore >= 5 || computerScore >= 5) {
        humanScore > computerScore ? result.textContent = `Yayy!! you won. Your final score after 5 rounds : ${humanScore} ` :
            result.textContent = `Oh!ohh!! computer won. Your final score after 5 rounds : ${humanScore} `;
    }

}

function clickWork() {

    let rockButton = document.querySelector(".rock")
    let paperButton = document.querySelector(".paper")
    let scissorsButton = document.querySelector(".scissors")

    rockButton.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
        console.log('rock button clicked');
    })
    paperButton.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
        console.log('paper button is clocked');
    })
    scissorsButton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
        console.log('scissors button is clocked');
    })
}


clickWork();



// for (let i = 0; i < 5; i++) {

//     // let humanChoice = getHumanChoice();
//     // let computerChoice = getComputerChoice();
//     playRound(getHumanChoice(), getComputerChoice());
// }


// }
// playGame();