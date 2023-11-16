

const myLibrary = [];

function Book(name, author, pages_num, read) {
    this.name = name;
    this.author = author;
    this.pages = pages_num;
    this.read = read;
}

function addBookToLibrary() {
    let name = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages_num = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let book = new Book (name, author, pages_num, read);    
    myLibrary.push(book);
}

let bookForm = document.querySelector("#bookform");
let btnnewbook = document.querySelector("#btn-new-book");
btnnewbook.addEventListener("click",function(){    
    bookForm.style.visibility="visible";
});

document.querySelector("#bookform").addEventListener("submit", function(){
    event.preventDefault();
    addBookToLibrary();
    bookForm.style.visibility="hidden";
})