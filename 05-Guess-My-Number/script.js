'use strict';

/*
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/


const generateSecretNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const bodyElement = document.querySelector('body');

const displayMessage = (message) => {
    messageElement.textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!');
        
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');

        bodyElement.style.backgroundColor = '#60b347';
        numberElement.style.width = '30rem';
        numberElement.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (score === 0) {
        displayMessage('Game over!');

    } else if (guess !== secretNumber) {
        
        if (guess > secretNumber) {
            displayMessage('Too high');
        } else {
            displayMessage('Too low!');
        }

        score--;
        scoreElement.textContent = score;
    }
});


document.querySelector('.again').addEventListener('click', () => {
    secretNumber = generateSecretNumber();
    score = 20;
    
    document.querySelector('.guess').value = '';
    scoreElement.textContent = score;
    numberElement.textContent = '?';
    numberElement.style.width = '15rem';
    bodyElement.style.backgroundColor = '#222';
    messageElement.textContent = "Start guessing...";
});
