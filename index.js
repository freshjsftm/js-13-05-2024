// Map  Set

const set = new Set();
set.add(7);
set.add(7);
set.add('7');
set.add(3 + 4);

console.log(set);

const numbers = [1, 2, 3, 1, 5, 4, 2, 3, 1, 7];
const uniqSetNumbers = new Set(numbers);
const uniqNumbers = [...uniqSetNumbers];
console.log(uniqNumbers);

const string = 'SyntaxError: Unexpected token const Unexpected token';
const word = 'subscribe';
console.log(new Set(word));
console.log(new Set(string.toLowerCase()))
console.log(new Set(string.split(' ')))

const dictionary = new Map();
dictionary.set('copy', 'копіювати');
dictionary.set('subscribe', 'підписатися');
dictionary.set('send', 'відправити');
dictionary.set('share', 'поділитися');
dictionary.set('add to cart', 'додати в корзину');
dictionary.set('zoom', 'збільшити');
dictionary.set('play', 'грати');

// const word = prompt('enter any word');
// if (dictionary.has(word)) {
//   console.log(dictionary.get(word));
// } else {
//   console.log(word);
// }

// const lang = prompt('1 - en, 2 - uk');

// switch (lang) {
//   case '1':
//   case 'en':
//     // console.log(...dictionary.keys());
//     dictionary.keys().forEach((key)=>console.log(key))
//     break;
//   case '2':
//   case 'uk':
//     dictionary.values().forEach((value)=>console.log(value));
//     break;
//   default:
//     break;
// }
