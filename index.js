const obj = {}; // new Object()
console.log(obj);

function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

//статична властивість
User.prototype.getName = function() {
  return this.name;
}
User.prototype.getInfo = function() {
  return `${this.name} is ${this.age} years old`;
}
User.prototype.getGender = function() {
    return this.isMale ? 'male' : 'female';
}

const user1 = new User('Alex', 20, true);
console.log(user1);

console.log(user1.getInfo());
console.log(user1.getGender());
const user2 = new User('Maria', 23, false);
console.log(user2.getName());
console.log(user2);
