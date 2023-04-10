let mylibrary = [];

//definirea clasei

class Book {
constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}}



function render() {
    let library = document.querySelector(".library");
      library.innerHTML="";

    for(let i=0; i < mylibrary.length; i++) {
        let book = mylibrary[i];
        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "book-card")
        bookElement.innerHTML = (
        `<h3>${book.title}</h3> 
         <h4>${book.author }</h4>  
         <p><strong>${book.pages + " pagini"}</strong></p>
        <p><strong>${book.read ? "- Carte citita" : "- Carte necitita"}</strong></p>
        <button class="toggle" onclick="toggleRead(${i})">Change Read Status</button>
        <button class="remove-button" onclick="removeBook(${i})">Remove Book</button>`)
        
        library.appendChild(bookElement);
    }
}


function removeBook(index) {
    mylibrary.splice(index, 1);
    render();
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;}


function toggleRead(index){
    mylibrary[index].toggleRead();
    render()
}

//alipire la DOM, creare obiect nou pe baza constructorului

function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title,author,pages,read);
    mylibrary.push(newBook);
   render()
}


//creare pop-up form

let newBookBtn = document.getElementById("new-book");

newBookBtn.addEventListener("click", function(){
    let form = document.getElementById("new-book-form")
    form.style.display = "flex";
})


//initire constructor addBookToLibrary() pe baza unui event (submit)

document.querySelector("#new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();

}
)