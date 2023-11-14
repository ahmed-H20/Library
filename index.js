const myLibrary = [];

function Book(name, author, pages_num, read) {
    this.name = name;
    this.author = author;
    this.pages = pages_num;
    this.read = read;
}

function addBookToLibrary(name, author, pages_num, read) {
  let book = new Book (name, author, pages_num, read);
  myLibrary.push(book);
}