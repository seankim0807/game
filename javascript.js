
function getComputerChoice(){
    let random_value = Math.floor(Math.random() * 3);
    let list_game = ["rock", "paper", "scissors"];
    return list_game[random_value];
}

console.log(getComputerChoice())

function getHumanChoice(){
    let human_choice = prompt("Please enter your choice: rock, paper or scissors").toLowerCase
    while (choice!= "rock" && choice!= "paper" && choice!= "scissors"){
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }
    return human_choice
}

console.log(getHumanChoice())