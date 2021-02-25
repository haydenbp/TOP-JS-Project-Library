let myLibary = [];

class Book{

    constructor(name,author,pages){

      this.name = name
      
      this.author = author

      this.pages = pages


    }




}

function addBookToLibrary(name,author,pages){

    myLibary.push(new Book(name,author,pages))

}

addBookToLibrary('Hobbit','tolken',101)

console.log(myLibary)

const body = document.querySelector('#body');

console.log(body)

for(let i = 0; i < myLibary.length; i++ ){

  let bookDiv = document.createElement('div')

  for(let key in myLibary[i]){

    bookDiv.innerText += `${key}: ${myLibary[i][key]} ` + '\n'
    

    console.log(bookDiv.innerText)

  }

  body.appendChild(bookDiv)
}
