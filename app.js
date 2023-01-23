let playerScore = 0
let compScore = 0
// DOM
const scoreBoard = document.querySelector(".score-board");
const playerScores = document.querySelector("#user-score");
const compScores = document.querySelector("#machine-score");
const gameMessage = document.querySelector("#game-message");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// choosing a button
rockButton.addEventListener("click", () => {
    playRound("rock");
})
paperButton.addEventListener("click", () => {
    playRound("paper");
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
})

// random computer selection
function compChoice() {
    const randomSelection = Math.floor(Math.random() * 3);
        if (randomSelection === 0) {
            return "rock";
        }
        if (randomSelection === 1) {
            return "paper";
        }
        if (randomSelection ===2) {
            return "scissors"
        }
    }
   
// play round
function playRound(playerSelection) {
    const compSelection = compChoice();
    if (playerSelection === compSelection) {
        tieRound(playerSelection, compSelection);
    }
    if (
        (playerSelection === "rock" && compSelection === "scissors") || 
        (playerSelection === "paper" && compSelection === "rock") ||
        (playerSelection === "scissors" && compSelection === "paper")
    ) {
        winRound(playerSelection, compSelection);
    }
    if (
        (compSelection === "rock" && playerSelection === "scissors") || 
        (compSelection === "paper" && playerSelection === "rock") ||
        (compSelection === "scissors" && playerSelection === "paper")
    ) {
        loseRound(playerSelection, compSelection);
    }
    endingGame();
}

// What happens after each Round
function tieRound(playerSelection,compSelection) {
    gameMessage.textContent = `You Tied! Please choose another hand!`;
}

function winRound(playerSelection,compSelection){
    playerScore++;
    gameMessage.textContent = `You Won! You chose ${playerSelection} and Machine chose ${compSelection}!`;
    playerScores.textContent = `${playerScore}`;
   
}

function loseRound(playerSelection, compSelection) {
    compScore++;
    gameMessage.textContent = `You Lost! Machine chose ${compSelection} and You chose ${playerSelection}!`;
    compScores.textContent = `${compScore}`;
}

//ending and restarting the game
function endingGame() {
    if (playerScore === 5) {
        gameMessage.textContent = "Congratulations! You won! Please click another to restart!"
        playerScore = 0;
        compScore = 0;
        playerScores.textContent = `${playerScore}`;
        compScores.textContent = `${compScore}`;
    }
    if (compScore === 5) {
        gameMessage.textContent = "Sorry! You lost! Please click to try again!"
        playerScore = 0;
        compScore = 0;
        playerScores.textContent = `${playerScore}`;
        compScores.textContent = `${compScore}`;
    }
}
