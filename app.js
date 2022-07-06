const cardContainer = document.querySelector("main");

let myLibrary = [
  {
    title: "When Panic Attacks",
    author: "David D. Burns",
    pages: 464,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

function addBookToLibrary() {
  const newBook = Book();
  myLibrary.push(book);
}

function displayBooks() {
  for (book of myLibrary) {
    cardContainer.appendChild(book);
  }
}

function newBook() {
  return;
}
