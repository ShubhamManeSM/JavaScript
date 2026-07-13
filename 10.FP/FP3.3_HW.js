const items = [
  {id: 1, item: "Item 1", price: 10},
  {id: 2, item: "Item 2", price: 20},
  {id: 3, item: "Item 3", price: 15},
  {id: 4, item: "Item 4", price: 25}
]

const itemListContainer = document.querySelector("#itemList");
    const totalCostContainer = document.querySelector("#totalCost");
    const averageCostContainer = document.querySelector("#averageCost");

    const totals = items.reduce((acc, curr) => {
      acc.totalPrice += curr.price;

      const listItem = document.createElement("li");
      listItem.textContent = `${curr.item} - $${curr.price}`;
      itemListContainer.appendChild(listItem);

      return acc;
    }, {totalPrice: 0});

    const totalCost = totals.totalPrice;
    const averageCost = totalCost / items.length;

    totalCostContainer.textContent = `$${totalCost.toFixed(2)}`;
    averageCostContainer.textContent = `$${averageCost}`;