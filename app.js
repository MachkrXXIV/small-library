const bookShelf = document.querySelector("main");
const create = document.querySelector(".create");
const form = document.querySelector("form");
const formContainer = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".submit");
let existingBook = false;
let currentBookIndex = 0;

create.addEventListener("click", toggleForm);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formTitle = document.getElementById("title").value;
  const formAuthor = document.getElementById("author").value;
  const formPages = document.getElementById("pages").value;
  const formRead = document.getElementById("read").checked;

  if (!existingBook) {
    addBookToLibrary(formTitle, formAuthor, formPages, formRead);
  } else {
    myLibrary[currentBookIndex].title = formTitle;
    myLibrary[currentBookIndex].author = formAuthor;
    myLibrary[currentBookIndex].pages = formPages;
    myLibrary[currentBookIndex].read = formRead;
    displayBooks();
  }
  toggleForm();
});

// do form queries to add to library
let myLibrary = [
  {
    title: "When Panic Attacks",
    author: "David D. Burns",
    pages: 464,
    read: true,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

function appendToNode(infoNode, nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    infoNode.appendChild(nodeList[i]);
  }
}

function changeReadStatus(element) {
  if (element.target.classList.contains("stat")) {
    const index = element.target.closest(".card").getAttribute("data-index");
    if (myLibrary[index].read === true) {
      myLibrary[index].read = false;
    } else {
      myLibrary[index].read = true;
    }
  }
  displayBooks();
}

function displayBooks() {
  bookShelf.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
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

    const titleNode = document.createElement("h2");
    titleNode.classList.add("title");
    titleNode.textContent = book.title;

    const authorNode = document.createElement("h3");
    authorNode.classList.add("author");
    authorNode.textContent = `by ${book.author}`;

    const pagesNode = document.createElement("h3");
    pagesNode.classList.add("pages");
    pagesNode.textContent = book.pages;

    const readNode = document.createElement("h3");
    const changeStatIcon = document.createElement("i");
    readNode.classList.add("read");
    readNode.textContent = book.read
      ? "Status: Done"
      : "Status: Currently reading";
    changeStatIcon.className = book.read
      ? "stat fa-solid fa-square-check"
      : "stat fa-solid fa-book-open-reader";
    readNode.appendChild(changeStatIcon);

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

    bookShelf.appendChild(bookElement);
    bookElement.appendChild(heroNode);
    bookElement.appendChild(informationNode);
    bookElement.appendChild(actionNode);
    appendToNode(heroNode, graphicNodes);
    appendToNode(informationNode, inputNodes);
    iconListeners();
  }
}

function editBook(element) {
  if (element.target.classList.contains("fa-pen")) {
    toggleForm();
    const index = element.target.closest(".card").getAttribute("data-index");
    currentBookIndex = index;

    let formTitle = document.getElementById("title");
    let formAuthor = document.getElementById("author");
    let formPages = document.getElementById("pages");
    let formRead = document.getElementById("read");

    let title = myLibrary[index].title;
    let author = myLibrary[index].author;
    let pages = myLibrary[index].pages;
    let read = myLibrary[index].read;
    formTitle.value = title;
    formAuthor.value = author;
    formPages.value = pages;
    formRead.checked = read;
    existingBook = true;
  }
}

function iconListeners() {
  const trashIcon = document.querySelector(".fa-trash-can");
  const editIcon = document.querySelector(".fa-pen");
  const statusIcon = document.querySelector(".stat");

  statusIcon.addEventListener("click", (e) => changeReadStatus(e));
  trashIcon.addEventListener("click", (e) => removeBook(e));
  editIcon.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    editBook(e);
  });
}

function removeBook(element) {
  if (element.target.className === "fa-solid fa-trash-can") {
    const index = element.target.closest(".card").getAttribute("data-index");
    myLibrary.splice(index, 1);
  }
  displayBooks();
}

function toggleForm() {
  form.reset();
  overlay.classList.toggle("hidden");
  form.classList.toggle("hidden");
  formContainer.classList.toggle("hidden");
}

displayBooks();
iconListeners();
