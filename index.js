const password = '123qwe';
const maxTry = 3;

for (let i = 0; i < maxTry; i++) {
  const userInputPass = prompt('Enter password');
  if (userInputPass === password) {
    alert('Welcome!');
    break;
  }
  alert('у вас лишилося ще ' + (maxTry - i - 1) + ' спроби');
}
