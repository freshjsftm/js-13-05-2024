const userInput = prompt('Enter hour');
const userNumber = Number(userInput); //NaN

// перша помилка - користувач натиснув відміну
const error1 = userInput === null;
// друга помилка - користувач надіслав порожній рядок
const error2 = userInput === '';
// третя помилка - користувач замість цифр ввів літери
const error3 = Number.isNaN(userNumber);

if (error1 || error2 || error3) {
  alert('Error.\n' + userInput + ' - not a number!!!');
} else {
  if (userNumber >= 0 && userNumber <= 23) {
    alert('thanks');
    //
  } else {
    alert('Error.\n' + userInput + ' - not a hour!!!');
  }
}
