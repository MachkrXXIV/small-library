const bookShelf = document.querySelector("main");
const create = document.querySelector(".create");
const form = document.querySelector("form");
const formContainer = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".submit");

create.addEventListener("click", toggleForm);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  toggleForm();
  console.log("am submitting!");
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
  this.read = read;
}

function addBookToLibrary() {
  let bookElement = document.createElement("div");
  bookElement.classList.add("card");
  // const hero = document.createElement();
  const title = document.getElementById("title").value;
  const titleNode = document.createElement("h2");
  titleNode.classList.add("title");

  const author = document.getElementById("author").value;
  const authorNode = document.createElement("h3");
  authorNode.classList.add("author");

  const pages = document.getElementById("pages").value;
  const pagesNode = document.createElement("h3");
  pagesNode.classList.add("pages");

  const finished = document.getElementById("read").checked;
  const finishedNode = document.createElement("h3");
  finishedNode.classList.add("read");

  const informationNode = document.createElement("div");
  informationNode.classList.add("information");
  const nodes = [titleNode, authorNode, pagesNode, finishedNode];
  const book = new Book(title, author, pages, finished);

  console.log(finished.check);
  bookShelf.appendChild(bookElement);
  bookElement.appendChild(informationNode);
  informationNode.appendChild(titleNode);
  informationNode.appendChild(authorNode);
  informationNode.appendChild(pagesNode);
  informationNode.appendChild(finishedNode);
  myLibrary.push(book);
  console.log(title);
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
  form.reset();
  overlay.classList.toggle("hidden");
  formContainer.classList.toggle("hidden");
  console.log(form);
}
