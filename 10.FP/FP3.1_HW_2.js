const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];

const totalLength = stationeryWords.reduce((acc, str) => acc + str.length, 0);
console.log(totalLength)



const numbersArray = [1, 2, 3, 4, 5, 6];

const sumOfEvens = numbersArray.reduce(
  (sum, num) => (num % 2 === 0 ? sum + num : sum),
  0
);
console.log(sumOfEvens)


const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];

const oddCount = numsArr.reduce(
  (count, num) => count + (num % 2 !== 0 ? 1 : 0),
  0
);
console.log(oddCount)


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenOddCounts = nums.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.even += 1;
    } else {
      acc.odd += 1;
    }
    return acc;
  },
  { even: 0, odd: 0 }
);
console.log(evenOddCounts)


const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const posNegCounts = allNumns.reduce(
  (acc, num) => {
    if (num < 0) {
      acc.neg += 1;
    } else {
      acc.pos += 1;
    }
    return acc;
  },
  { pos: 0, neg: 0 }
);
console.log(posNegCounts)



const numPositive = [-2, 3, 4, 0, -5, 6];

const productNegatives = numPositive.reduce((product, num) => {
  return num < 0 ? product * Math.abs(num) : product;
}, 1);

console.log(productNegatives); 



const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"];

const result = wordsCaps.reduce((acc, word, index) => {
  const upperWord = word.toUpperCase();
  return index === 0 ? upperWord : acc + " " + upperWord;
}, "");

console.log(result); 


const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const results = allNumsArr.reduce((acc, num) => {
  if (num > 0 && num % 2 === 0) {
    acc.posEven += 1;
  } else {
    acc.others += 1;
  }
  return acc;
}, { posEven: 0, others: 0 });

console.log(results);


const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];

const sumNegativeOdd = numbersArr.reduce((sum, num) => {
  return (num < 0 && num % 2 !== 0) ? sum + num : sum;
}, 0);

console.log(sumNegativeOdd); 


const letters = ["a", "l", "p", "h", "a", "b", "e", "t"];

const word = letters.reduce((acc, letter) => acc + letter, "");

console.log(word);
