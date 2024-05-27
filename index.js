// remainder  %

const number = 654;
const remainder = number % 2;
if (remainder === 0) {
  console.log('парне', 'even');
} else {
  console.log('непарне', 'odd');
}

// кратне - ділиться без остачі
// number чи кратне 7

const number7 = 654;
const remainder7 = number % 7;
if (remainder7 === 0) {
  console.log('кратне 7', 'multiply 7');
} else {
  console.log('не кратне 7', 'not multiply 7');
}

