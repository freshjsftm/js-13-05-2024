// object

const user1 = {
  firstName:'Brad',
  lastName:'Pitt',
  age: 32,
  isMale: true,
}

// console.log(user1);
// console.log(user1.firstName, user1.age);

// створити об'єкт book з властивостями title, author, yearCreate, isReading

// const object = new Object({key:12})
// console.log(object);

const book = {
  title: 'It',
  author: 'Stiven King',
  yearCreate: 1982,
  isReading: false,
  getInfo(){
    return `${this.author} "${this.title}", ${this.yearCreate}`
  },
  "two words": 'value two words'
}

console.log(book.getInfo());
book["two words"] = 123123;
console.log(book["two words"]);
console.log(book["isReading"]);
console.log(book["title"]);
//add new property
book.pages = 845;
//delete property
delete book.pages;
