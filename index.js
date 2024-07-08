//reverse, sort
const number = 9546;
// const numToStr = String(number);
// const arrStr = numToStr.split('');
// const arrNums = arrStr.map((elem) => Number(elem));
// const summa = arrNums.reduce((accumulator, elem) => accumulator + elem);
// console.log(summa);

const result = String(number)
  .split('')
  // .map((elem) => Number(elem))
  .reduce((accumulator, elem) => Number(accumulator) + Number(elem));
console.log(result);

const minDigit = Number(String(number).split('').sort().at(0));
const maxDigit = Number(String(number).split('').sort().at(-1));

console.log(minDigit);
console.log(maxDigit);
