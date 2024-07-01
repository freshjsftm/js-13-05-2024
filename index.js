// forEach - перебирає елементи масива і з кожним виконує колбек - НЕ ЗМІНЮЄ масив!!
const numbers = [1,2,3];
console.log(numbers);
// numbers.forEach((number, index, array)=>{
//   console.log(number, index, array);
// })
// numbers.forEach((number)=>{
//   console.log(number, number ** 2);
// })

// map - перебирає елементи масива і для кожного виконує колбек - а саме - повертає нове значення - НЕ ЗМІНЮЄ джерельний масив!! а ПОВЕРТАЄ новий масив з новими значеннями
const newArrayNumbers = numbers.map((elem) => elem * elem);
console.log(newArrayNumbers);
console.log(numbers);

// filter -  перебирає елементи масива і для кожного виконує колбек - а саме перевіряє значення в умовній конструкції і якщо конструкція правдива, то повертає значення в новому масиві. НЕ ЗМІНЮЄ джерельний масив!!
const evenNumbers = numbers.filter((item) => item%2 === 0 );
console.log(evenNumbers);
console.log(numbers);

// reduce - перебирає елементи масива і додає кожне значення до аккумулятора(в одну торбочку) НЕ ЗМІНЮЄ джерельний масив!! а повертає одне значення яке було накопичене в акумуляторі
const summa = numbers.reduce((accumulator, number)=>accumulator+number);
console.log(summa);
console.log(numbers);