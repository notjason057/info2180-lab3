document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('#board div');
  const statusDiv = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  let turn = 'X';
  const gameState = Array(9).fill(null);

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

  function verifyWinner() {
    for (const [a, b, c] of winningPatterns) {
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
        statusDiv.classList.add('you-won');
        return true;
      }
    }
    return false;
  }

  cells.forEach((cell, index) => {
    cell.classList.add('square');

    cell.addEventListener('click', () => {
      if (statusDiv.classList.contains('you-won') || gameState[index]) return;

      gameState[index] = turn;
      cell.textContent = turn;
      cell.classList.add(turn);


      if (verifyWinner()) return;

      turn = (turn === 'X') ? 'O' : 'X';
    });

    cell.addEventListener('mouseover', () => cell.classList.add('hover'));
    cell.addEventListener('mouseout',  () => cell.classList.remove('hover'));
  });

  newGameBtn.addEventListener('click', () => {
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('X', 'O', 'hover');
    });
    for (let i = 0; i < gameState.length; i++) gameState[i] = null;
    turn = 'X';
    statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusDiv.classList.remove('you-won');
  });
});


