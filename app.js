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
  let bookIndex = myLibrary.length - 1;
  bookElement.classList.add("card");
  bookElement.setAttribute(["data-index"], bookIndex);

  const heroNode = document.createElement("div");
  const bookCover = document.createElement("img");
  const starsNode = document.createElement("div");
  heroNode.classList.add("hero");
  bookCover.setAttribute("src", "images/fallback-bookcover.jpg");
  starsNode.classList.add("stars");
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    starsNode.appendChild(star);
  }

  const title = document.getElementById("title").value;
  const titleNode = document.createElement("h2");
  titleNode.classList.add("title");
  titleNode.textContent = title;

  const author = document.getElementById("author").value;
  const authorNode = document.createElement("h3");
  authorNode.classList.add("author");
  authorNode.textContent = author;

  const pages = document.getElementById("pages").value;
  const pagesNode = document.createElement("h3");
  pagesNode.classList.add("pages");
  pagesNode.textContent = pages;

  const read = document.getElementById("read").checked;
  const readNode = document.createElement("h3");
  readNode.classList.add("read");
  readNode.textContent = read ? "Status: Done" : "Status: Currently reading";

  const informationNode = document.createElement("div");
  informationNode.classList.add("information");

  const actionNode = document.createElement("div");
  const editIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");
  const icons = [editIcon, deleteIcon];
  actionNode.classList.add("actions");
  icons.forEach((icon) => {
    actionNode.appendChild(icon);
    icon.classList.add("fa-solid");
    if (icon === deleteIcon) {
      icon.classList.add("fa-trash-can");
    } else {
      icon.classList.add("fa-pen");
    }
  });

  const graphicNodes = [bookCover, starsNode];
  const inputNodes = [titleNode, authorNode, pagesNode, readNode];
  const book = new Book(title, author, pages, read);

  bookShelf.appendChild(bookElement);
  bookElement.appendChild(heroNode);
  bookElement.appendChild(informationNode);
  bookElement.appendChild(actionNode);
  appendToNode(heroNode, graphicNodes);
  appendToNode(informationNode, inputNodes);
  myLibrary.push(book);
}

function appendToNode(infoNode, nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    infoNode.appendChild(nodeList[i]);
  }
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
