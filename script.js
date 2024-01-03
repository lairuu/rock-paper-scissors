let playerMove = ''
let computerMove = ''
let playerScore = 0
let computerScore = 0

let playRock = document.querySelector("#rock")
let playPaper = document.querySelector("#paper")
let playScissors = document.querySelector("#scissors")
let resultDisplay = document.querySelector("#result")

playRock.addEventListener("click", () => {
    playerMove = 'rock';
    playGame();
})

playPaper.addEventListener("click", () => {
    playerMove = 'paper';
    playGame();
})

playScissors.addEventListener("click", () => {
    playerMove = 'scissors';
    playGame();
})


function pickComputerMove() {
    let randomNumber = (Math.random())

    if (randomNumber < 1/3) {
        return computerMove = 'rock'
    }
    else if (randomNumber > 1/3 && randomNumber < 2/3) {
        return computerMove = 'paper'
    }
    else if (randomNumber > 2/3) {
        return computerMove = 'scissors'
    }
}

function resetScore() {
    playerScore = 0
    computerScore = 0
}

function checkScore() {
    if (playerScore >= 5) {
        resultDisplay.textContent = `You won the game ! Your score : ${playerScore} Computer's score :  ${computerScore}`
        resetScore()
        
    } else if (computerScore >= 5) {
        resultDisplay.textContent = `You lost the game ! Try again. Your score : ${playerScore} Computer's score :  ${computerScore}`
        resetScore()
    } 
}

function playGame() {

    pickComputerMove()
    
    if (playerMove === computerMove) {
        resultDisplay.textContent = `It's a tie ! Your score : ${playerScore} Computer's score :  ${computerScore}`
    } else if (playerMove === 'rock' && computerMove === 'scissors' ) {
        resultDisplay.textContent = `You win ! Your score : ${playerScore} Computer's score :  ${computerScore}`
        playerScore++
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        resultDisplay.textContent = `You win ! Your score : ${playerScore} Computer's score :  ${computerScore}`
        playerScore++
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        resultDisplay.textContent = `You win ! Your score : ${playerScore} Computer's score :  ${computerScore}`
        playerScore++
    } else {
        resultDisplay.textContent = `You lose ! Your score : ${playerScore} Computer's score :  ${computerScore}`
        computerScore++
    }

    checkScore()
}