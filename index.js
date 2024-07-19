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
}
try {
  const user = new User('Anna');
  console.log(user);
} catch (error) {
  console.error(error);
}
console.log('code');
