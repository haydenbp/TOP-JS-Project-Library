let myLibary = [];

const body = document.querySelector('#booklist');

const popUp = document.querySelector('#popup')

const newBookButton = document.querySelector('#addBook')

const submitButton = document.querySelector('#Submit')



newBookButton.addEventListener('click', () =>{

  popUp.style.display = 'block'}

)



class Book{

    constructor(name,author,pages,read,notes){

      this['Title'] = name
      
      this['Author'] = author

      this['Pages'] = pages

      this['Read'] = read

      this['Notes'] = notes

    }


}

function addBookToLibrary(name,author,pages,read,notes){

    myLibary.push(new Book(name,author,pages,read,notes))

}
addBookToLibrary('Hobbit','tolken',101,'yes','good')
addBookToLibrary('LOTR','tolken',305,'yes','good')

console.log(myLibary)



console.log(body)

for(let i = 0; i < myLibary.length; i++ ){

  let bookDiv = document.createElement('div')

  let button = document.createElement('button')

  button.innerText = 'Delete'

  for(let key in myLibary[i]){

    bookDiv.innerText += `${key}: ${myLibary[i][key]} ` + '\n'
    

    console.log(bookDiv.innerText)

  }

  body.append(bookDiv)

  bookDiv.appendChild(button)
}


submitButton.addEventListener('click', () =>{
  
const formAuthor = document.querySelector('#author').value

const formTitle = document.querySelector('#title').value

const formPages = document.querySelector('#pages').value

const formRead = document.querySelector('#read').value

const formNotes = document.querySelector('#notes').value

let bookDiv = document.createElement('div')

popUp.style.display = 'none'



addBookToLibrary(formTitle,formAuthor,formPages,formRead,formNotes)


console.log('reeee',myLibary[myLibary.length-1])
    

  for(let key in myLibary[myLibary.length-1]){

  bookDiv.innerText += `${key}: ${myLibary[myLibary.length-1][key]} ` + '\n'
    

  }

  document.querySelectorAll('input').forEach(element => {

    element.value = ''
    
  });

  body.append(bookDiv)

  
}


)