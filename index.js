class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Book.count++;
  }
  static count = 0;
  showInfo() {
    return `"${this.title}" ${this.author}`;
  }
}

class Reader {
  constructor(name) {
    this.name = name;
    this.id = Reader.count++;
  }
  static count = 0;
  showInfo() {
    return `Name = ${this.name}
      id = ${this.id}`;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.readers = [];
    this.booksAndReaders = [];
  }
  addBook(...book) {
    this.books.push(...book);
  }
  addReader(...reader) {
    this.readers.push(...reader);
  }
  addBookForReader(reader, book) {
    this.booksAndReaders.push({ idReader: reader.id, idBook: book.id });
  }
  showAllBooks(){
    this.books.forEach((elem)=>console.table(elem))
  }
}
const book1 = new Book('It', 'King');
const book2 = new Book('Autsider', 'King');
const user1 = new Reader('Brad');
const user2 = new Reader('Anna');
const library = new Library();
library.addBook(book1, book2);
library.addReader(user1, user2);
library.addBookForReader(user1, book2);
library.addBookForReader(user2, book1);
console.log(library);
library.showAllBooks()

// const book1 = new Book('It','King');
// console.log(book1.showInfo())
// const user = new Reader('Brad');
// console.log(user.showInfo())
