
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
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
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${toCapitalize(playerSelection)} beats ${toCapitalize(computerSelection)}.`;
    } else if (playerSelection == computerSelection) {
        return `It's a tie! ${toCapitalize(playerSelection)} and ${toCapitalize(computerSelection)} are the same.`;
    } else {
        return `You lose! ${toCapitalize(computerSelection)} beats ${toCapitalize(playerSelection)}.`;
    }
}

function toCapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(message = "Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection)
        console.log(`${round}`)
        
        switch(round.charAt(4)) {
            case "w": 
                playerScore++;
                break;
            case "l":
                computerScore++;
                break;
        }
        
        if (i == 4) {
            if (playerScore > computerScore){
                    console.log(`You win! ${playerScore}:${computerScore}`)
                } else if (computerScore > playerScore) {
                    console.log(`You lose! ${computerScore}:${playerScore}`)
                } else {
                    console.log(`Its a tie ${computerScore}:${playerScore}`)
                }
        }
    }
}

playGame();