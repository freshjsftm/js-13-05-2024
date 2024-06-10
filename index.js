// `${number1} * ${number2} = ${number1 * number2}`

// const number = 7;
// for(let i = 1; i<=10; i++){
//   console.log(`${number} * ${i} = ${number*i}`);
// }

for (let num1 = 1; num1 <= 10; num1++) {
  console.group(num1);
  for (let num2 = 1; num2 <= 10; num2++) {
    console.log(`${num1} * ${num2} = ${num1*num2}`);
  }
  console.groupEnd();
}
