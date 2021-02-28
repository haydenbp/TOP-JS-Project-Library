//store books in an array
let myLibrary = [];
const newBtn = document.getElementById('addBook')
const popUp = document.getElementById('newBook')
const submitBtn = document.getElementById('submitForm')
const readBox = document.getElementById('readForm')


//hides/shows the new book form when new book buton is clicked
newBtn.addEventListener('click', ()=>{
  hideForm()
})

function hideForm(){
  popUp.classList.toggle('hide')
}
//create class for books
class Book{

  constructor(Title,Author,Pages,Read){

    this.Title = Title

    this.Author = Author

    this.Pages = Pages

    this.Read = Read
  }

}

myLibrary.push(new Book('The Hobbit','J.R.R Tolkien',303,true))

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



// creates new book from form data and adds to myLibrary array
function submitForm(){

  console.log(popUp.pages.value)

  if(popUp.title.value == '' || popUp.author.value == '' || popUp.pages.value == ''){

    alert('Please complete the form')

    return

  }

  if(popUp.pages.value != '' && !Number(popUp.pages.value)){

    alert('Please enter a number')

    return
  }
  

  myLibrary.push(new Book(popUp.title.value, popUp.author.value, popUp.pages.value, popUp.read.checked))

  console.log(popUp.title.value)

  hideForm()


}

//submits form data and adds renders new book
submitBtn.addEventListener('click', () =>{

  submitForm()

  render()

  

})


render()
