const cardContainer = document.querySelector("main");
const create = document.querySelector(".create");
const form = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");

create.addEventListener("click", toggleForm);

// do form queries to add to library
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
  const newBook = new Book();
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

function toggleForm() {
  overlay.classList.toggle("hidden");
  form.classList.toggle("hidden");
}

console.log(form);
