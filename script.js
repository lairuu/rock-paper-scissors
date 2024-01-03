let playerMove = ''
let computerMove = ''
let playerScore = 0

let playRock = document.querySelector("#rock")
let playPaper = document.querySelector("#paper")
let playScissors = document.querySelector("#scissors")

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

function playGame() {

    pickComputerMove()
    
    if (playerMove === computerMove) {
        console.log(`It's a tie !`)
    } else if (playerMove === 'rock' && computerMove === 'scissors' ) {
        console.log(`You win !`)
        playerScore++
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        console.log(`You win !`)
        playerScore++
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        console.log(`You win !`)
        playerScore++
    } else {
        console.log(`You lose !`)
    }

    console.log(playerScore);
}