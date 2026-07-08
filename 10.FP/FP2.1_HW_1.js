const nums = [12,5,20,8,15,30]

const moreThanTen = nums.filter(num => num > 10)
console.log(moreThanTen)


const words = ["hello", "world", "apple", "orange", "banana"];

const wordContainingO = words.filter(word => word.includes("o"))
console.log(wordContainingO)


const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = numbers.filter(num => {
  if(num <= 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false
  for(let i = 3; i <= Math.sqrt(num); i++){
    if(num % i === 0) return false
  }
  return true
})

console.log(isPrime)


const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notMultiplyBy3 = threeMultiples.filter(num => num % 3 !== 0)
console.log(notMultiplyBy3)


const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notDivisible = numbs.filter(nums => nums % 2 !== 0 && nums % 3 !== 0)
console.log(notDivisible)


const wordsAlpha = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];

const filterUppercase = wordsAlpha.filter(aplha => aplha === aplha.toUpperCase())
console.log(filterUppercase)


const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const filterWords = wordsY.filter(word =>
 word[word.length - 1] !== "y")
console.log(filterWords)



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesOf2And3 = nums.filter(num => num % 2 === 0 && num % 3 === 0);
console.log(multiplesOf2And3);


const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];

const wordsWithYandU = feelingWords.filter(word => word.includes('y') && word.includes('u'));
console.log(wordsWithYandU);  


const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesOf5Or3 = newNums.filter(num => num % 5 === 0 || num % 3 === 0);
console.log(multiplesOf5Or3);  
