document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('#board div');
  let turn = 'X';
  const gameState = Array(9).fill(null);

  cells.forEach((cell, index) => {
    cell.classList.add('square');

    cell.addEventListener('click', () => {
      if (!gameState[index]) {
        gameState[index] = turn;
        cell.textContent = turn;
        cell.classList.add(turn);

        // Switch turns
        turn = (turn === 'X') ? 'O' : 'X';
      }
    });
  });
});
