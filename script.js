//variaveis
let options = ['rock', 'paper', 'scissors']
let playerSelection
let computerSelection = computerPlay()
let playerScore = 0
let computerScore = 0

// escolha do computador
function computerPlay() {   
    return options[Math.floor(Math.random() * options.length)]
} 

// função para disputa da partida
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Paper, rock, scissors?').toLowerCase()

    // playerSelection está dentro das opções?
    if(options.indexOf(playerSelection) > -1) { 
        // condição de empate
        if(playerSelection == computerSelection) {
            return `Draw!\nThe score is now Player: ${playerScore} vs Computer: ${computerScore}`
        }
        // condição de derrota
        else if(
            (playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
            computerScore++
            return `You lose! ${computerSelection} beats ${playerSelection}!\nThe score is now Player: ${playerScore} vs Computer: ${computerScore}`
        }
        // condição de vitoria
        else {
            playerScore++
            return `You win! ${playerSelection} beats ${computerSelection}!\nThe score is now Player: ${playerScore} vs Computer: ${computerScore}`
        }
    }
    else return 'Invalid option!'    
}

// jogo de 5 rounds
function game() {
    for(playerScore = 0, computerScore = 0; (playerScore < 5 && computerScore < 5);) {
        console.log(playRound(playerSelection, computerPlay()))         
    }
    if(playerScore > computerScore) {
        return `Congratulations! You win the game ${playerScore} vs ${computerScore}!`
    }
    else {
        return `Oh no! You lose the game ${playerScore} vs ${computerScore}!`
    }
}
console.log(game())