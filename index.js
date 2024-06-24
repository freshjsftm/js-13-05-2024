function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}
function UserPrototype(){
  this.getName = function() {
    return this.name;
  }
  this.getInfo = function() {
    return `${this.name} is ${this.age} years old`;
  }
  this.getGender = function() {
    return this.isMale ? 'male' : 'female';
  }
}
//статична властивість
User.prototype = new UserPrototype();

const user1 = new User('Alex', 20, true);
console.log(user1);
console.log(user1.getInfo());
console.log(user1.getGender());
console.log(user1.getName());

