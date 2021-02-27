//store books in an array
let myLibrary = [];
const newBtn = getElementById('addBook')
const popUp = getElementById('popup')

//create class for books
class Book{

  constructor(Title,Author,Pages,Read){

    this.Title = Title

    this.Author = Author

    this.Pages = Pages

    this.Read = Read
  }

}

myLibrary.push(new Book('hobbit','tolkien',103,true))
myLibrary.push(new Book('hobbit','tolkien',101,true))
myLibrary.push(new Book('hobbit','tolkien',102,true))

console.log(myLibrary)

//function that adds book to library
function addBookToLibrary(Title,Author,Pages,Read){

  myLibrary.push(new Book(Title,Author,Pages,Read))

}
const bookShelf = document.getElementById('bookshelf')

//render function, creates book 
function createBook(bookInArray){
 
  const bookDiv = document.createElement('div')

  const titleDiv = document.createElement('div')

  const authorDiv = document.createElement('div')

  const pagesDiv = document.createElement('div')

  const readBtn = document.createElement('button')

  const deleteBtn = document.createElement('button')

  //create divs
  //book div
  bookDiv.classList = 'book'
  bookDiv.id = myLibrary.indexOf(bookInArray)
  bookShelf.appendChild(bookDiv)
  
  //title div
  titleDiv.classList = 'title'
  titleDiv.innerText = bookInArray.Title
  bookDiv.appendChild(titleDiv)
  
  //author div
  authorDiv.classList = 'author'
  authorDiv.innerText = bookInArray.Author
  bookDiv.appendChild(authorDiv)

  //pages /div
  pagesDiv.classList = 'pages'
  pagesDiv.innerText = `Pages Read: ${bookInArray.Pages}`
  bookDiv.appendChild(pagesDiv)

  //read button div
  readBtn.classList = 'readBtn'
  //checks if read or not
  if(bookInArray.Read == true){
    readBtn.innerText = 'Read'
    readBtn.classList = 'read'
  } else{
    readBtn.innerText = 'Not Read'
    readBtn.classList = 'notRead'
  }

  bookDiv.appendChild(readBtn)
  //changes read to not read and vice versa when clicked
  readBtn.addEventListener('click', () =>{
    bookInArray.Read = !bookInArray.Read
    console.log(bookInArray.read)
    render()
  })

  //delete button div

  deleteBtn.classList = 'deleteBtn'
  deleteBtn.innerText = 'Delete'
  bookDiv.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', () =>{

    myLibrary.splice(myLibrary.indexOf(bookInArray),1)

    console.log(myLibrary)

    render()

    

  })

}

//renders all books in myLibrary Array
function render(){

  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);}

  for(let i = 0; i < myLibrary.length; i++){

    createBook(myLibrary[i])
  }
}

//displays input form
popUp.addEventListener()


render()

  





  //create book div

  //create divs for title,author,pages

  //create button for read
    //event handler
  
  //create button for delete
    //event handler




//new book form that allows users to add books

  // stores entry to object

  // renders divs


