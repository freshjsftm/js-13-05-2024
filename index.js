//reverse, sort

const numbers = [5, 172, 1, 10, 4, 2, 101, 22];

console.log(numbers);
// метод sort ЗМІНЮЄ!!! поточний масив
console.log(numbers.sort((a, b) => a - b)); //0  1  -1
console.log(numbers);

// console.log(numbers.sort((a, b) => b - a));
// console.log(numbers);

// метод reverse ЗМІНЮЄ!!! поточний масив
console.log(numbers.reverse());
console.log(numbers);