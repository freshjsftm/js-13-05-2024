class Square {
  //private - можна користуватися лише в межах класу
  #side;
  constructor(side) {
    // викликаємо setter
    this.side = side;
  }
  // setter - встановити значення властивісті
  set side(value) {
    //number >0
    if (typeof value !== 'number') {
      throw new TypeError('type must be number!');
    }
    if (value <= 0) {
      throw new RangeError('value mast be positive');
    }
    this.#side = value;
  }
  // getter - отримати значення властивості
  get side() {
    return this.#side;
  }
  getArea() {
    return this.#side ** 2;
  }
}


///////////////////////////////
const square = new Square(7);
// викликаємо setter
square.side = 3;
// викликаємо getter
console.log(square.side);
// square.side = '!!!!';
console.log(square.getArea());
