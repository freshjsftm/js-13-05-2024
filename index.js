/**
 *
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function addTwoNumbers(number1 = 0, number2 = 0) {
  const summa = number1 + number2;
  return summa;
}

const result = addTwoNumbers(7, 2);
console.log(result);

console.log(addTwoNumbers(4, 9));

console.log(addTwoNumbers());

//написати функцію, яка приймає в якості параметра сторону квадарата і повертає розраховану площу

/**
 * розраховує площу квадрата
 * @param {number} side
 * @returns {number}
 */
function getAreaSquare(side) {
  const area = side * side;
  return area;
}

// написати функцію, яка приймає два числа - початок і кінець діапазону (старт включно, кінець НЕ включно) і повертає функція сумму усіх чисел цього діапазону
/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function summaDiapazonNumbers(start, end) {
  let summa = 0;
  for (let i = start; i < end; i++) {
    summa += i;
  }
  return summa;
}
console.log(summaDiapazonNumbers(1, 6));

