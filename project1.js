let score = JSON.parse(localStorage.getItem('score'))||
{
  wins: 0,
  loss: 0,
  tie: 0
};

function playgame(playermove) {
  let computermove = computerchoice();
  let result = '';

  // Corrected the structure of conditions below:
  if (playermove === 'Rock') {
    if (computermove === 'scissors') {
      result = 'you win';
    } else if (computermove === 'Rock') {
      result = 'tie happen';
    } else if (computermove === 'paper') {  // Fixed improper use of else
      result = 'you lose';
    }
  }

  else if (playermove === 'paper') {
    if (computermove === 'Rock') {
      result = 'you win';
    } else if (computermove === 'paper') {
      result = 'tie happen';
    } else if (computermove === 'scissors') {  // Fixed improper use of else
      result = 'you lose';
    }
  }

  else if (playermove === 'scissors') {
    if (computermove === 'Rock') {
      result = 'you lose';
    } else if (computermove === 'paper') {
      result = 'you win';
    } else if (computermove === 'scissors') {  // Fixed improper use of else
      result = 'tie happen';
    }
  }

  // Updated results section
  if (result === 'you win') {
    score.wins += 1;
  } else if (result === 'you lose') {  // Corrected "loose" to "lose"
    score.loss += 1;
  } else if (result === 'tie happen') {
    score.tie += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updatescore();
  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-move').innerHTML=` you <img src="${playermove}-emoji.png" class="sizemilau">- <img src="${computermove}-emoji.png" class="sizemilau"> computer`;}

  
  function updatescore(){
    document.querySelector('.js-score').
    innerHTML=`Wins: ${score.wins} | Losses: ${score.loss} | Ties: ${score.tie}`
  }



// Function to choose the computer's move
function computerchoice() {
  const randomvalue = Math.random();
  let computermove = '';
  if (randomvalue > 0 && randomvalue <= 1/3) {
    computermove = 'Rock';
  } else if (randomvalue > 1/3 && randomvalue <= 2/3) {
    computermove = 'paper';
  } else if (randomvalue > 2/3 && randomvalue <= 1) {
    computermove = 'scissors';
  }
  return computermove;
}
