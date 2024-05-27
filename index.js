// false
// undefined
console.log(Boolean(undefined)); //false
// null
console.log(Boolean(null)); //false
// ''  ""  ``
console.log(Boolean('')); //false
// 0  +0  -0
console.log(Boolean(0)); //false
// NaN  - помилка обчислення
console.log(Boolean(NaN)); //false


// ! NOT  інверсія
console.log(!true); //false
console.log(!false); //true

const str = '';
console.log(!str); //true  !false

console.log(!undefined); // !false -> true