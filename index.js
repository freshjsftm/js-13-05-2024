
// створити масив значеннями якого будуть імена 3 ваших друзів
const names = ['Neo','Alex'];
console.log(names.length);

// додати новий елемент в кінець масиву
names.push('Anna','Olga');
console.log(names);

// додати новий елемент на початок масиву
names.unshift('Max', 'Fred');
console.log(names);

// видалити елемент з кінця масиву
const lastName = names.pop();
console.log(lastName);
console.log(names);

// видалити елемент з початку масиву
const firstName = names.shift();
console.log(firstName);
console.log(names);
