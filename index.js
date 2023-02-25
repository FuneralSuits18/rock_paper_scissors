let no_of_player_wins = 0;
let no_of_computer_wins = 0;
let no_of_draws = 0;

const btn_rock = document.querySelector('.btn_rock');
const btn_paper = document.querySelector('.btn_paper');
const btn_scissors = document.querySelector('.btn_scissors');

const round_result = document.createElement('div');
round_result.classList.add('round_result');
const game_result = document.createElement('div');
game_result.classList.add('game_result');
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
btn_paper.addEventListener('click', playRoundScissors);
btn_scissors.addEventListener('click', playRoundScissors);

function playRoundRock(){
  playRound('rock', getComputerChoice());
}
function playRoundPaper(){
  playRound('paper', getComputerChoice());
}
function playRoundScissors(){
  playRound('scissors', getComputerChoice());
}

const container = document.querySelector('.container');
container.appendChild(round_result);
container.appendChild(game_record);

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
      container.appendChild(game_result);
    } else if (no_of_computer_wins > no_of_player_wins) {
      game_result.textContent = `You lost. You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds`;
      container.appendChild(game_result);
    } else {
      game_result.textContent = `Game Draw! You've won ${no_of_player_wins} rounds, lost ${no_of_computer_wins} and drawn ${no_of_draws} out of 5 rounds`;
      container.appendChild(game_result);
    }
  }
}


if(no_of_player_wins + no_of_computer_wins + no_of_draws >= 5){
  btn_rock.removeEventListener('click', playRoundRock);
  btn_paper.removeEventListener('click', playRoundPaper);
  btn_scissors.removeEventListener('click', playRoundScissors);
}




// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(`ROUND ${i + 1} OF 5`);
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//   }
//   if (no_of_player_wins > no_of_computer_wins) {
//     console.log(
//       `You won the game! You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds!`
//     );
//   } else if (no_of_computer_wins > no_of_player_wins) {
//     console.log(
//       `You lost. You've won ${no_of_player_wins} and drawn ${no_of_draws} out of 5 rounds`
//     );
//   } else {
//     console.log(
//       `Game Draw! You've won ${no_of_player_wins} rounds, lost ${no_of_computer_wins} and drawn ${no_of_draws} out of 5 rounds`
//     );
//   }
// }


// game();
