
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${toCapitalize(playerSelection)} beats ${toCapitalize(computerSelection)}.`
    } else if (playerSelection == computerSelection) {
        return `It's a tie! ${toCapitalize(playerSelection)} and ${toCapitalize(computerSelection)} are the same.`
    } else {
        return `You lose! ${toCapitalize(computerSelection)} beats ${toCapitalize(playerSelection)}.`
    }
}

function toCapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))