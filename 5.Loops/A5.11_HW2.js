console.log("A5.11_HW2")
console.log("---- ---- ----")

const productsData = [
  {
    id: 1,
    productName: "Laptop",
    price2021: 19999,
    price2022: 18999,
    price2023: 15090,
    brand: "Dell",
    productRating: 5
  },
  {
    id: 2,
    productName: "Smartphone",
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: "Samsung",
    productRating: 4
  },
  {
    id: 3,
    productName: "Smartwatch",
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: "Apple",
    productRating: 4
  }
];

console.log("1.1")
console.log("---- ---- ----")

function printProductDetail(id){
  let product = getProductDetail(id)
    console.log("===== Details Card for " + product.productName + " =====\n" + "ID: " + product.id + "\n-----" + "\nDetails: " + "\n-----" + "\n" + "Price in 2021: " + product.price2021 + "\n" + "Price in 2022: " + product.price2022 + "\n" + "Price in 2023: " + product.price2023 + "\n" + "Brand: " + product.brand + "\n" + "Product Rating: " + product.productRating + "\n------ ------ ------")
  }

function getProductDetail(id){
  for(let i = 0; i < productsData.length;i++){
    if(productsData[i].id === id){
      return productsData[i]
    }
  }
}

printProductDetail(1)
printProductDetail(2)
printProductDetail(3)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

function getProductByYearPrice(yearPrice,minimumPrice){
  let result = []
  let year = "price" + yearPrice
  for(let i = 0; i < productsData.length;i++){
    if(productsData[i][year] >= minimumPrice){
      result.push(productsData[i])
    }
  }
  return result
}

console.log("Products with price in 2021 >= 25000")
console.log(getProductByYearPrice(2021,25000))

console.log("Products with price in 2023 >= 16000")
console.log(getProductByYearPrice(2023,16000))

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")


  let numOfProduct = 3
  for(let i = 0; i < productsData.length;i++){
  
    let totalPrice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023

    productsData[i].totalPrice = totalPrice

    productsData[i].avgPrice = totalPrice / numOfProduct
}

function averagePriceCutOff(avgPrice){
  for(let i = 0; i < productsData.length;i++){
    if(productsData[i].avgPrice > avgPrice){
      console.log("Average price of 3 years for " + productsData[i].productName + " is " + productsData[i].avgPrice)
    }
  }
}

averagePriceCutOff(12000)

console.log("---- ---- ----");
console.log("1.4")
console.log("---- ---- ----")

function getHighestAveragePrice(data){
  let highestAvgPrice = data[0].avgPrice
    for(let i = 1; i < productsData.length;i++){
      if(data[i].avgPrice > highestAvgPrice){
        highestAvgPrice = data[i]
      }
    }
    return highestAvgPrice
  }

  console.log(getHighestAveragePrice(productsData))
