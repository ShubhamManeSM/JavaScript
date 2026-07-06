// map() method

// multiplying array with 2
const numbers = [1,2,3,4,5]

const numbersMultipliedByTwo = numbers.map((num) =>num * 2)
console.log(numbersMultipliedByTwo)


// doubling the array
const numbersArray = [2,4,5,6]
const doubleNumbersByArray = numbersArray.map((num) => num * num)
console.log("Doubled Array: ",doubleNumbersByArray)


// capitalize first character of each fruit
const wordsArray = ["apple","mango","orange","grapes"]

const capitalizeWordsArray = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
console.log(capitalizeWordsArray)


// change numbers array to strings

const numericArray = [1,2,3,4,5]

const stringArray = numericArray.map((num) => num.toString())
console.log("String Array: ",stringArray)