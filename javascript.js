
function playGame(){
    let humanScore = 0
    let computerScore = 0
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
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
            console.log("You draw");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win: ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose: ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
    for (let i = 0; i < 5; i++){
        console.log("Round" + (i+1));
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore){
        console.log(`You win! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore){
        console.log(`You lose! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

    }
    else{
        console.log(`It's a draw! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
               
playGame();