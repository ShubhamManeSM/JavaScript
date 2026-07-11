// reduce method

// sum of numbers in an array
const numbers = [1,2,3,4]
let sum = 0
for(let i = 0; i < numbers.length;i++){
  sum = sum + numbers[i]
}
console.log(sum)

const sumOfNumbers = numbers.reduce((accumlator, currentValue) => accumlator + currentValue ,0)
console.log(sumOfNumbers)


// concatenate into a single string

const stringArray = ["Hello", " World", "!"]

const combineString = stringArray.reduce((accumlator, currentValue) => accumlator + currentValue ,"")
console.log(combineString)


// find the maximum number in an array

const numbersArray = [10,5,8,20,15]

const maxNumber = numbersArray.reduce((accumlator, currentValue) => (currentValue > accumlator ? currentValue : accumlator),numbersArray[0])
console.log(maxNumber)


// occurrence of each word in an array
const fruits = ['apple', "banana", "apple", "orange", "kiwi", "kiwi"]

const wordCount = fruits.reduce((accumlator, currentValue) => {
  accumlator[currentValue] = (accumlator[currentValue] || 0) + 1
  return accumlator
},{})
console.log(wordCount)