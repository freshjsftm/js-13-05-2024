const user = {
  name: 'Bred',
}

const userProto = {
  say(){
    return `my name is ${this.name}`
  },
  walk(){
    return 'i am walking';
  }
}

user.__proto__ = userProto;


console.log(user);
console.log(user.say());
console.log(user.walk());


