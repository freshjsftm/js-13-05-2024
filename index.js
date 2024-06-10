const number1 = 2;
const number2 = 7;
const result = number1 * number2;


while (true) {
  const userInput = prompt(`скільки буде 
  ${number1} * ${number2} 
  ?`);
  if (userInput === null || userInput.trim()==='') {
    alert('будь уважний!');
    continue;
  }
  if (Number(userInput) === result) {
    alert('Win! відповідь = ' + result);
    break;
  }
  alert('Спробуй ще!');
}
