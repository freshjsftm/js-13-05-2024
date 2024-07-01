logWord1('test before');
// function declaration
function logWord1(word){
  console.log(word);
}
logWord1('test');


// function expression
const logWord2 = function (word){
  console.log(word);
}
logWord2('new text');


// arrow function
const logWord3 = (word) => {
  return 12;
}
logWord3('qwerty');
