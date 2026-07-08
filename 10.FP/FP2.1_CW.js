// .filter()

const numbers = [1,2,3,4,5,6,7,8,9]

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)


const words = ["Apple","Mango","Banana","Orange"]
const longWords = words.filter(word => word.length > 5)
console.log(longWords)


// get an array with only positive numbers
const numbersArray = [2,-7,5,7,-8,-6,9]

const positiveNumberArray = numbersArray.filter(num => num > 0)
console.log(positiveNumberArray)


const fruits = ["apple", "kiwi", "orange", "grapes", "melon"]

const fruitsContainingA = fruits.filter(fruit => fruit.includes("a"))
console.log(fruitsContainingA)