console.log("A5.7_HW2")
console.log("---- ---- ----")

const numbersArray = [33, 57, 24, 49, 52, 66];

console.log("1.1")
console.log("---- ---- ----")

function printOriginalArray(){
  console.log("Original Array:",numbersArray)
}

printOriginalArray()

console.log("---- ---- ----")
console.log("1.2")
function divideNumbersByThree(numbers){
  let newArray = []
  for(let i = 0; i < numbers.length; i++){
      newArray.push(numbers[i] / 3)
  }
  return newArray
}

console.log("Array with numbers Divided by 3:",divideNumbersByThree(numbersArray))

console.log("---- ---- ----")
console.log("1.3")

let searchNum = 24;
function findNumInArray(numbers,searchNum){
  for(let i = 0; i < numbers.length;i++){
    if(numbers[i] === searchNum){
      return true
    }  
  }
}

console.log("Num: ",searchNum,findNumInArray(numbersArray,searchNum))

console.log("---- ---- ----")
console.log("1.4")

function findLargestNumberDivisibleBy5(numbers){
  let largestNumber = 0
  for(let i = 0; i < numbers.length;i++){
    if(numbers[i] % 5 === 0 && numbers[i] > largestNumber){
      largestNumber = numbers[i]
    }
  }
  return largestNumber
}

console.log("Largest Number Divisible by 5:",findLargestNumberDivisibleBy5(numbersArray))