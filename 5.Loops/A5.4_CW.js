console.log("A5.4_CW");
console.log("---- ---- ----");

console.log("1.1");
function sumUptoN(n){
  let sum = 0
  for(let i = 1; i <= n; i++){
    sum = sum + i
  }
  return sum
}

console.log(sumUptoN(5))

console.log("---- ---- ----");

console.log("1.2")
function sumOfOddNumbersUptoN(n){
  let sum = 0
  for(i = 1; i <= n; i++){
    if(i % 2 != 0){
      sum = sum + i
    }
  }
  return sum
}

console.log(sumOfOddNumbersUptoN(7))

console.log("---- ---- ----")

console.log("1.3")
function sumDivisibleByThreeAndSeven(n){
  let sumOfNumbersDivisibleByThree = 0
  let sumOfNumbersDivisibleBySeven = 0
  for(i = 1; i <= n; i++){
    if(i % 3 === 0){
      sumOfNumbersDivisibleByThree = sumOfNumbersDivisibleByThree + i
    }
    if(i % 7 === 0){
      sumOfNumbersDivisibleBySeven = sumOfNumbersDivisibleBySeven + i
    }
  }
  console.log("Sum of numbersDivisible by 3:",sumOfNumbersDivisibleByThree)
  console.log("Sum of numbersDivisible by 7:",sumOfNumbersDivisibleBySeven)
}

sumDivisibleByThreeAndSeven(21)

console.log("---- ---- ----");

console.log("1.4")
function factorial(n){
  let result = 1
  for(let i = 1; i <= n; i++){
    result = result * i
  }
  return result
}

console.log(factorial(5))