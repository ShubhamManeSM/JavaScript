const areaOfRectangle = (length, width) => length * width
console.log(areaOfRectangle(4,5))


const isDivisible = (a, b) => a % b === 0
console.log(isDivisible(15,5))


const difference = (a,b) => a - b
console.log(difference(15,5))


const concatenateString = (str1, str2, str3) => str1 + str2 + str3
console.log(concatenateString("I ", "am ", "happy."))



function isBigger(a,b){
  return a > b
}
console.log("Is 2 bigger than 3?",isBigger(2,3))


const printProduct = (a,b) => a * b
console.log("Product of two numbers: ",printProduct(2,6))


const getGreeting = (greeting, name) => greeting + name
console.log(getGreeting("Hello ", "John"))

