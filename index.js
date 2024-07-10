// ...  rest   spred

// rest - збирає окремі параметри (для яких не має власного імені) в один масив
// використовуємо для створення чогось нового
// повинен бути в кінці списка параметрів
function summa( ...args) {
  console.log(args); //args - array
  return args.reduce((accumulator, elem) => accumulator + elem, 0);
}
console.log(summa(1,4,3));

const numbers = [1, 5, 9, 3, 1];

// spred - розбирає масив на окремі елементи
// застосовуємо для чогось існуючого
console.log(summa(...numbers));
