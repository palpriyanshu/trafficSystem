const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class Signal {
  constructor(location) {
    this.location = location.slice();
    this.status = new Map([
      [RED, true],
      [YELLOW, false],
      [GREEN, false]
    ]);
  }

  get position() {
    return this.location.slice();
  }

  update() {
    this.status.set(RED, !this.status.get(RED));
    this.status.set(GREEN, !this.status.get(GREEN));
  }

  whichIsGlowing() {
    let glowingSignal;
    this.status.forEach((state, colour) => {
      if (state) {
        glowingSignal = this.position[colour];
      }
    });
    return glowingSignal;
  }
}
