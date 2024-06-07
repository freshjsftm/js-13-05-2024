// потрібно порахувати суму усіх чисел в діапазоні
// start - включно
// end - не включно

const start = 5;
const end = 10;

let summa =0;
for (let i = start; i < end; i++) {
  
  // console.log(i);
  summa += i; //summa = summa +i
  console.log(summa);
}
console.log('summa = ', summa);