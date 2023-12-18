function computerSelection() {
    let randomNumber = (Math.random())

    let computerMove = ''

    if (randomNumber < 1/3) {
        computerMove = 'Rock'
    }
    else if (randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper'
    }
    else if (randomNumber > 2/3) {
        computerMove = 'Scissors'
    }

    console.log(computerMove)
}

computerSelection()