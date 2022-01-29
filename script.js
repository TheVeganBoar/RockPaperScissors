const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let playerScore = 0;
let computerScore = 0;

// Event Listeners
choices.forEach(choice=>choice.addEventListener('click', play));
restart.addEventListener('click', restartGame());

// Play Game
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner = (winner, computerChoice);
}

//Computer Choice
function getComputerChoice() {
    let random = Math.floor(Math.random()*3 + 1);
    if (random === 1) {
        return 'rock';
    } else if (random === 2) {
            return 'paper';
    } else {
            return 'scissors';
        }
}

//Winner
function getWinner (playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'scissors' || 
        playerChoice === 'scissors' && computerChoice === 'paper' ||
        playerChoice === 'paper' && computerChoice === 'rock') {
        return ('You win!' + playerChoice + 'beats' + computerChoice + '.');
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors' || 
        playerChoice === 'rock' && computerChoice === 'paper' ||
        playerChoice === 'scissors' && computerChoice === 'rock') { 
        return ('You lose!' + computerChoice + 'beats' + playerChoice + '.');
    } else if (playerChoice === computerChoice) {
        return ('It\'s a tie!')
    }
}

// Show winner
function showWinner (winner, computerChoice) {
    if (winner === player) {
        playerScore++;
        result.innerHTML = `
            <h1 class="text-win"> You win! </h1>
            <i class= "fas fa-hand-${computerChoice} fa-10px"></i>
            <p>Computer chose ${computerChoice}.</p> `
            
    } else if (winner === computer) {
        computerScore++;
        result.innerHTML = `
            <h1 class="text-lose"> You lose! </h1>;
            <i class= "fas fa-hand-${computerChoice} fa-10px"></i>
            <p>Computer chose ${computerChoice}.</p> `
    } else {
        result.innerHTML = `
            <h1 class="text-lose"> It's a draw! </h1>;
            <i class= "fa-hand-${computerChoice} fa-10px"></i>
            <p>Computer chose ${computerChoice}.</p> `
    }


// Show score
score.innerHTML = ` <p> Player: ${scoreboard.player} </p>
                    <p> Computer: ${scoreboard.computer} </p> ` 

modal.style.display = 'block';

}

function restartGame () {
    playerScore = 0;
    computerScore = 0;
    score.innerHTML = `
                    <p>Player: 0</p>
                    <p>Computer: 0</p> `
}