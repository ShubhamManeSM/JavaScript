console.log("A5.4_HW2")
console.log("---- ---- ----")

console.log("1.1")

function averageOfNumbersUptoN(n){
  let sum = 0
  for(let i = 1; i <= n; i++){
    sum = sum + i
  }
  let average = sum/n
  return average
}

console.log("The average of numbers from 1 to 10: ",averageOfNumbersUptoN(10))

console.log("---- ---- ----")

console.log("1.2")

function sumOfNumbersGreaterThanSixUptoN(n){
  let number = 0;
  for(let i = 1; i <= n; i++){
    if(i > 6){
      number = number + i
    }
  }
  return number
}

console.log("The sum of numbers is: ",sumOfNumbersGreaterThanSixUptoN(12))

console.log("---- ---- ----")

console.log("1.3")

function sumDivisibleByEightUptoN(n){
  let divisibleByEight = 0;
  for(let i = 10; i <= n; i++){
    if(i % 8 === 0){
      divisibleByEight = divisibleByEight + i
    }
  }
  console.log(divisibleByEight)
}

sumDivisibleByEightUptoN(40)

console.log("---- ---- ----")

console.log("1.4")

function sumEvenAndOddUptoN(n){
  let even = 0
  let odd = 0
  for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
      even = even + i
    }
    if(i % 2 != 0){
      odd = odd + i
    }
  }
  console.log("Sum of Even Numbers: ",even)
  console.log("Sum of Odd Numbers: ",odd)
}

sumEvenAndOddUptoN(30)