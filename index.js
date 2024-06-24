const obj = {}; // new Object()
console.log(obj);

function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}
const UserPrototype = {
  getName() {
    return this.name;
  },
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  },
  getGender() {
    return this.isMale ? 'male' : 'female';
  },
};
//статична властивість
User.prototype = UserPrototype;

const user1 = new User('Alex', 20, true);
console.log(user1);

console.log(user1.getInfo());
console.log(user1.getGender());
const user2 = new User('Maria', 23, false);
console.log(user2.getInfo());
console.log(user2);
