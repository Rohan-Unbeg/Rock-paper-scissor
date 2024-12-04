const options = ["rock", "paper", "scissors"];
var humanScore = 0;
var computerScore = 0;
let isGameOver = false; // Flag to track game status
var roundsPlayed = 0; // To track rounds played
const btn = document.querySelectorAll(".btn");
let humanScr = document.getElementById("humanScr");
let computerScr = document.getElementById("computerScr");

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (isGameOver) {
            resetGame(); // Reset the game when it ends
        }; // Stop further clicks if the game is over
        const humanChoice = event.target.value;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

function playRound(humanChoice, computerChoice) {
    // human wins
    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        humanScore++;
        console.log("Human Wins");
    }
    // Computer wins
    else if (
        (humanChoice == "scissors" && computerChoice == "rock") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "rock" && computerChoice == "paper")
    ) {
        computerScore++;
        console.log("Computer Wins");
    }
    // Draw
    else {
        console.log("Draw");
    }

    humanScr.innerHTML = humanScore;
    computerScr.innerHTML = computerScore;

    // Increment roundsPlayed
    roundsPlayed++;

    // Check if the game is over
    if (roundsPlayed === 5) {
        isGameOver = true;
        displayResult();
    }
}

const resultDiv = document.getElementById("result");

function displayResult() {
    if (humanScore > computerScore) {
        console.log("Human is best");
        resultDiv.innerHTML = "Human is best";
    } else if (computerScore > humanScore) {
        resultDiv.innerHTML = "Computer is best";
        console.log("Computer is best");
    } else {
        resultDiv.innerHTML = "Draw";
        console.log("No one is best");
    }
}


function resetGame() {
    // Reset all game variables
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    isGameOver = false;

    // Reset UI
    humanScr.innerHTML = humanScore;
    computerScr.innerHTML = computerScore;
    resultDiv.innerHTML = ""; // Clear the result display
    console.log("Game has been reset!");
}