
let playerSelection = prompt(`What's your move ?`)


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

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return "You Lose! Paper beats Rock";
    }
    else if ( playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return "You Win! Rock beats Scissors";
    }
    else if ( playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        return `It's a Tie!`
    } 
}



function game() {
    let playerScore = Number('0')
    let computerScore = Number('0')

    if (playRound(playerSelection, getComputerChoice()) === "You Lose! Paper beats Rock") {
        computerScore++
        console.log(`Computer's win`)
    } 
    else if (playRound(playerSelection, getComputerChoice()) === "You Win! Rock beats Scissors") {
        playerScore++
        console.log(`Player's win`)
    }
    else if (playRound(playerSelection, getComputerChoice()) === "It's a Tie!") {
        console.log('Tie')
    }
    if (playRound(playerSelection, getComputerChoice()) === "You Lose! Paper beats Rock") {
        computerScore++
        console.log(`Computer's win`)
    } 
    else if (playRound(playerSelection, getComputerChoice()) === "You Win! Rock beats Scissors") {
        playerScore++
        console.log(`Player's win`)
    }
    else if (playRound(playerSelection, getComputerChoice()) === "It's a Tie!") {
        console.log('Tie')
    }
    if (playRound(playerSelection, getComputerChoice()) === "You Lose! Paper beats Rock") {
        computerScore++
        console.log(`Computer's win`)
    } 
    else if (playRound(playerSelection, getComputerChoice()) === "You Win! Rock beats Scissors") {
        playerScore++
        console.log(`Player's win`)
    }
    else if (playRound(playerSelection, getComputerChoice()) === "It's a Tie!") {
        console.log('Tie')
    }
    if (playRound(playerSelection, getComputerChoice()) === "You Lose! Paper beats Rock") {
        computerScore++
        console.log(`Computer's win`)
    } 
    else if (playRound(playerSelection, getComputerChoice()) === "You Win! Rock beats Scissors") {
        playerScore++
        console.log(`Player's win`)
    }
    else if (playRound(playerSelection, getComputerChoice()) === "It's a Tie!") {
        console.log('Tie')
    }
    if (playRound(playerSelection, getComputerChoice()) === "You Lose! Paper beats Rock") {
        computerScore++
        console.log(`Computer's win`)
    } 
    else if (playRound(playerSelection, getComputerChoice()) === "You Win! Rock beats Scissors") {
        playerScore++
        console.log(`Player's win`)
    }
    else if (playRound(playerSelection, getComputerChoice()) === "It's a Tie!") {
        console.log('Tie')
    }
    
    

    if (playerScore > computerScore) {
        return 'You win !'
    }
    else if (computerScore > playerScore) {
        return 'You lose !'
    }
    else {
        return `It's a Tie!`
    }
}

console.log(game())