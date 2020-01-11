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

const drawCar = function(location){
    location.forEach(([rowId, colId]) => {
      const cell = getCell([rowId, colId])
      cell.classList.add('car');
    });
  };

const removeBack = function(location){
  const [rowId, colId] = location[0];
  const cell = getCell([rowId, colId])
  cell.classList.remove('car');
};  

const getCell = ([rowId, colId]) => document.getElementById(`${rowId}_${colId}`);

class Car{
  constructor(location){
    this.location = location;
  }

  moveCar(){
    const [rowId, colId] = this.location[this.location.length-1];
    this.location.shift(this.location[0])
    this.location.push([rowId-1, colId])
  }
}

const main = function(){
  createGrid();
  const location = [[59,45],[58,45],[57,45]];
  drawCar(location);
  const car = new Car(location);
  setInterval(() => { 
    removeBack(location)
    car.moveCar();
    drawCar(location);
  }, 200);
}