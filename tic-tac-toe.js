tic-tac-toe.js


window.addEventListener('DOMContentLoaded', function() {
    
    const squares = document.querySelectorAll('#board div');
    
   
    squares.forEach(square => {
      square.classList.add('square');
    });
  });
  