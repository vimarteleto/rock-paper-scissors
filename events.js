// variaveis
let options = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

// nodes
const content = document.querySelector('#content')
const playerChoice = document.createElement('div')
const computerChoice = document.createElement('div')
const played = document.createElement('div')
const score = document.createElement('div')
const computerButtons = document.querySelectorAll('.computer-btn')
const playerButtons = document.querySelectorAll('.player-btn')

playerButtons.forEach((button => {
    button.addEventListener('click', playerSelection)

}))

// escolha do computador
function computerPlay() {   
    let computerSelection = options[Math.floor(Math.random() * options.length)]
    return computerSelection
}

// remover classes
function removeClass() {
    playerButtons.forEach((button => {
        button.classList.remove('selected')
    
    }))
    computerButtons.forEach((button => {
        button.classList.remove('selected')
    }))
    
}

// adicionar classe
function addClass() {
    computerButtons.forEach((button => {
        if(computerSelection == button.textContent.toLowerCase()) {
            button.classList.add('selected')
        }
    }))    
}

// renderizando escolha do jogador
function playerNode() {
    playerChoice.setAttribute('id', 'player')
    playerChoice.textContent = `Player: ${playerSelection}`
    selectors.appendChild(playerChoice)
}

// renderizando escolha do computador
function computerNode() {
    computerChoice.setAttribute('id', 'computer')
    computerChoice.textContent = `Computer: ${computerSelection}`
    selectors.appendChild(computerChoice)
}

function playRound(playerSelection, computerSelection) { 
    
    // condição de empate
    if(playerSelection == computerSelection) {
        played.textContent = 'Draw!'
    }
    // condição de derrota
    else if(
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
    ) {
        computerScore++
        played.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`
    }
    // condição de vitoria
    else if(
        (computerSelection == 'rock' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')

    ) {
        playerScore++
        played.textContent = `You win! ${playerSelection} beats ${computerSelection}!`

    } 

    // div com round jogado
    played.setAttribute('id', 'played')
    result.appendChild(played)

    // div com resultado
    score.textContent = `Player: ${playerScore} vs ${computerScore}: Computer` 
    score.setAttribute('id', 'score')
    result.appendChild(score)

    
}

function scoreCount() {
    if(playerScore == 5) {
        score.textContent = `Congratulations! You win the game ${playerScore} vs ${computerScore}!`
    }
    else if(computerScore == 5) {
        score.textContent = `Oh no! You lose the game ${playerScore} vs ${computerScore}!`
    }
}

// funcao para seleção e jogada
function playerSelection(e) {
    removeClass()    

    if(playerScore == 5 || computerScore == 5 ) {
        return
    }
    else {     

        playerSelection = e.target.textContent.toLowerCase()
        e.target.classList.add('selected')
        playerNode()

        computerSelection = computerPlay()
        computerNode()
    
        addClass()
        
        playRound(playerSelection, computerSelection)

        scoreCount()
    }
    

}



