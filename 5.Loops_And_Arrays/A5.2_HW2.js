console.log("A5.2_HW2");
console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");

console.log("1.1");
console.log("---- ---- ----");

for(i = 30; i >= 11; i--){
  console.log(i)
}

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

for(i = 15; i >= 1; i--){
  let result = 9 * i
  console.log(9 + " * " + i + " = " + result)
}

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

for(i = 50; i >= 5; i -= 5){
  console.log(i)
}

console.log("---- ---- ----");
console.log("Exercise 2");
console.log("---- ---- ----");

function divisibleBy8(n){
  for(i = 1; i <= n; i++){
    if(i % 8 === 0){
      console.log(i)
    }
  }
}

divisibleBy8(30);

console.log("---- ---- ----");
console.log("2.2");
console.log("---- ---- ----");

function printAllOddNumber(n){
  for(i = 5; i <= n; i++){
    if(i % 2 !== 0){
      console.log(i)
    }
  }
}

printAllOddNumber(15);

console.log("---- ---- ----");
console.log("2.3");
console.log("---- ---- ----");

function divisibleBy5And7(n){
  for(i = 1; i <= n; i++){
    if(i % 5 === 0 && i % 7 === 0){
      console.log(i)
    }
  }
}

divisibleBy5And7(50);