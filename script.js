

const gameBoardModule = (function() {

  //cache DOM
  let boardArray = new Array(9);
  boardArray.fill('');
  let boardArrayPlaceholder = ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'O'];
  let cells = document.querySelectorAll('[data-cell]');
  let circleTurn = false;

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
  cells.forEach((cell) => {
    cell.addEventListener('click', placeMark);
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

  function placeMark(event) {
    let cell = event.target;
    let mark;

    if (!circleTurn) {
      mark = 'X';
    } else {
      mark = 'O';
    }

    if (cell.classList.contains('empty')) {
      cell.innerText = mark;
      cell.classList.add(mark);
      cell.classList.remove('empty');
    }

    if (checkWin(mark)) {
      console.log('win');
    };

    swapTurns();
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

  };

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


// Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

// Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!




// Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
// Start by just getting the computer to make a random legal move.
// Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
// If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!