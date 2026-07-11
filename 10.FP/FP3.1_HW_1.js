const words = ["apple", "banana", "kiwi", "orange", "grape"];

const longestWord = words.reduce((acc,curr) => (curr.length > acc.length ? curr : acc),"")
console.log(longestWord)


const numbers = [10, 5, 8, 20, 15];

const findMaximum = numbers.reduce((acc, curr) => (curr > acc ? curr : acc) ,numbers[0])
console.log(findMaximum)


const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];

const totalLength = wordsLength.reduce((acc, curr) => acc + curr.length,0)
console.log(totalLength)


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = nums.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc,0)
console.log(evenNumbers)


const wordsCaps = ["hello", "world", "how", "are", "you"];

const capsWord = wordsCaps.reduce((acc,curr) =>{ const letters = curr.split('');
letters[0] = letters[0].toUpperCase()
  const caps = letters.join('')
  return acc === '' ? caps : acc + ' ' +caps
},'')
console.log(capsWord)


const numsAvg = [10, 15, 20, 25, 30];

const average = (() => {
const sum = numsAvg.reduce((acc,curr) => acc + curr, 0)
  return sum / numsAvg.length
})()

console.log(average)


const number = [1, 2, 3, 4, 5];

const sumOfSquares = numbers.reduce((acc, num) => acc + num * num, 0);

console.log(sumOfSquares); 


const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];

const wordCounts = stationeryWords.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCounts);


const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];

const letterCounts = wordsLetter.reduce((acc, word) => {
  const firstLetter = word[0];
  acc[firstLetter] = (acc[firstLetter] || 0) + 1; 
  return acc;
}, {});

console.log(letterCounts);


const numPositive = [-2, 3, 4, -5, 6];

const productOfPositives = numPositive.reduce((acc, num) => {
  if (num > 0) {
    return acc * num;
  }
  return acc;
}, 1); 

console.log(productOfPositives);

