'use strict';

let diceNum;
let player1_HS = 0;
let player2_HS = 0;
let player1Current = 0;
let player2Current = 0;
let Active = 'player1';
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let player1Card = document.querySelector('.player--0');
let player2Card = document.querySelector('.player--1');
let currentValue1 = document.querySelector('#current--0');
let currentValue2 = document.querySelector('#current--1');
let Score1 = document.querySelector('#score--0');
let Score2 = document.querySelector('#score--1');
let playing = 1;

const resetGame = function () {
  playing = 1;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('.dice').classList.add('hidden');
  currentValue1.textContent = 0;
  currentValue2.textContent = 0;
  Active = 'player1';
  player2Card.classList.remove('player--active');
  player1Card.classList.add('player--active');
  player1Card.classList.remove('player--winner');
  player2Card.classList.remove('player--winner');
};

resetGame();

//
const switching = function () {
  if (Active == 'player1') {
    Active = 'player2';
    player1Card.classList.remove('player--active');
    player1Current = 0;
    currentValue1.textContent = player1Current;
    player2Card.classList.add('player--active');
  } else {
    Active = 'player1';
    player2Card.classList.remove('player--active');
    player2Current = 0;
    currentValue2.textContent = player2Current;
    player1Card.classList.add('player--active');
  }
};

const holdingScore = function () {
  if (playing) {
    if (Active == 'player1') {
      player1_HS += player1Current;
      Score1.textContent = player1_HS;
      if (player1_HS >= 100) {
        playing = 0;
        player1Card.classList.remove('player--active');
        player1Card.classList.add('player--winner');
        Break();
      }
      switching();
    } else {
      player2_HS += player2Current;
      Score2.textContent = player2_HS;
      if (player2_HS >= 100) {
        playing = 0;
        player2Card.classList.remove('player--active');
        player2Card.classList.add('player--winner');
        Break;
      }
      switching();
    }
  }
};

const rollingDice = function () {
  if (playing) {
    diceNum = Math.trunc(Math.random() * 6 + 1);
    document.querySelector('.dice').src = `dice-${diceNum}.png`;
    document.querySelector('.dice').classList.remove('hidden');
    if (diceNum !== 1) {
      if (Active == 'player1') {
        player1Current += diceNum;
        currentValue1.textContent = player1Current;
      } else if (Active == 'player2') {
        player2Current += diceNum;
        currentValue2.textContent = player2Current;
      }
    } else {
      if (Active == 'player1') {
        player1Current = 0;
        currentValue1.textContent = player1Current;
      } else {
        player2Current = 0;
        currentValue2.textContent = player2Current;
      }
      switching();
    }
  }
};

rollBtn.addEventListener('click', rollingDice);
holdBtn.addEventListener('click', holdingScore);
document.querySelector('.btn--new').addEventListener('click', resetGame);
