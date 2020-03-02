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
