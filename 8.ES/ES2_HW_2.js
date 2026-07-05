const checkNumberOdd = (num) => num % 2 !== 0
console.log(checkNumberOdd(2))

const calculateString = (str) => str.length;
console.log(calculateString("Hello World"))

const capitalizeString = (str) => str.toUpperCase()
console.log(capitalizeString("hello world"))

const currentDate = () => new Date().toLocaleDateString()
console.log(currentDate())

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

console.log(getCurrentTime());


const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9
console.log(fahrenheitToCelsius(98))

const isEmptyString = (str) => str === "";
console.log(isEmptyString("Hello"))
console.log(isEmptyString(""))


const getRandomNumber = () => Math.floor(Math.random() * 30)
console.log(getRandomNumber())


const squareRoot = () => Math.sqrt(Math.floor(Math.random() * 100) + 1)
console.log(squareRoot(4))


const toLowerCase = (str) => str.toLowerCase()
console.log(toLowerCase("HELLO"))
console.log(toLowerCase("JAVASCRIPT"))
