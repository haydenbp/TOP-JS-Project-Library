"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//store books in an array
var myLibrary = [];
var newBtn = document.getElementById('addBook');
var popUp = document.getElementById('newBook');
var popUpContainer = document.getElementById('popup');
var submitBtn = document.getElementById('submitForm');
var closeBtn = document.querySelector('.close');
var readBox = document.getElementById('readForm');
closeBtn.addEventListener('click', function () {
  hideForm();
}); //hides/shows the new book form when new book buton is clicked

newBtn.addEventListener('click', function () {
  hideForm();
});

function hideForm() {
  popUpContainer.classList.toggle('hide');
} //create class for books


var Book = function Book(Title, Author, Pages, Read) {
  _classCallCheck(this, Book);

  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
};

myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', 303, true)); //function that adds book to library

function addBookToLibrary(Title, Author, Pages, Read) {
  myLibrary.push(new Book(Title, Author, Pages, Read));
}

var bookShelf = document.getElementById('bookshelf'); //render function, creates book 

function createBook(bookInArray) {
  var bookDiv = document.createElement('div');
  var titleDiv = document.createElement('div');
  var authorDiv = document.createElement('div');
  var pagesDiv = document.createElement('div');
  var readBtn = document.createElement('button');
  var deleteBtn = document.createElement('button'); //create divs
  //book div

  bookDiv.classList = 'book';
  bookDiv.id = myLibrary.indexOf(bookInArray);
  bookShelf.appendChild(bookDiv); //title div

  titleDiv.classList = 'title';
  titleDiv.innerText = bookInArray.Title;
  bookDiv.appendChild(titleDiv); //author div

  authorDiv.classList = 'author';
  authorDiv.innerText = bookInArray.Author;
  bookDiv.appendChild(authorDiv); //pages /div

  pagesDiv.classList = 'pages';
  pagesDiv.innerText = "Pages: ".concat(bookInArray.Pages);
  bookDiv.appendChild(pagesDiv); //read button div

  readBtn.classList = 'readBtn'; //checks if read or not

  if (bookInArray.Read == true) {
    readBtn.innerText = 'Read';
    readBtn.classList = 'read';
  } else {
    readBtn.innerText = 'Not Read';
    readBtn.classList = 'notRead';
  }

  bookDiv.appendChild(readBtn); //changes read to not read and vice versa when clicked

  readBtn.addEventListener('click', function () {
    bookInArray.Read = !bookInArray.Read;
    console.log(bookInArray.read);
    render();
  }); //delete button div

  deleteBtn.classList = 'deleteBtn';
  deleteBtn.innerText = 'Delete';
  bookDiv.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', function () {
    myLibrary.splice(myLibrary.indexOf(bookInArray), 1);
    console.log(myLibrary);
    render();
  });
} //renders all books in myLibrary Array


function render() {
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }

  for (var i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
} // creates new book from form data and adds to myLibrary array


function submitForm() {
  console.log(popUp.pages.value);

  if (popUp.title.value == '' || popUp.author.value == '' || popUp.pages.value == '') {
    alert('Please complete the form');
    return;
  }

  if (popUp.pages.value != '' && !Number(popUp.pages.value)) {
    alert('Please enter a number');
    return;
  }

  myLibrary.push(new Book(popUp.title.value, popUp.author.value, popUp.pages.value, popUp.read.checked));
  console.log(popUp.title.value);
  popUp.reset();
  hideForm();
} //submits form data and adds renders new book


submitBtn.addEventListener('click', function () {
  submitForm();
  render();
});
render();
