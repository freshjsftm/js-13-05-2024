const message = `Введи мову, якою хочеш спілкуватися:
1) українська - ua
2) англійська - en
3) польска - pl
4) іспанська - es
5) французька - fr
`;
// debugger
const lang = prompt(message);

switch (lang) {
  case 'ua':
  case '1': 
  case 'українська':  
    alert('привіт');
    break;
  case '2':
  case 'англійська':    
  case 'en':
    alert('hi');
    break;
  case 'pl':
  case '3': 
  case 'польська':
    alert('cześć');
    break; 
  case 'es':
  case '4': 
  case 'іспанська':
    alert('hola');
    break;
  case 'fr':
  case '5': 
  case 'французька':
    alert('bonjour');
    break;         
  default:
    alert('мова не підтримується');
    break;
}



// if (lang === 'ua' || lang==='1' || lang==='українська') {
//   alert('привіт');
// } else if (lang === 'en' || lang==='2' || lang==='англійська') {
//   alert('hi');
// } else if (lang === 'pl' || lang==='3' || lang==='польська') {
//   alert('cześć');
// } else if (lang === 'es' || lang==='4' || lang==='іспанська') {
//   alert('hola');
// } else if (lang === 'fr' || lang==='5' || lang==='французька') {
//   alert('bonjour');
// } else {
//   alert('мова не підтримується');
// }
