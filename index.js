const message = `Введи мову, якою хочеш спілкуватися:
українська - ua
англійська - en
польска - pl
іспанська - es
французька - fr
`;

const lang = prompt(message);

switch (lang) {
  case 'ua':
    alert('привіт');
    break;
  case 'en':
    alert('hi');
    break;
  case 'pl':
    alert('cześć');
    break; 
  case 'es':
    alert('hola');
    break;
  case 'fr':
    alert('bonjour');
    break;         
  default:
    alert('мова не підтримується');
    break;
}



// if (lang === 'ua') {
//   alert('привіт');
// } else if (lang === 'en') {
//   alert('hi');
// } else if (lang === 'pl') {
//   alert('cześć');
// } else if (lang === 'es') {
//   alert('hola');
// } else if (lang === 'fr') {
//   alert('bonjour');
// } else {
//   alert('мова не підтримується');
// }
