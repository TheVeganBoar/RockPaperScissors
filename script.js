var computerScore = 0;
var playerScore = 0;
var round = 0;

function computerPlay () {
    var n = Math.floor(Math.random() * 3) + 1;
    if (n == 1) {
        n = 'rock'
    } else if (n == 2) {
        n = 'paper'
    } else {
        n = 'scissors'
    }  
    return n;
}

function game () {
    const playerSelection = prompt ("Rock, Paper or Scissors?")
    const computerSelection = computerPlay;

    function round (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase()
        round = +1;
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore = +1
            return "You Lose! Paper beats Rock"
        } else if (playerSelection = 'paper' && computerSelection = 'scissors') {
            computerScore = +1
            return "You Lose! Scissors beats Paper"
        } else if (playerSelection = 'scissors' && computerSelection = 'rock') {
            computerScore = +1
            return "You Lose! Rock beats Scissors"
        } else if (playerSelection = 'rock' && computerSelection = 'scissors') {
            playerScore = +1
            return "You Win!"
        } else if (playerSelection = 'paper' && computerSelection = 'rock') {
            playerScore = +1
            return "You Win!"
        } else if (playerSelection = 'scissors' && computerSelection = 'paper') {
            playerScore = +1
            return "You Win!"
        } else (playerSelection == computerSelection) {
            return "It's a Tie!"
        }
}

for (let game = 0; game < 5; game++)

function result () {
    if (playerScore > computerScore) {
    return "GAME OVER! YOU WON!"
} else {
    return "GAME OVER! YOU LOSE!"}
}

console.log (game())