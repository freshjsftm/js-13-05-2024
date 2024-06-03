const userInput1 = prompt('Enter first number ');
const userInput2 = prompt('Enter second number ');
const number1 = Number(userInput1);
const number2 = Number(userInput2);
const operator = prompt('Enter operator: +, -, *, /, %  ');

switch (operator) {
  case '+': {
    const result = number1 + number2;
    alert(number1 + '+' + number2 + '=' + result);
    break;
  }
  case '-': {
    const result = number1 - number2;
    alert(number1 + '-' + number2 + '=' + result);
    break;
  }
  case '*': {
    const result = number1 * number2;
    alert(number1 + '*' + number2 + '=' + result);
    break;
  }
  case '/': {
    const result = number1 / number2;
    alert(number1 + '/' + number2 + '=' + result);
    break;
  }
  case '%': {
    const result = number1 % number2;
    alert(number1 + '%' + number2 + '=' + result);
    break;
  }
  default:
    alert('operator not exists');
    break;
}
