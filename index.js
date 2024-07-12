// Map  Set
// треба створити носу структуру, яка буде збурігати пари ключ-значення
// ключем буде ім'я студента
// значенням буде масив оцінок студента
// написати функції
// додає нового студента і порожній масив оцінок
// додає студенту нову оцінку

const studensWithGrade = new Map();
function addNewStudent(dictionary, studentName) {
  dictionary.set(studentName, []);
}

function addStudentNewGrade(dictionary, studentName, grade) {
  if (dictionary.has(studentName)) {
    const grades = dictionary.get(studentName);
    grades.push(grade)
    dictionary.set(studentName, grades);
  } else {
    dictionary.set(studentName, [grade]);
  }
}

function getAverageGradeStudent(dictionary, studentName){
  if(dictionary.has(studentName)){
    const grades = dictionary.get(studentName);
    const summaGrades = grades.reduce((sum, grade)=> sum+grade);
    return summaGrades/grades.length;
  }
}

addNewStudent(studensWithGrade, 'Alex');
addStudentNewGrade(studensWithGrade, 'Brad', 12);
addStudentNewGrade(studensWithGrade, 'Brad', 8);
addStudentNewGrade(studensWithGrade, 'Brad', 11);
addNewStudent(studensWithGrade, 'Anna')
addStudentNewGrade(studensWithGrade, 'Anna', 9);
addStudentNewGrade(studensWithGrade,'Bob',7)
console.log(getAverageGradeStudent(studensWithGrade, 'Brad').toFixed(2))
console.log(studensWithGrade);
