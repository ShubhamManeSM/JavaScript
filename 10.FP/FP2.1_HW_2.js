const nums = [12, 5, 20, 7, 8, 15, 30];

const evenNums = nums.filter((num) => num % 2 === 0)
console.log(evenNums)


const words = ["kiwi", "mango", "apple", "orange", "banana"];

const greaterWord = words.filter((word) => word.length > 5)
console.log(greaterWord)


const word = ["Sun", "Moon", "Star", "Planet", "Saturn"];

const newWord = word.filter((start) => start.startsWith("S"))
console.log(newWord)


const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplication = threeMultiples.filter((multiply) => multiply % 3 !== 0)
console.log(multiplication)


const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const isDivisible = numbs.filter((div) => div % 7 === 0 && div % 3 === 0)
console.log(isDivisible)


const alphaWords = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];

const lowerCase = alphaWords.filter((fruit) => fruit === fruit.toLowerCase())
console.log(lowerCase)


const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const wordsA = wordsY.filter((word) => !word.includes("a"))
console.log(wordsA)


const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiples2or3 = numsOnetoTen.filter((multiply) => multiply % 2 === 0 || multiply % 3 === 0)
console.log(multiples2or3)


const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];

const includesYAndA = feelingWords.filter((word) => word.includes("y") || word.includes("a"))
console.log(includesYAndA)


const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];

const filterNum = newNums.filter((num) => num > 20 && num < 40)
console.log(filterNum)
