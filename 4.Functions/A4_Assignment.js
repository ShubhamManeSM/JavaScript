// Assignment
let product1 = "Laptop";
let price1 = 999;
let category1 = "Electronics";
let product2 = "Running Shoes";
let price2 = 799;
let category2 = "Footwear";
let product3 = "T-shirt";
let price3 = 199;
let category3 = "Clothing";

function getTotalPrice(){
  return price1 + price2 + price3
}

let discount = 0.1

function calculateDiscount(price,category,discount){
  if(category === "Electronics"){
    return price * (1 - discount) 
  }else{
    return price
  } 
}

let discountedPrice1 = calculateDiscount(price1, category1,discount);
let discountedPrice2 = calculateDiscount(price2, category2,discount);
let discountedPrice3 = calculateDiscount(price3, category3,discount);

let finalTotalPrice = discountedPrice1 + discountedPrice2 + discountedPrice3;


console.log("===== Cart Summary =====\n");

console.log(`Product 1: ${product1}`);
console.log(`Price of Product 1: $${price1}`);
if (category1 === "Electronics") {
  console.log(`Discount: ${discount}`);
} else {
  console.log("Discount: 0");
}
console.log(`Final Price of Product 1: $${discountedPrice1}\n`);


console.log(`Product 2: ${product2}`);
console.log(`Price of Product 2: $${price2}`);
if (category2 === "Electronics") {
  console.log(`Discount: ${discount}`);
} else {
  console.log("Discount: 0");
}
console.log(`Final Price of Product 2: $${discountedPrice2}\n`);


console.log(`Product 3: ${product3}`);
console.log(`Price of Product 3: $${price3}`);
if (category3 === "Electronics") {
  console.log(`Discount: ${discount}`);
} else {
  console.log("Discount: 0");
}
console.log(`Final Price of Product 3: $${discountedPrice3}\n`);


console.log(`Total Cart Price: $${finalTotalPrice}`);

