console.log("A5.3_HW1");
console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");

console.log("1.1")

function printNumberPattern(n,m){
  let output = ''
  for(let i = 1; i <= n; i++){
    output = output + i
    if(i % m === 0 && i != n){
      output = output + "-"
    }
  }
  console.log(output)
}

printNumberPattern(9,4)

console.log("---- ---- ----");
console.log("1.2");

function printDivisibleAndNotDivisible(n,m){
  let divisible = ''
  let notDivisible = ''
  for(let i = 1; i <= n; i++){
    if(i % m === 0){
      divisible = divisible + " " + i
    }else{
      notDivisible = notDivisible + " " + i
    }
  }
  console.log("Divisible by 3:",divisible)
    console.log("Not divisible by 3:",notDivisible)
  }

  printDivisibleAndNotDivisible(20,6);

console.log("---- ---- ----");
console.log("1.3");

function printDivisibleNumberBetween(p,n,m){
  if(p < n < m){
    for(let i = n; i <= m; i++){
      if(i % p ===0){
        console.log(i)
     }
    }
  }
}
printDivisibleNumberBetween(3,5,15)
