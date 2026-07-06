const words = ["apple", "banana", "kiwi", "orange", "grape"];

const firstThreeChar = words.map((threeChar) => threeChar.slice(0,3))
console.log(firstThreeChar)


const nums = [1, 2, 3, 4, 5];

const calculateCube = nums.map((cube) => cube * cube * cube)
console.log(calculateCube)


const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];

const removingChar = fruitsArray.map((remove) => remove.slice(2))
console.log(removingChar)


const salaries = [5000, 7500, 12000, 3000, 9000];

const updatedSalary = salaries.map((salary) => salary + salary * 0.10)

console.log(updatedSalary)


const names = ["Alice", "Bob", "Charlie", "David", "Eva"];

const greetings = names.map((greet) => `Hello,${greet}`)
console.log(greetings)


const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];

const lengthOfSent = sentences.map((sentence) => sentence.length)
console.log(lengthOfSent)


const temperaturesCelsius = [0, 20, 37, -5, 10];

const convertToFahrenheit = temperaturesCelsius.map((convert) => (convert * 9/5) + 32)
console.log(convertToFahrenheit)


const prices = [50, 75, 120, 30, 90];

const discountedPrice = prices.map((price) => price - (price * 0.10))
console.log(discountedPrice)


const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];

const fixedNumbers = decimalNumbers.map((num) => num.toFixed(2))
console.log(fixedNumbers)


const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];

const lengthArray = namesArray.map((name) => `${name} ${name.length}`)
console.log(lengthArray)

