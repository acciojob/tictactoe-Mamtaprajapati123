const form = document.getElementById('form');
const message = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');
let player1 = '';
let player2 = '';
let currentPlayer = 'x';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  player1 = document.getElementById('player-1').value;
  player2 = document.getElementById('player-2').value;
  message.textContent = `${player1}, you're up!`;
  form.style.display = 'none';
});

cells.forEach((

