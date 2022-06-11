const gridContainer = document.querySelector('.grid');
let gridSquares = Array.from(document.querySelectorAll('.square'));
colorPicker = document.querySelector('#colorPicker');
let color = 'black'

// Color Picker
colorPicker.addEventListener('input', function() {
    color = colorPicker.value;
})

// Buttons
const clearBtn = document.querySelector('#clear');
const penBtn = document.querySelector('#pen');
const eraserBtn = document.querySelector('#eraser');
const setBtn = document.querySelector('#setGrid')

function makeGrid(gridSize) { //Makes new grid and replaces the old one
    let gridCount = 0
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    while (gridCount < (gridSize * gridSize)) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        document.querySelector('.grid').appendChild(gridSquare);
        gridCount++;
        gridSquare.addEventListener('mouseover', function colorSquare() {
            gridSquare.style.backgroundColor = color});
    }
    gridSquares = Array.from(document.querySelectorAll('.square'))
}

makeGrid(16); // Makes default grid

function paintSquare(square, paintColor) {
    square.style.backgroundColor = paintColor;
}

clearBtn.addEventListener('click', () => {
    for (let index = 0; index < gridSquares.length; index++) {
        paintSquare(gridSquares[index], 'white');
    }    
})

eraserBtn.addEventListener('click', () => {
    color = 'white'
})

penBtn.addEventListener('click', () => {
    color = 'black'
})

setBtn.addEventListener('click', () => {
    let gridSet = document.querySelector('#gridSize').value;
    if (gridSet > 1 && gridSet <= 100) {
        makeGrid(gridSet);
        document.querySelector('#warning').textContent = '';   

    } else {document.querySelector('#warning').textContent = 'Make sure input is a number between 2 and 100!'}    
})
