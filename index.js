// constructor
/**
 * 
 * @param {string} name 
 * @param {number} age 
 */
function User(name, age){
  this.name = name;
  this.age = age;
  this.getInfo = function(){
    return `${this.name} is ${this.age} years old`
  }
}

// instance
const user1 = new User('Fred', 12);
// console.log(user1.getInfo());
const user2 = new User('Anna', 15);
// console.log(user2.getInfo());

// створити функцію конструктор Phone 
// properties: brand, model, price
// method: getDetails 'brand model costs $price'
// створити інстанс 
// викликати метод в консолі



function Phone (brand, model, price){
  this.brand = brand;
  this.price = price;
  this.model = model;
  this.getDeteils = function(){
      return `${this.brand}, ${this.model}, ${this.price}`;
  }
}

// debugger
const phone1 = new Phone('Google','mm',51000);
console.log(phone1.getDeteils());

const phone2 = new Phone('Sony','xp', 16000);
console.log(phone2.getDeteils());