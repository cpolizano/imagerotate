const puzzleContainer = document.querySelector('.puzzle-container');
const shuffleBtn = document.getElementById('shuffle');

const gridSize = 3;
const tileSize = 200;
let tiles = [];

// Create puzzle tiles
function createTiles() {
    tiles = [];
    puzzleContainer.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        const x = (i % gridSize) * tileSize;
        const y = Math.floor(i / gridSize) * tileSize;
        tile.style.backgroundPosition = `-${x}px -${y}px`;
        tile.dataset.rotation = 0;
        tile.style.transform = `rotate(0deg)`;
        tile.addEventListener('click', rotateTile);
        puzzleContainer.appendChild(tile);
        tiles.push(tile);
    }
}

// Rotate a tile
function rotateTile(e) {
    const tile = e.currentTarget;
    let rotation = (parseInt(tile.dataset.rotation) + 90) % 360;
    tile.dataset.rotation = rotation;
    tile.style.transform = `rotate(${rotation}deg)`;
}

// Shuffle puzzle
function shufflePuzzle() {
    tiles.forEach(tile => {
        const randomRotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
        tile.dataset.rotation = randomRotation;
        tile.style.transform = `rotate(${randomRotation}deg)`;
    });
}

shuffleBtn.addEventListener('click', shufflePuzzle);

// Initialize puzzle
createTiles();
shufflePuzzle();
