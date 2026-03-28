console.log("A5.12_HW_2")
console.log("---- ---- ----")

const productsData = [
 { id: 101, name: "Laptop", price: 999.99, brand: "Dell", category: "Electronics", rating: 4.5 },
 { id: 102, name: "Smartphone", price: 599.99, brand: "Samsung", category: "Electronics", rating: 4.0 },
 { id: 103, name: "Running Shoes", price: 79.99, brand: "Nike", category: "Footwear", rating: 4.8 },
 { id: 104, name: "T-shirt", price: 19.99, brand: "Adidas", category: "Apparel", rating: 4.2 },
 { id: 105, name: "Coffee Maker", price: 49.99, brand: "Hamilton", category: "Kitchen Appliances", rating: 4.6 }
];

function getProduct(products){
  let highestPrice = products[0]
  for(let i = 0; i < products.length;i++){
    if(products[i].totalPrice > highestPrice.totalPrice){
      highestPrice = products[i]
    }
  }
  return highestPrice
}

function getElectornics(products){
  let count = 0
  for(let i = 0; i < products.length;i++){
    if(products[i].category === "Electronics"){
      count = count + 1
    }
  }
  return count
}

function getAveragePrice(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + products[i].price
  }
  return total / products.length
}

function getAverageRating(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].rating;
  }
  return (total / products.length);
}

function getHighestRatedProduct(products) {
  let highest = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].rating > highest.rating) {
      highest = products[i];
    }
  }
  return highest;
}

function getProductsUnder50(products) {
  let results = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < 50) {
      results.push(products[i]);
    }
  }
  return results;
}

function generateProductDetails(productsData){
  let product = getProduct(productsData)
  let electronicsCount = getElectornics(productsData);
  let avgPrice = getAveragePrice(productsData);
  let avgRating = getAverageRating(productsData);
  let topRated = getHighestRatedProduct(productsData);
  let under50 = getProductsUnder50(productsData);
  
  let detail = "======= Product Analysis =======\n"
  detail += "Most Expensive Product Details:\n"
  detail += "Name: " + product.name + "\n" 
  detail += "Price: $" + product.price + "\n" 
  detail += "Brand: " + product.brand + "\n" 
  detail += "Category: " + product.category + "\n" 
  detail += "Rating: " + product.rating + "\n" 
  detail += "---- ---- ----\n"

  detail += "\nTotals and Averages\n";
  detail += "Total Electronic Products: " + electronicsCount + "\n";
  detail += "Average Price: $" + avgPrice + "\n";
  detail += "Average Rating: " + avgRating + "\n";
  detail += "---- ---- ----\n";

  detail += "\nProduct with Highest Rating:\n"
  detail += "Name: " + topRated.name + "\n"
  detail += "Price: $" + topRated.price + "\n"
  detail += "Brand: " + topRated.brand + "\n"
  detail += "Category: " + topRated.category + "\n"
  detail += "Rating: " + topRated.rating + "\n"
  detail += "---- ---- ----\n"

  detail += "\nProducts with Price Less Than $50\n";
  for (let i = 0; i < under50.length; i++) {
    let und50 = under50[i];
    detail += "Name: " + und50.name + "\n";
    detail += "Price: $" + und50.price + "\n";
    detail += "Brand: " + und50.brand + "\n";
    detail += "Category: " + und50.category + "\n";
    detail += "Rating: " + und50.rating + "\n";
    detail += "---\n";
  }
  return detail
}

console.log(generateProductDetails(productsData))