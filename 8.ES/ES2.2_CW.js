// Arrow functions with no params
// arrow function that generates random numbers between 1 to 10

const getRandomNumber = () => Math.floor(Math.random() * 10)
console.log(getRandomNumber())


// arrow function that current date

const getCurrentDate = () => new Date().toLocaleDateString()
console.log(getCurrentDate())

// arrow function that returns a greeting

const getGreeting = () => "Hello, Welcome to neoG Camp!"
console.log(getGreeting())


// Arrow functions with one params
// arrow function to get the square of num

const getSquareValue = (num) => num ** 2
console.log(getSquareValue(2))

// arrow fucntion to check if a number is positive

const isPositive = num => num > 0
console.log(isPositive(3))
console.log(isPositive(-2))

// arrow function to check if the number is even

const isEven = (num) => num % 2 === 0
console.log(isEven(4))
console.log(isEven(5))

