//string

const userName = '      bRad     '; // Brad

const userNameTrim = userName.trim().toLowerCase();
console.log(userNameTrim);
const firstLetter = userNameTrim.charAt(0).toUpperCase();
console.log(firstLetter);
const lastLetters = userNameTrim.slice(1);
console.log(lastLetters);

const finallyUserName = firstLetter + lastLetters;
console.log(finallyUserName);

// користувач вводить ім'я для змінної - якщо воно починається з цифри ми повторюємо ввод

//const userNameVariable = ' 4qwerty '
//прибрати пробіли trim
//отримати код першого символа charCodeAt(0)
//порівняти код з діапазоном 48-57 включно

while (true) {
  const userNameVariable = prompt("ім'я для змінної");
  const codeFirstSymbol = userNameVariable.trim().charCodeAt(0);
  if (codeFirstSymbol < 48 || codeFirstSymbol > 57) {
    break;
  }
}
