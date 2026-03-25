console.log("A5.10_HW1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

const criketData = [
  {
    name: "Virat",
    edenGarden: 72,
    wankhedeStadium: 88,
    ferozShahKotla: 45,
    chepauk: 74
  },
  {
    name: "Rohit",
      edenGarden: 64,
      wankhedeStadium: 41,
      ferozShahKotla: 68,
      chepauk: 34
  },
  {
    name: "Shikhar",
      edenGarden: 54,
      wankhedeStadium: 38,
      ferozShahKotla: 72,
      chepauk: 44
  },
  {
    name: "Rishabh",
      edenGarden: 22,
      wankhedeStadium: 27,
      ferozShahKotla: 34,
      chepauk: 51
  }
]

console.log("1.1")

for(let i = 0; i < criketData.length;i++){
  console.log("Criketer: ",criketData[i].name + "\n" + "Eden Gardens: "+ criketData[i].edenGarden + "\n" + "Wankhede Stadium: "+ criketData[i].wankhedeStadium + "\n"+ "Feroz Shah Kotla: "+ criketData[i].ferozShahKotla + "\n" + "Chepauk: "+ criketData[i].chepauk + "\n")
}

console.log("---- ---- ----")
console.log("1.2")

  const chinnaswamyStadiumScores = [54,82,49,45]
for(let i = 0; i < criketData.length;i++){
  criketData[i].chinnaswamyStadium = chinnaswamyStadiumScores[i]
  console.log(criketData[i])
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")

const KLRahul = {
  name: "KL Rahul",
  edenGarden: 34,
  wankhedeStadium: 56,
  ferozShahKotla: 42,
  chepauk: 31,
  chinnaswamyStadium: 68
}

console.log("KL Rahul's Data:",KLRahul)

console.log("---- ---- ----")
console.log("2.2")

criketData.push(KLRahul)
console.log("Updated Data:",criketData)

console.log("---- ---- ----")
console.log("2.3")

for(let i = 0; i < criketData.length;i++){
  let totalScore = criketData[i].edenGarden + criketData[i].wankhedeStadium + criketData[i].ferozShahKotla + criketData[i].chepauk + criketData[i].chinnaswamyStadium

  criketData[i].totalScore = totalScore
}

console.log("Array with total scores:",criketData)

console.log("---- ---- ----")
console.log("2.4")

for(let i = 0; i < criketData.length;i++){
  const numOfScore = 5
  const average = criketData[i].totalScore / numOfScore

  criketData[i].avgScore = average
}

console.log("Criketer Data:",criketData)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

console.log("3.1")

for(let i = 0; i < criketData.length;i++){
  genrateScoreCard(criketData[i])
}

function genrateScoreCard(score){
  console.log("===== Score Card for "+ score.name + " =====" + "\n"+ "Eden Garden :"+ score.edenGarden + "\n"+ "Wankhede Staduim: "+ score.wankhedeStadium + "\n"+ "Feroz Shah Kotla : "+ score.ferozShahKotla + "\n"+ "Chepauk: "+ score.chepauk + "\n"+ "Chinnaswamy Stadium: "+ score.chinnaswamyStadium + "\n------"+ "\n" + "Total: "+ score.totalScore + "\n" + "Average: "+ score.avgScore + "\n" + "Performance: "+  performance(score.avgScore) + "\n---- ---- ---- ----" + "\n")

}

function performance(avg){
  if(avg >= 80){
    return "Good"
  }else if(avg >= 60 && avg < 79){
    return "Above Average"
  }else if(avg >= 45 && avg < 59){
    return "Average"
  }else{
    return "Bad"
  }
}