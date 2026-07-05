// arrow function that takes a string and returns an object

const createStringObj = str => ({text: str})

console.log(createStringObj("Hello"))

// arrow function that takes two numbers and returns an object with sum and product of those numbers

const calculateSumAndProduct = (a,b) => ({sum: a+b, product: a*b})

console.log(calculateSumAndProduct(2,3))


// arrow function that takes a person's name and age and returns an object with those properties

const createPersonObject = (name,age) => ({name: name, age: age})
console.log(createPersonObject("Alice", 24))