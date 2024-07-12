// Map  Set

function summa(...agrs){
  return args.reduce((sum, elem)=>sum+elem, 0)
}

const map = new Map();
map.set('word', ()=>{console.log('hi!');});
map.set(summa, 22);
map.set(20, null);
map.set(summa, 3333);

// map.delete(summa)

//  console.log(...map);
// console.log(map.size);
// console.log(map.get(summa));
// console.log(map.has(summa));

// map.forEach((value, key)=>console.log(value, key))

console.log(...map.keys());
console.log(...map.values());



const test = {
  props1: 45,
  Title: 'title object',
  555:1000,
  age: 33,
  1:'01'
}
// console.log(test);
for (const key in test) {
  // console.log(key, test[key]);
}

const array = [15,25,35];
// console.log(...array);
// array.forEach((elem)=>console.log(elem))
