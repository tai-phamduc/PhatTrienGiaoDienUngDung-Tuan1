// Select necessary elements
const againButton = document.querySelector('.again');
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const guessInput = document.querySelector('.guess');

// Initial variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Function to reset the game
againButton.addEventListener('click', function () {
  // Restore score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore initial UI state
  messageElement.textContent = 'Start guessing...';
  numberElement.textContent = '?';
  scoreElement.textContent = score;
  guessInput.value = '';

  // Restore styles
  document.body.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
