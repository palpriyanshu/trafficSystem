const NUM_OF_COLS = 100;
const NUM_OF_ROWS = 60;

const GRID_ID = 'grid';

const getGrid = () => document.getElementById(GRID_ID);

const getCellId = (rowId, colId) => rowId + '_' + colId;

const createCell = function(grid, rowId, colId) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.id = getCellId(rowId, colId);
  grid.appendChild(cell);
};

const createGrid = function() {
  const grid = getGrid();
  for (let rowId = 0; rowId < NUM_OF_ROWS; rowId++) {
    for (let colId = 0; colId < NUM_OF_COLS; colId++) {
      createCell(grid, rowId, colId);
    }
  }
};

const draw = function(car) {
  car.position.forEach(([rowId, colId]) => {
    const cell = getCell([rowId, colId]);
    cell.classList.add(car.type);
  });
};

const drawSignal = function(signal) {
  const colour = ['red', 'yellow', 'green'];
  signal.position.forEach(([rowId, colId], index) => {
    const cell = getCell([rowId, colId]);
    cell.classList.add(colour[index]);
  });
};

const removeBack = function() {
  const cell = document.querySelectorAll('.car')[2];
  cell.classList.remove('car');
};

const eraseSignal = function() {
  const cell = document.querySelector('.red');
};

const getCell = ([rowId, colId]) =>
  document.getElementById(`${rowId}_${colId}`);

class Car {
  constructor(location, model) {
    this.location = location.slice();
    this.model = model;
  }

  get position() {
    return this.location.slice();
  }

  get type() {
    return this.model;
  }

  moveCar() {
    const [rowId, colId] = this.location[this.location.length - 1];
    this.location.shift(this.location[0]);
    this.location.push([rowId - 1, colId]);
  }
}

class Signal {
  constructor(location) {
    this.location = location.slice();
  }

  get position() {
    return this.location.slice();
  }
}

const initSignals = function() {
  const signal1 = [
    [10, 20],
    [11, 20],
    [12, 20]
  ];
  const signal2 = [
    [50, 20],
    [51, 20],
    [52, 20]
  ];
  const signal3 = [
    [10, 80],
    [11, 80],
    [12, 80]
  ];
  const signal4 = [
    [50, 80],
    [51, 80],
    [52, 80]
  ];
  return [signal1, signal2, signal3, signal4];
};

const setUp = function(car, signals) {
  signals.forEach(signal => {
    drawSignal(signal);
  });
  draw(car);
};

updateSignals = function(signals) {
  const [signal1] = signals;
  let count = 0;
  setInterval(() => {
    ++count;
    if (count === 5) {
      count = 0;
      signal1.update();
    }
    eraseSignal(signal1);
    drawSignal(signal1);
  }, 1000);
};

const main = function() {
  createGrid();
  const carLocation = [
    [59, 45],
    [58, 45],
    [57, 45]
  ];

  const locations = initSignals();
  const types = ['red', 'yellow', 'green'];
  const signals = locations.map((location, index) => {
    return new Signal(location, types[index]);
  });

  const car = new Car(carLocation, 'car');
  setUp(car, signals);
  setInterval(() => {
    removeBack();
    car.moveCar();
    draw(car);
  }, 200);

  updateSignals(signals);
};
