let myLibrary = [];
let count = 0;

let button = document.querySelector("#submit");
button.addEventListener("click", e => {
    let counter = myLibrary.length;
    takeUserInput();
    if(myLibrary.length > counter){      //if a book has been added
        resetInputFields();
        addCardDiv(myLibrary[myLibrary.length-1]);
    }
});


function takeUserInput(){
    const title = document.querySelector("#book-title").value;
    const author = document.querySelector("#author-name").value;
    const date = document.querySelector("#publishing-date").value;
    if(!areInputFieldsEmpty()){
        const book = new Book(count, title, author, date);
        book.display();
        myLibrary.push(book);
        count++;
    }
    else
        console.log("One or more input fields are empty");
}

function resetInputFields(){
    let title = document.querySelector("#book-title");
    let author = document.querySelector("#author-name");
    let date = document.querySelector("#publishing-date");

    title.value = "";
    author.value = "";
    date.value = "";
    console.log("Input fields have been resetted");
}

function addCardDiv(book){
    let card = document.createElement("div");
    let container = document.querySelector(".container");
    const title_text = document.createElement("h2");
    card.classList.add("card");
    card.setAttribute("data", book.id);

    title_text.classList.add("card-text");
    title_text.textContent = "Book Title: " + book.title;
    card.append(title_text);

    let author_text = title_text.cloneNode();
    author_text.textContent = "Author: " + book.author;
    card.append(author_text);

    let date_text = author_text.cloneNode();
    date_text.textContent = "Date of publishing: " + book.date;
    card.append(date_text);


    let svg = document.createElement("img");
    svg.setAttribute("src", "./cancel_FILL0_wght400_GRAD0_opsz48.svg");
    svg.classList.add("cancel-button");
    card.append(svg);
    svg.addEventListener("click", e => {
        for(let i=0; i<myLibrary.length; i++)
            if(myLibrary[i].id === book.id)
                myLibrary.splice(i, 1);
        container.removeChild(e.target.parentElement);
    });

    container.append(card);
}

function areInputFieldsEmpty(){
    const title = document.querySelector("#book-title").value;
    const author = document.querySelector("#author-name").value;
    const date = document.querySelector("#publishing-date").value;
    return (title.length === 0 || date.length === 0 || author.length === 0);
}


function Book(id, title, author, date){
    this.id = id;
    this.title = title;
    this.author = author;
    this.date = date;
}


Book.prototype.display = function(){ 
    console.log("ID: " + this.id +" Book: " + this.title + ", Author: " + this.author + ", Date: " + this.date);
}