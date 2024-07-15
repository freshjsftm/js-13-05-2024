// class  2015

//1
// function User(name, age){
//   this.name = name;
//   this.age = age;
// }
//2
// function UserProptotype(){
//   this.logName = function(){
//     console.log(this.name)
//   }
// }
//3
// User.prototype = new UserProptotype();


class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  logName() {
    console.log(this.name);
  }
}

//4
const user = new User('Alex', 23);
console.log(user);
user.logName();
