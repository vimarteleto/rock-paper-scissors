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

// botoes
const computerButtons = document.querySelectorAll('.computer-btn')
const playerButtons = document.querySelectorAll('.player-btn')
playerButtons.forEach((button => {
    button.addEventListener('click', playerSelection)

}))
const buttonReload = document.createElement('button')
buttonReload.classList.add('button-reload')
buttonReload.textContent = 'PLAY AGAIN'
buttonReload.addEventListener('click', reloadPage)

// escolha do computador
function computerPlay() {   
    let computerSelection = options[Math.floor(Math.random() * options.length)]
    return computerSelection
}

// remover classe 'selected'
function removeClass() {
    playerButtons.forEach((button => {
        button.classList.remove('selected')
    }))
    computerButtons.forEach((button => {
        button.classList.remove('selected')
    }))
}

// adicionar classe 'selected'
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
    playerChoice.textContent = playerSelection.toUpperCase()
    selectors1.appendChild(playerChoice)
}

// renderizando escolha do computador
function computerNode() {
    computerChoice.setAttribute('id', 'computer')
    computerChoice.textContent = computerSelection.toUpperCase()
    selectors2.appendChild(computerChoice)
}

// jogar um round
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
        played.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`
    }
    // condição de vitoria
    else if(
        (computerSelection == 'rock' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')

    ) {
        playerScore++
        played.textContent = `You win, ${playerSelection} beats ${computerSelection}!`

    } 

    // div com round jogado
    played.setAttribute('id', 'played')
    result.appendChild(played)

    // div com resultado
    score.textContent = `👤 ${playerScore} : ${computerScore} 🤖` 
    score.setAttribute('id', 'score')
    result.appendChild(score)

    
}

// contagem de rounds
function scoreCount() {
    if(playerScore == 5) {
        score.textContent = `Congratulations! You win the game ${playerScore} : ${computerScore}!`
        result.appendChild(buttonReload)
    }
    else if(computerScore == 5) {
        score.textContent = `Oh no! You lose the game ${playerScore} : ${computerScore}!`
        result.appendChild(buttonReload)
    }  
}

// main function
function playerSelection(e) {
    removeClass()    
    if(playerScore == 5 || computerScore == 5 ) {
        return
    }
    else {     
        // selectionar o botao selecionado e renderizar
        playerSelection = e.target.textContent.toLowerCase()
        e.target.classList.add('selected')
        playerNode()

        // selecionar e renderizar a jogada do computador
        computerSelection = computerPlay()
        computerNode() 
        
        // demais funcoes
        addClass()        
        playRound(playerSelection, computerSelection)
        scoreCount()
    }
}

// funcao de recarregamento da pagina
function reloadPage() {
    window.location.reload()
}