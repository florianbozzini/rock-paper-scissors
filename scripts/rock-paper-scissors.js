let score = JSON.parse(localStorage.getItem('score'));

if (score === null)
{
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}

updateScoreElement();

function playGame(myPick)
{
  const computerPick = calcComputerMove();

  let result = '';

  if (myPick === 'rock'){
    if (computerPick === 'rock') {
      result = 'Tie.';
    } else if (computerPick === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.'
    }

  } else if (myPick === 'paper') {
    if (computerPick === 'rock') {
      result = 'You win.';
    } else if (computerPick === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }
    
  } else {
    if (computerPick === 'rock') {
      result = 'You lose.';
    } else if (computerPick === 'paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result == 'You lose.') {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${myPick}-emoji.png">
    <img class="move-icon" src="images/${computerPick}-emoji.png"> Computer`;
}

function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function calcComputerMove()
{
  let randomNumber = Math.random();
  let computerPick = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerPick = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerPick = 'paper';
  } else {
    computerPick = 'scissors';
  }

  return computerPick;
}

function resetScore()
{
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  updateScoreElement();
}