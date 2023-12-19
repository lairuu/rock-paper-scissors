
let playerSelection = prompt(`What's your move ?`)
let computerSelection = ''

function getComputerChoice() {
    let randomNumber = (Math.random())

    let computerChoice = ''

    if (randomNumber < 1/3) {
        computerChoice = 'rock'
    }
    else if (randomNumber > 1/3 && randomNumber < 2/3) {
        computerChoice = 'paper'
    }
    else if (randomNumber > 2/3) {
        computerChoice = 'scissors'
    }

    computerSelection = computerChoice;
    return computerSelection
}




function playRound(playerSelection, computerSelection) {
    
    getComputerChoice()

    if (playerSelection.toLowerCase() === 'rock') {
       return playerRock(playerSelection, computerSelection);

    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        return playerScissors(playerSelection, computerSelection);

    }
    else if (playerSelection.toLowerCase() === 'paper') {
        return playerPaper(playerSelection, computerSelection);

    }
    else {
        alert('This is not a valid choice')
    }
    
     
}



function playerRock(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return "Loss";
    }
    else if ( playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return "Win";
    }
    else if ( playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        return `Tie`;
    }
}

function playerScissors(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return "Win";
    }
    else if ( playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
        return `Tie`;
    }
    else if ( playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return 'Loss';
    }
}

function playerPaper(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        return `Tie`;
    }
    else if ( playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return 'Loss';
    }
    else if ( playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return 'Win';
    }
}


function game() {
    
    let playerScore = 0
    let computerScore = 0


    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, computerSelection) === "Win") {
            playerScore++
            console.log(`Player's win`)
        } 
        else if (playRound(playerSelection, computerSelection) === "Loss") {
            computerScore++
            console.log(`Computer's win`)
        }
        else if (playRound(playerSelection, computerSelection) === "Tie") {
            console.log('Tie')
        }

    console.log(playerScore, computerScore)
}
    
    if (playerScore > computerScore) {
        return 'You win !'
    }
    else if (computerScore > playerScore) {
        return 'You lose !'
    }
    else if (computerScore === playerScore) {
        return `It's a Tie!`
    }
}

console.log(game())

