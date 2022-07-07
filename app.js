const bookShelf = document.querySelector("main");
const create = document.querySelector(".create");
const form = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".submit");

create.addEventListener("click", toggleForm);
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary;
});

// do form queries to add to library
let myLibrary = [
  {
    title: "When Panic Attacks",
    author: "David D. Burns",
    pages: 464,
  },
];

const book = new Book("a title", "some author", 250, true);
myLibrary.push(book);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

function addBookToLibrary() {
  let bookElement = document.createElement("div").classList.add("card");
  const title = document.getElementById("title").value;
  const titleNode = document.createElement("p").classList.add("title");
  const author = document.getElementById("author").value;
  const authorNode = document.createElement("p").classList.add("author");
  const pages = document.getElementById("pages").value;
  const pagesNode = document.createElement("p").classList.add("pages");
  const finished = document.getElementById("finished").checked;
  const finishedNode = document.createElement("p").classList.add("title");
  const informationNode = document
    .createElement("div")
    .classList.add("information");
  const nodes = [titleNode, authorNode, pagesNode, finishedNode];
  const book = new Book(title, author, pages, finished);
  appendToElement(informationNode, nodes);
  bookElement.appendChild(informationNode);
  bookShelf.appendChild(bookElement);
  myLibrary.push(book);
  console.log(title);
}

function appendToElement(infoNode, nodesList) {
  nodesList.forEach((e) => {
    infoNode.appendChild(e);
  });
}

function displayBooks() {
  for (book of myLibrary) {
    bookShelf.appendChild(book);
  }
}

function newBook() {
  return;
}

function toggleForm() {
  overlay.classList.toggle("hidden");
  form.classList.toggle("hidden");
}

let checkbox = document.querySelector("#read");
console.log(checkbox.checked);
