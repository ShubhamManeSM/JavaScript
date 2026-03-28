console.log("A5.4_HW1");
console.log("---- ---- ----");

console.log("1.1")

function sumUptoN(n){
  let sum = 0
  for(let i = 1; i <= n; i++){
    sum = sum + i
  }
  return sum
}

console.log(sumUptoN(10))

console.log("---- ---- ----")

console.log("1.2")

function sumOfEvenNumbersUpToN(n){
  let sum = 0
  for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
      sum = sum + i
    }
  }
  return sum
}

console.log("Sum of even numbers: ",sumOfEvenNumbersUpToN(9))

console.log("---- ---- ----")

console.log("1.3")

function sumDivisibleByFiveAndSevenUptoN(n){
  let divisibleByFive = 0
  let divisibleBySeven = 0
  for(let i = 0; i <= n; i++){
    if(i % 5 === 0){
      divisibleByFive = divisibleByFive + i
    }
    if(i % 7 === 0){
      divisibleBySeven = divisibleBySeven + i
    }
  }
  console.log("Sum of numbers divisible by 5: ",divisibleByFive)
  console.log("Sum of numbers divisible by 7: ",divisibleBySeven)
}

sumDivisibleByFiveAndSevenUptoN(35)

console.log("---- ---- ----")

console.log("1.4")

function factorial(n){
  let result = 1
  for(let i = 1; i <= n; i++){
    result = result * i
  }
  return result
}

console.log("Factorial of 7: ",factorial(7))