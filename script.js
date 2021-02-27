let myLibary = [];

const bookshelf = document.querySelector('#bookshelf');

const popUp = document.querySelector('#popup')

const newBookButton = document.querySelector('#addBook')

const submitButton = document.querySelector('#Submit')




newBookButton.addEventListener('click', () =>{

  popUp.style.display = 'block'}

)


//create book
class Book{ 

    constructor(name,author,pages,read){

      this['Title'] = name
      
      this['Author'] = author

      this['Pages'] = pages

      this['Read'] = read


    }


}
//add books to library array
function addBookToLibrary(name,author,pages,read){

    myLibary.push(new Book(name,author,pages,read))

}
addBookToLibrary('Hobbit','tolken',101,'Read')
addBookToLibrary('LOTR','tolken',305,'Not Read')





for(let i = 0; i < myLibary.length; i++){


  let book = document.createElement('div')

  let clearButton = document.createElement('button')

  clearButton.innerText = 'Delete'

  book.className = 'book'

  bookshelf.append(book)
  

  for(let key in myLibary[i]){

    if(key == 'Read'){

      let read = document.createElement('button')

      read.innerText = myLibary[i][key]

      book.appendChild(read)
    } 
    
    else{

      let bookDiv = document.createElement('div')
      
      bookDiv.className = key

      bookDiv.innerText += myLibary[i][key]



      book.appendChild(bookDiv)

    }

  }

  book.appendChild(clearButton)

  

  

  
}


submitButton.addEventListener('click', () =>{
  
const formAuthor = document.querySelector('#author').value

const formTitle = document.querySelector('#title').value

const formPages = document.querySelector('#pages').value

const formRead = document.querySelector('#read').value

let bookDiv = document.createElement('div')

popUp.style.display = 'none'



addBookToLibrary(formTitle,formAuthor,formPages,formRead)


console.log('reeee',myLibary[myLibary.length-1])

let book = document.createElement('div')

let clearButton = document.createElement('button')

clearButton.innerText = 'Delete'

book.className = 'book'

bookshelf.append(book)
    

  for(let key in myLibary[myLibary.length-1]){

    if(key == 'Read'){

      let read = document.createElement('button')
  
      read.innerText = myLibary[myLibary.length-1][key]
  
      book.appendChild(read)
    } 
    
    else{
  
      let bookDiv = document.createElement('div')
      
      bookDiv.className = key
  
      bookDiv.innerText += myLibary[myLibary.length-1][key]
  
  
  
      book.appendChild(bookDiv)
  
    }    
    book.appendChild(clearButton)
  }

  document.querySelectorAll('input').forEach(element => {

    element.value = ''
    
  });

  bookshelf.append(bookDiv)

  
}


)

let book = document.createElement('div')

let clearButton = document.createElement('button')

clearButton.innerText = 'Delete'

book.className = 'book'

bookshelf.append(book)


for(let key in myLibary[i]){

  if(key == 'Read'){

    let read = document.createElement('button')

    read.innerText = myLibary[i][key]

    book.appendChild(read)
  } 
  
  else{

    let bookDiv = document.createElement('div')
    
    bookDiv.className = key

    bookDiv.innerText += myLibary[i][key]



    book.appendChild(bookDiv)

  }

}

book.appendChild(clearButton)



//render function
//delete function
//show form
