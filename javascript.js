
function getComputerChoice(){
    let random_value = Math.floor(Math.random() * 3);
    let list_game = ["rock", "paper", "scissors"]
    return list_game[random_value]
}

console.log(getComputerChoice())

function getHumanChoice(){
    let human_choice = prompt("Pick rock, paper or scissors")
    return human_choice
}

console.log(getHumanChoice())