// Getting the computer's choice
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    }
    else if (choice === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}
// getting the human's choice
function getHumanChoice(){
    let choice = window.prompt('Enter Rock, Paper, or Scissors: ');
    return choice;
}

// Declaring the Scores of human vs. computer

let humanScore = 0;
let computerScore = 0;
let ties = 0;

// Defining the logic for one round of the game.


function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    humanSelection = humanSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
// Rock Logic
    if (humanSelection === 'rock' && computerSelection === 'rock') {
        ties++;
        return 'Tie';
    }
    else if (humanSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return `Computer Wins! ${computerSelection} beats ${humanSelection}`;
    }
    else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore++;
        return `Human Wins! ${humanSelection} beats ${computerSelection}`;
    }
// Paper Logic
    if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore++;
        return `Human Wins! ${humanSelection} beats ${computerSelection}`;
    }
    else if (humanSelection === 'paper' && computerSelection === 'paper') {
        ties++;
        return 'Tie';
    }
    else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return `Computer Wins! ${computerSelection} beats ${humanSelection}`;
    }
// Scissors Logic
    if (humanSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return `Computer Wins! ${computerSelection} beats ${computerSelection}`;
    }
    else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        computerScore++;
        return `Human Wins! ${humanSelection} beats ${computerSelection}`;
    }
    else if (humanSelection === 'scissors' && computerSelection === 'scissors') {
        ties++;
        return 'Tie';
    }
    }

const numberOfRounds = 5;

function playGame() {
    for (let i = 0; i < numberOfRounds; i++) {
        playRound();
        // console.log(playRound(humanSelection, computerSelection))
        // console.log(`Round ${i}: Human: ${humanScore} \n Computer: ${computerScore}`)
}
}

console.log(playGame())
console.log(`Games won by Human: ${humanScore}\nGames won by Computer: ${computerScore}\nGames Tied: ${ties}`)