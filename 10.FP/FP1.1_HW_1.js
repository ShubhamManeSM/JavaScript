const words = ["apple","banana","kiwi","orange","grape"]

const calculateLength = words.map((wordLength) => wordLength.length)
console.log(calculateLength)


const numbers = [1,2,3,4,5]

const square = numbers.map((num) => num * num)
console.log(square)


const fruits = ["apple", "banana", "kiwi", "orange", "grape"];

const fruitsUppercase = fruits.map((upper) => upper.toUpperCase())
console.log(fruitsUppercase)



const nums = [4, 9, 16, 25, 36];

const numRoot = nums.map((num) => Math.sqrt(num))
console.log(numRoot)


const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];

const addPrefix = prefixFruits.map((fruit) => `fruit-${fruit}`)
console.log(addPrefix)


const numbersArray = [1,2,3,4,5]

const addTenToArray = numbersArray.map((num) => num+10)
console.log(addTenToArray)


const numsArray = [1,2,3,4,5]

const squareNumber = numsArray.map((num) => num * num + num)
console.log(squareNumber)


const numsArr = [-5,3,-8,12,-1,6]

const convertArr = numsArr.map((convert) => Math.abs(convert))
console.log(convertArr)


const phrases = ["Hello", "How are you", "Goodbye"];

const appendPhrases = phrases.map((phrase) => `${phrase}!`)
console.log(appendPhrases)


const wordsCap = ["apple", "banana", "kiwi", "orange", "grape"];

const capitalizeThirdLetter = wordsCap.map((word) => { if(word.length < 3) return word;
return word.slice(0,2) + word.charAt(2).toUpperCase() + word.slice(3)
})
console.log(capitalizeThirdLetter)