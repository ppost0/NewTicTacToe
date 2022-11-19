

const gameBoardModule = (function() {

  //cache DOM
  let cells = document.querySelectorAll('[data-cell]');
  let winScreen = document.getElementById('winningScreen');
  let winScreenMessage = document.querySelector('[data-winning-screen-text]');
  let restartButton = document.getElementById('restartButton');

  let boardArray = new Array(9);
  boardArray.fill('');
  let boardArrayPlaceholder = ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'O'];
  let circleTurn = false;
  let currentMark;
  let WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  //bind events
  restartButton.addEventListener('click', restartGame);
  cells.forEach((cell) => {
    cell.addEventListener('click', handleClick, {once: true});
  })



  //render
  render(boardArray);


  function render(arr) {
    let i = 0;
    cells.forEach((cell) => {
      cell.innerText = (arr[i]);
      cell.classList.add(arr[i] || 'empty');
      i++;
    })
  }

  function handleClick(event) {
    let cell = event.target;
    circleTurn ? currentMark = 'O' : currentMark = 'X';
    cell.innerText = currentMark;
    cell.classList.add(currentMark);
    cell.classList.remove('empty');


    if (checkWin(currentMark)) {
      winScreenMessage.innerText = `${currentMark} Wins!`
      console.log('win');
      endGame();
    } else if (checkDraw()) {
      winScreenMessage.innerText = `It's a draw!`;
      console.log('draw');
      endGame();
    } else {
      swapTurns();
    }

  }


  function swapTurns() {
    circleTurn = !circleTurn;
  }


  function checkWin(mark) {
    return WINNING_COMBINATIONS.some((combo) => {
      return combo.every((index) => {
        return cells[index].classList.contains(mark);
      } )
    })
  };


  function checkDraw() {
    return (!checkWin() && [...cells].every(cell => {
      return (cell.classList.contains('X') || cell.classList.contains('O'))}))
  };


  function endGame() {
    winScreen.classList.add('show');
  }


  function restartGame() {
    winScreen.classList.remove('show');
    cells.forEach((cell) => {
      cell.innerText = '';
      cell.classList.remove('X');
      cell.classList.remove('O');
      cell.classList.add('empty');
      circleTurn = false;
      cell.removeEventListener('click', handleClick);
      cell.addEventListener('click', handleClick, {once:true})
    })
  }

})()



const displayControllerModule = (function() {

  let testFunction = () => {console.log('Test of private function call in displayControllerModule')};

  return {testFunction};
})()



const createPlayer = (name, mark) => {

  const testFunction = () => {console.log('Test of private function call in createPlayer')};

  return {name, mark, testFunction};
};







// TO DO:

// startGame() function ?
// input for player names/ mark
// AI to play against




// Clean up the interface to allow players to put in their names, include a button to start/ the game




// Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
// Start by just getting the computer to make a random legal move.
// Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
// If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!