//string

const str1 = 'Cat aNd doG'; //user
const str2 = 'cat and dog'; //db
console.log(str1);

const str1UpperCase = str1.toUpperCase();

console.log(str1UpperCase);

if(str1.toLowerCase() === str2){
  console.log('equal');
}else{
  console.log('not equal');
}
