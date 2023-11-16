

const myLibrary = [];

function Book(name, author, pages_num, read) {
    this.name = name;
    this.author = author;
    this.pages = pages_num;
    this.read = read;
}

Book.prototype.readable = function(){
    this.read = !this.read;
}

function read(index){
    myLibrary[index].readable();    
    render();
}

function render() {
    let library = document.querySelector(".library .container");
    library.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookcard = document.createElement("div");
        bookcard.setAttribute("class", "card");
        bookcard.innerHTML= `
            <p>${book.name}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <button id="read" onclick="read(${i})" style="background-color: ${book.read ? "#22c55e": "#dc2626"}">${book.read ? "Readed" : "Not read yet"}</button>
            <button id="remove" onclick="remove(${i})">Remove</button>        
        `;        
        library.appendChild(bookcard);
    }
    
}

function remove(index){
    myLibrary.splice(index, 1);
    render();
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
    render();
})