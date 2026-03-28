console.log("A5.6_HW1")
console.log("---- ---- ----")

const viratKolhiRuns = [82,120,45,66,102,55,91,76,115,42]

console.log("1.1")
console.log("Runs scored divisible by 3:")
for(let i = 0; i < viratKolhiRuns.length;i++){
  if(viratKolhiRuns[i] % 3 === 0){
    console.log(viratKolhiRuns[i])
  }
}

console.log("---- ---- ----")

console.log("1.2")

console.log("Runs scored divisible by 5:")
for(let i = 0; i < viratKolhiRuns.length;i++){
  if(viratKolhiRuns[i] % 5 === 0){
    console.log(viratKolhiRuns[i])
  }
}

console.log("---- ---- ----");

console.log("1.3")

let newArray = []
for(let i = 0; i < viratKolhiRuns.length;i++){
  if(viratKolhiRuns[i] % 2 === 0){
    newArray.push(viratKolhiRuns[i])
  }
}

console.log("Runs scored divisible by 2: ",newArray)

console.log("---- ---- ----")

console.log("1.4")

let sum = 0
for(let i = 0; i < viratKolhiRuns.length;i++){
  sum = sum + viratKolhiRuns[i]
}
console.log("Total runs scored by Virat Kohli: ",sum)

console.log("---- ---- ----")

console.log("1.5")

let sumEven = 0
let sumOdd = 0
for(let i = 0; i < viratKolhiRuns.length;i++){
  if(viratKolhiRuns[i] % 2 === 0){
    sumEven = sumEven + viratKolhiRuns[i]
  }
  if(viratKolhiRuns[i] % 2 !== 0){
    sumOdd = sumOdd + viratKolhiRuns[i]
  }
}

console.log("Sum of odd numbers:",sumOdd);
console.log("Sum of even numbers:",sumEven);