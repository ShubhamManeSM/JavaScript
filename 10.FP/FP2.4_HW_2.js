const items = [
  { id: 1, item: "Item 1", status: "In Sale" },
  { id: 2, item: "Item 2", status: "New Release" },
  { id: 3, item: "Item 3", status: "New Release" },
  { id: 4, item: "Item 4", status: "In Sale" },
  { id: 5, item: "Item 5", status: "In Sale" }
]

const itemListContainer = document.querySelector("#itemList")
const filterRadioButton = document.getElementsByName("item")

function renderItems(selectedItem){

  const filteredItem = selectedItem === 'all' ? items : items.filter(item => item.status === selectedItem)

  const itemListHTML = filteredItem.map(item => `
  <li>
  <strong>ID:</strong> ${item.id}<br>
  <strong>Item:</strong> ${ item.item}<br>
  <strong>Status:</strong> ${item.status}<br>
  <hr>
  </li>
  `)

  itemListContainer.innerHTML = itemListHTML.join('')
}

renderItems('all')

  filterRadioButton.forEach(radioBtn => {
    radioBtn.addEventListener('change',function(){
      renderItems(this.value)
    })
  })

