
let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    let random_value = Math.floor(Math.random() * 3);
    let list_game = ["rock", "paper", "scissors"];
    return list_game[random_value];
}

console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("Please enter your choice: rock, paper or scissors").toLowerCase
    while (choice!= "rock" && choice!= "paper" && choice!= "scissors"){
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }
    return choice
}

function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose: paper beats rock");
            computerScore ++
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win: rock beats scissors")
            humanScore ++
        }
        else if (humanChoice == "rock" && computerChoice == "rock"){
            console.log("You draw")
        }
        else if (humanChoice == "paper" && computerChoice == "paper"){
            console.log("You draw")
        }
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose: scissors beat paper")
            computerScore ++
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win: paper beats rock")
            humanScore ++
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win: scissor  beats paper")
            humanScore ++
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors"){
            console.log("You draw")
        }
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose: rock beats scissors")
            computerScore ++
    }
               

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)