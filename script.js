var computerScore = 0;
var playerScore = 0;
var round = 0;

function computerPlay() {
    let n = Math.floor(Math.random() * 3) + 1;
    if (n == 1) {
        n = 'rock'
    } else if (n == 2) {
        n = 'paper'
    } else {
        n = 'scissors'
    }
    return n
}

var computerSelection = computerPlay();
var playerSelection = prompt ("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();

function roundPlay (playerSelection, computerSelection) {
    round = +1;
    
    if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore = +1;
            return "You Lose!"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore = +1;
            return "You Win!"
    } else {
            return "It's a tie!"
    }
}

function game() {
    roundPlay ()
}