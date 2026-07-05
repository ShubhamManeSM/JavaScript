const personObj = (firstName,lastName) => ({firstName: firstName, lastName: lastName })

console.log(personObj("Shubham","Mane"))


const stringObj = (str) => ({length: str.length, uppercase: str.toUpperCase()})

console.log(stringObj("hello"))


const personDetails = (firstName,lastName,age,phoneNumber) => ({
  fullName: `${firstName} ${lastName}`,
  age: age,
  phoneNumber: phoneNumber
})

console.log(personDetails("Shubham","Mane",23,1234-5678))


const concatenateWords = (str1,str2) => ({concatenation: `${str1} ${str2}`, charCount: str1.length + str2.length})

console.log(concatenateWords("Hello", "World"))


const calculateCircleProperties = (radius) => ({
  circumference: (2 * Math.PI * radius).toFixed(4),
  area: (Math.PI * radius * radius).toFixed(4)
})

console.log(calculateCircleProperties(5))


const calculateDifferenceAndQuotient = (a,b) => ({difference: a-b, quotient: a / b})

console.log(calculateDifferenceAndQuotient(10,2))


  const countWord = (sentence) => ({
    wordCount: sentence.trim().split(/\s+/).length
  });

console.log(countWord("JavaScript is fun"))


const calculateSquareAndCube = (num) => ({
  square: num * num,
  cube: num * num * num
})

console.log(calculateSquareAndCube(4))


const checkNumber = (num) => ({
  isPositive: num > 0,
  isNegative: num < 0
})

console.log(checkNumber(-7))
console.log(checkNumber(5))