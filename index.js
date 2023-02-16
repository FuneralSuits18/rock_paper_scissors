function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1){
        return "rock";
    }
    else if(randomNum == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getPlayerChoice(){
    let choice = prompt("Enter rock, paper or scissors!");
    if(choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") return choice.toLowerCase();
    else{
        choice = prompt("Enter rock, paper or scissors!");
    }
}

// returns the move that wins, or "draw"
function gameLogic(move1, move2){
    if(move1 == move2){
        return "draw";
    }
    else if(move1 == "rock"){
        if(move2 == "paper") return move2;
        else return move1;
    }
    else if(move1 == "paper"){
        if(move2 == "scissors") return move2;
        else return move1;
    }
    else{
        if(move2 == "rock") return move2;
        else return move1;
    }
}

let no_of_player_wins = 0;
let no_of_computer_wins = 0;
let no_of_draws = 0;
function playRound(playerSelection, computerSelection){
    let outcome = gameLogic(playerSelection, computerSelection);
    if(outcome == "draw"){
        no_of_draws++;
        return "Draw";
    }
    else if (outcome === playerSelection){
        no_of_player_wins++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }else{
        no_of_computer_wins++;
        return `You lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(`ROUND ${i + 1} OF 5`);
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    if(no_of_player_wins > no_of_computer_wins){
        console.log(`You won the game! You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds!`);
    }
    else if(no_of_computer_wins > no_of_player_wins){
        console.log(`You lost. You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds`);
    }
    else{
        console.log(`Game Draw! You've won ${no_of_player_wins} rounds, lost ${no_of_computer_wins} and drawn ${no_of_draws} out of 5 rounds`);
    }
}

game();