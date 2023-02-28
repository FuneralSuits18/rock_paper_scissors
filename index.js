const container = document.querySelector('.container');
const play_btn = document.querySelector('.play');
play_btn.addEventListener('click', loadGame);

function loadGame(){
  const game_container = document.querySelector('.game_container');
  container.removeChild(play_btn);
  game_container.hidden = false;
}

const btn_play_again = document.createElement('button');
btn_play_again.classList.add('btn');
btn_play_again.textContent = 'Play again!';
btn_play_again.addEventListener('click', playAgain);

function playAgain(){
  round_count = 0;
  no_of_player_wins = 0;
  no_of_computer_wins = 0;
  no_of_draws = 0;

  round_result.textContent = '';
  wins.textContent = 'Wins : 0';
  draws.textContent = 'Draws : 0';
  losses.textContent = 'Losses : 0';
  game_result.textContent = '';

  btn_container.removeChild(btn_play_again);
  btn_container.appendChild(btn_rock);
  btn_container.appendChild(btn_paper);
  btn_container.appendChild(btn_scissors);
  
}


let no_of_player_wins = 0;
let no_of_computer_wins = 0;
let no_of_draws = 0;

const btn_rock = document.querySelector('.btn_rock');
const btn_paper = document.querySelector('.btn_paper');
const btn_scissors = document.querySelector('.btn_scissors');

const round_result = document.querySelector('.round_result');
const game_result = document.createElement('div');
game_result.classList.add('game_result');
game_result.style.paddingTop = '2rem';

const game_record = document.createElement('ul');
const wins = document.createElement('li');
const draws = document.createElement('li');
const losses = document.createElement('li');
wins.textContent = 'Wins : 0';
draws.textContent = 'Draws : 0';
losses.textContent = 'Losses : 0';
game_record.appendChild(wins);
game_record.appendChild(draws);
game_record.appendChild(losses);

btn_rock.addEventListener('click', playRoundRock);
btn_paper.addEventListener('click', playRoundPaper);
btn_scissors.addEventListener('click', playRoundScissors);

let round_count = 0;
function playRoundRock(){
  if(round_count == 4){
    playRound('paper', getComputerChoice());
    btn_container.removeChild(btn_rock);
    btn_container.removeChild(btn_paper);
    btn_container.removeChild(btn_scissors);
    btn_container.appendChild(btn_play_again);
    return;
  }
  playRound('rock', getComputerChoice());
}
const btn_container = document.querySelector('.btn_container');
function playRoundPaper(){
  if(round_count == 4){
    playRound('paper', getComputerChoice());
    btn_container.removeChild(btn_rock);
    btn_container.removeChild(btn_paper);
    btn_container.removeChild(btn_scissors);
    btn_container.appendChild(btn_play_again);
    return;
  }
  playRound('paper', getComputerChoice());
}
function playRoundScissors(){
  if(round_count == 4){
    playRound('paper', getComputerChoice());
    btn_container.removeChild(btn_rock);
    btn_container.removeChild(btn_paper);
    btn_container.removeChild(btn_scissors);
    btn_container.appendChild(btn_play_again);
    return;
  }
  playRound('scissors', getComputerChoice());
}

const game_status = document.querySelector('.game_status');
game_status.appendChild(game_record);

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// returns the move that wins, or "draw"
function getWinner(move1, move2) {
  if (move1 == move2) {
    return "draw";
  } else if (move1 == "rock") {
    if (move2 == "paper") return move2;
    else return move1;
  } else if (move1 == "paper") {
    if (move2 == "scissors") return move2;
    else return move1;
  } else {
    if (move2 == "rock") return move2;
    else return move1;
  }
}

function playRound(playerSelection, computerSelection) {
  round_count++;
  let outcome = getWinner(playerSelection, computerSelection);
  if (outcome == "draw") {
    no_of_draws++;
    draws.textContent = `Draws : ${no_of_draws}`;
    round_result.textContent = "Draw";
  } else if (outcome === playerSelection) {
    no_of_player_wins++;
    wins.textContent = `Wins : ${no_of_player_wins}`;
    round_result.textContent = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
  } else {
    no_of_computer_wins++;
    losses.textContent = `Losses : ${no_of_computer_wins}`;
    round_result.textContent = `You lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
  }
  if(no_of_player_wins + no_of_computer_wins + no_of_draws == 5){
    if (no_of_player_wins > no_of_computer_wins) {
      game_result.textContent = `You won the game! You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds!`;
      game_status.appendChild(game_result);
    } else if (no_of_computer_wins > no_of_player_wins) {
      game_result.textContent = `You lost the game. You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds`;
      game_status.appendChild(game_result);
    } else {
      game_result.textContent = `Game Draw! You've won ${no_of_player_wins} rounds, lost ${no_of_computer_wins} and drawn ${no_of_draws} out of 5 rounds`;
      game_status.appendChild(game_result);
    }
  }
}