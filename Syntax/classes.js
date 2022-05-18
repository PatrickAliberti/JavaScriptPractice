class Rectangle {
  // Constructor
  constructor(_w, _h) {
    console.log("yeet");

    this.width = _w;
    this.height = _h;
  }

  // Getters (Acessors)
  get area() { return this.width * this.height };

  // Setters (Mutators)
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  // Members
  printDescription() {
    console.log('I am a rectangle of ' + this.width + ' x ' + this.height);
  };

  // Static Members
  static equals(a, b) { return a.width * a.height == b.width * b.height }
}

// Inheritance
class Square extends Rectangle {
  constructor(_w, _c) {
    super(_w, _w);
    this.color = _c;
  }
}

const squares = [
  new Square(5, "red"),
  new Square(1, "blue"),
  new Square(3, "orange"),
];

function test(squares) {
  for (let square of squares) {
    square.printDescription();
  }
}

test(squares);