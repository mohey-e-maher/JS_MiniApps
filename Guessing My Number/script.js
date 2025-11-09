'use strict';

let score = 20;
let highScore = 0;
let status = '';
let SecretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = `${20}`;
  document.querySelector('.number').textContent = '?';
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});

// Check Button Functionality

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Incorrect Number !';
  } else if (guess == SecretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `correct Number, Great Work ✅`;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = `${highScore}`;
    }
    document.querySelector('.number').textContent = `${SecretNumber}`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
  } else if (guess > 20) {
    document.querySelector(
      '.message'
    ).textContent = `pick Number Between 1 and 20 only !!`;
  } else if (guess !== SecretNumber) {
    document.querySelector('.message').textContent =
      guess > SecretNumber
        ? `🔻 Too High, lower you guess Number`
        : `🔻 Too Low!!, Make your guess Higher`;
    score--;
    document.querySelector('.score').textContent = `${score}`;
    if (score == 0) {
      document.querySelector(
        '.message'
      ).textContent = `🔻 You Lose, Click Again to reset score`;
      document.querySelector('body').style.backgroundColor = '#b34747ff';
    }
  }
});
