let humanScore = 0
let computerScore = 0
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

function getComputerChoice(){
    let random_value = Math.floor(Math.random() * 3);
    let list_game = ["rock", "paper", "scissors"];
    return list_game[random_value];
}
function getHumanChoice(){
    let choice = prompt("Please enter your choice: rock, paper or scissors").toLowerCase();
    while (choice!= "rock" && choice!= "paper" && choice!= "scissors"){
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }
    return choice
}
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");
rock.addEventListener("click", ()  =>{
    playRound("rock")
})
paper.addEventListener("click", ()  =>{
    playRound("paper")
})
scissor.addEventListener("click", ()  =>{
    playRound("scissor")
})




function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage;

    if (humanChoice === computerChoice) {
        resultMessage = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the score and message
    scoreElement.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;
    messageElement.textContent = resultMessage;

    // Check for a winner
    if (humanScore === 5) {
        messageElement.textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        messageElement.textContent = "Sorry, the computer wins the game!";
        disableButtons();
    }
}
