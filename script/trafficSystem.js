const NUM_OF_COLS = 100;
const NUM_OF_ROWS = 60;

const GRID_ID = 'grid';

const getGrid = () => document.getElementById(GRID_ID);

const getCellId = (rowId, colId)=> rowId + '_' + colId ;

const createCell = function(grid, rowId, colId) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.id = getCellId(rowId, colId);
  grid.appendChild(cell);
};


const createGrid = function(){
  const grid = getGrid();
  for(let rowId = 0; rowId < NUM_OF_ROWS; rowId++){
    for(let colId = 0; colId < NUM_OF_COLS; colId++){
      createCell(grid, rowId, colId);
    }
  } 
}

const createCar = function(){
  const location = [[57,45],[58,45],[59,45]];
  location.forEach(([rowId, colId]) => {
  const cell = document.getElementById(`${rowId}_${colId}`)
  cell.classList.add('car');
  });
}

const main = function(){
  createGrid();
  createCar();
}