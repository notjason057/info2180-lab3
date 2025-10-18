document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('#board div');
  let turn = 'X';
  const gameState = Array(9).fill(null);

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 5, 8], [2, 4, 6], [0, 4, 8], [1, 4, 7], [0, 3, 6]
  ];

  function verifyWinner(){
    for (const combo of winningPatterns) {
      const [a, b, c] = combo;
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
      if (!gameState[index]) {
        gameState[index] = turn;
        cell.textContent = turn;
        cell.classList.add(turn);

        // Switch turns
        turn = (turn === 'X') ? 'O' : 'X';
      }
    });

    cell.addEventListener('mouseover', () => {
      cell.classList.add('hover');
    });

    cell.addEventListener('mouseout', () => {
      cell.classList.remove('hover');
    });
  });
});

