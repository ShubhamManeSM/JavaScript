const books = [
  {id: 1, title: "Book1", price: 9.99, isFree: false},
  {id: 2, title: "Book2", price: 0.00, isFree: true},
  {id: 3, title: "Book3", price: 19.99, isFree: false},
  {id: 4, title: "Book4", price: 0.00, isFree: true}
]

const bookListContainer = document.querySelector("#bookList")
const isFreeCheckBox = document.querySelector("#isFreeCheckbox")

function renderBooks(filterOnlyFree){

  const filteredBooks = filterOnlyFree ? books.filter(book => book.isFree) : books
  
  const bookListHTML = filteredBooks.map(book =>
    `
    <li>
    <strong>ID:</strong> ${book.id}<br>
    <strong>Title:</strong> ${book.title}<br>
    <strong>Price:</strong> ${book.price}<br>
    </li>
    <hr>
    `
    )
  bookListContainer.innerHTML = bookListHTML.join('')
}
renderBooks(false)


isFreeCheckBox.addEventListener("change", function(){
  renderBooks(isFreeCheckBox.checked)
})