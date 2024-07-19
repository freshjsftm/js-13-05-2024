class User {
  #login;
  constructor(login) {
    this.login = login;
  }
  set login(value) {
    if (typeof value !== 'string') {
      throw new TypeError('type must be string');
    }
    if (value.trim().length < 3 || value.trim().length > 15) {
      throw new RangeError('length 3..15');
    }
    this.#login = value;
  }
  get login() {
    return this.#login;
  }
  showHi() {
    return 'Hi, my login is ' + this.#login;
  }
  askQuetion() {
    return 'my quetion: ....?';
  }
}
// успадкування  extends
// Moderator   -login  -status
class Moderator extends User {
  #status;
  constructor(login, status) {
    super(login);  // User constructor
    this.status = status;
  }
  set status(value) {
    if (typeof value !== 'string') {
      throw new TypeError('must be string');
    }
    if (value !== 'main' && value !== 'simple') {
      throw new RangeError('must be: main or simple');
    }
    this.#status = value;
  }
  get status() {
    return this.#status;
  }
  showHi(){
    return super.showHi() + ', my status - '+ this.#status;
  }
  askQuetion(){
    return 'i`m moderator, ' + super.askQuetion();
  }
}
const moderator = new Moderator('Bob', 'main'); //'simple'
console.log(moderator);
console.log(moderator.showHi());
console.log(moderator.askQuetion());

try {
  const user = new User('Anna');
  console.log(user);
} catch (error) {
  console.error(error);
}

console.log('code');
