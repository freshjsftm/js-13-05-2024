// const number1 = prompt('enter first number', 5);
// const number2 = prompt('enter second number', 3);
// console.log(' number1 = ', number1, typeof number1);
// console.log(' number2 = ', number2, typeof number2);

// // + - concatenation
// const summa1 = number1 + number2; //53 - склеєні рядки
// alert('summa1 = ' + summa1);

// const summa2 = +number1 + +number2; //8
// alert('summa2 = ' + summa2);

// // Number() - приводить до типу число (number)
// const summa3 = Number(number1) + Number(number2); //8
// alert('summa3 = ' + summa3);

// const substruct = Number(number1) - Number(number2); //2
// alert(substruct);

// користувач послідовно вводить назву продукта і його ціну
// так треба ввести інформацію про мінімум 2 продукта
// вивести чек у вигляді, використовуючи один alert
/*
Ви купили:
молоко - 45грн
хліб - 23грн
------
до сплати - 68грн
*/

const productName1 = prompt('Enter name first product');
const productPrice1 = prompt('Enter price ' + productName1);
const productName2 = prompt('Enter name second product');
const productPrice2 = prompt('Enter price ' + productName2);

const totalPrice = Number(productPrice1) + Number(productPrice2);

const productInfo1 = productName1 + ' - ' + productPrice1 + 'грн\n';
const productInfo2 = productName2 + ' - ' + productPrice2 + 'грн\n';
const totalInfo = '-------\nдо сплати - ' + totalPrice + 'грн\n';

alert('Ви купили:\n' + productInfo1+productInfo2+totalInfo);

