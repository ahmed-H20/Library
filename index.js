

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

for(let i = 0; i<myLibrary.length; i++){
    console.log(i);
}


let btnnewbook = document.querySelector("#btn-new-book");
btnnewbook.addEventListener("click",function(){
    let bookForm = document.querySelector("#bookform");
    bookForm.style.visibility="visible"
});