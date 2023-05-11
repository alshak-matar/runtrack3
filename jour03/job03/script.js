const puzzleSize = 3; // 3x3 puzzle
const puzzleBoard = document.getElementById('puzzle-board');
const restartButton = document.getElementById('restart-button');
let puzzleTiles = [];
let emptyTile;
let isGameWon = false;

// Create puzzle tiles
for (let i = 1; i <= puzzleSize * puzzleSize - 1; i++) {
  const tile = document.createElement('div');
  tile.style.backgroundImage = `url('path/to/your/logo.png')`;
  tile.innerText = i;
  tile.addEventListener('click', () => moveTile(tile));
  puzzleTiles.push(tile);
  puzzleBoard.appendChild(tile);
}

// Initialize game
shuffleTiles();
renderBoard();

// Shuffle the puzzle tiles randomly
function shuffleTiles() {
  puzzleTiles.sort(() => Math.random() - 0.5);
}

// Render the current state of the puzzle board
function renderBoard() {
  puzzleBoard.innerHTML = '';
  puzzleTiles.forEach(tile => puzzleBoard.appendChild(tile));
}

// Check if the puzzle is solved
function checkIfGameWon() {
  for (let i = 0; i < puzzleTiles.length; i++) {
    if (parseInt(puzzleTiles[i].innerText) !== i + 1) {
      return false;
    }
  }
  return true;
}

// Handle tile movement
function moveTile(tile) {
  if (isGameWon) {
    return;
  }

  const tileIndex = puzzleTiles.indexOf(tile);
  const emptyIndex = puzzleTiles.indexOf(emptyTile);

  // Check if the clicked tile can be moved
  if (
    (Math.abs(tileIndex - emptyIndex) === 1 && Math.floor(tileIndex / puzzleSize) === Math.floor(emptyIndex / puzzleSize)) ||
    Math.abs(tileIndex - emptyIndex) === puzzleSize
  ) {
    puzzleTiles[tileIndex] = emptyTile;
    puzzleTiles[emptyIndex] = tile;
    emptyTile = tile;

    renderBoard();

    if (checkIfGameWon()) {
      isGameWon = true;
      restartButton.classList.add('green');
      puzzleBoard.classList.add('green');
      puzzleBoard.removeEventListener('click', moveTile);
      puzzleBoard.style.cursor = 'default';
    }
  }
}


function restartGame() {
  isGameWon = false;
  restartButton.classList.remove('green');
  puzzleBoard.classList.remove('green');
  puzzleBoard.innerHTML = '';
puzzleTiles = [];
emptyTile = null;

for (let i = 1; i <= puzzleSize * puzzleSize - 1; i++) {
const tile = document.createElement('div');
tile.style.backgroundImage = url('path/to/your/logo.png');
tile.innerText = i;
tile.addEventListener('click', () => moveTile(tile));
puzzleTiles.push(tile);
puzzleBoard.appendChild(tile);
}

shuffleTiles();
renderBoard();

puzzleBoard.addEventListener('click', moveTile);
puzzleBoard.style.cursor = 'pointer';
}

restartGame();
