'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores;
let currentScore;
let activePlayer;
let playing;

const getCurrentId = () => {
  return `current--${activePlayer}`;
};

const init = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

const switchPlayer = () => {
  document.getElementById(getCurrentId()).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', init);

btnRoll.addEventListener('click', () => {
  if (!playing) return;

  const diceNum = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScore += diceNum;
    document.getElementById(getCurrentId()).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  if (!playing) return;

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    playing = false;

    const playerEl = document.querySelector(`.player--${activePlayer}`);
    playerEl.classList.add('player--winner');
    playerEl.classList.remove('player--active');

    diceEl.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

init();
