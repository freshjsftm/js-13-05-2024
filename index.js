const secretNumber = 4;
//якщо введене число більше - секретне менше
//якщо введене число менше - секретне більше

while (true) {
  const userInput = prompt('enter number');  //qwerty
  const userNumber = Number(userInput);      //NaN   ->   Number.isNaN(NaN)

  if (userInput.trim() === '' || userInput === null || Number.isNaN(userNumber)) {
    alert('error! enter number');
  } else if (userNumber === secretNumber) {
    alert('you win!');
    break;
  } else if (userNumber > secretNumber) {
    alert('secret number less');
  } else {
    alert('secret number bigger');
  }
}
