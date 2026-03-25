console.log("A5.3_HW_2")
console.log("---- ---- ----");

console.log("Exercise 1");
console.log("---- ---- ----");

console.log("1.1");

function printNumberPattern(n,m){
  let output = ''
  for(let i = 1; i <= n; i++){
    output = output + i
    if(i % m === 0 && i != n){
      output = output + "%"
    }
  }
  console.log(output)
}

printNumberPattern(20,5);

console.log("---- ---- ----");
console.log("1.2");

function printDivisibleAndNotDivisible(n,m){
  let divisible = ''
  let notDivisible = ''
  for(let i = 10; i <= n; i++){
    if(i % m === 0){
      divisible = divisible + " " + i
    }else{
      notDivisible = notDivisible + " " + i
    }
  }
  console.log("Divisible by 5:",divisible)
  console.log("Not divisible by 5:",notDivisible)
}

printDivisibleAndNotDivisible(30,5)

console.log("---- ---- ----");
console.log("1.3")

function printEvenNumbersBetween(p,n,m){
  if(p > n && n < m){
    for(let i = p; i < m; i++){
      if(i % 2 === 0){
        console.log(i)
      }
    }
  }
}

printEvenNumbersBetween(8,5,15)