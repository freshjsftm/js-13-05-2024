const start = 15;
const end = 20;
const secretNumber = 17;

for (let i = start; i < end; i++) {
  if(i === secretNumber){
    continue;
    alert('after continue'); //цей рядок не виконається!!!
  }
  console.log(i);
}

// debugger
while(true){
  const userInput =  prompt('Enter number');
  if(userInput === null){
    alert('будь уважний!');
    continue;
  }
  if(Number(userInput) === secretNumber){
    alert('Win!');
    break;
  }
}
