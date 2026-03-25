console.log("A4.3_HW1");
console.log("---- ---- ----");

console.log("Exercise 1");
console.log("---- ---- ----");
let day1Burnt = 400;
let day1Intake = 1500;
let day2Burnt = 450;
let day2Intake = 1800;
let day3Burnt = 300;
let day3Intake = 1600;
let day4Burnt = 500;
let day4Intake = 2000;
let baseCalorieBurn = 1500;

function calculateSurplusDeficit(day,dayBurnt,dayIntake,baseCalorieBurn){
  let surPlus = dayBurnt - (dayIntake + baseCalorieBurn);
  
  console.log(day + " Deficit: " + surPlus);
}
calculateSurplusDeficit("Day 1: ",day1Burnt,day1Intake,baseCalorieBurn);
calculateSurplusDeficit("Day 2: ",day2Burnt,day2Intake,baseCalorieBurn);
calculateSurplusDeficit("Day 3: ",day3Burnt,day3Intake,baseCalorieBurn);
calculateSurplusDeficit("Day 4: ",day4Burnt,day4Intake,baseCalorieBurn);


console.log("---- ---- ----");
console.log("Exercise 2");

function calculateTotalBurnt(){
  let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt;
  console.log("Total Calories Burnt: " + totalBurnt);
  return totalBurnt;
}

calculateTotalBurnt(day1Burnt,day2Burnt,day3Burnt,day4Burnt)

console.log("---- ---- ----");
console.log("Exercise 3");

function calculateTotalIntake(){
  let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake;
  console.log("Total Calories Intake: " + totalIntake)
  return totalIntake
}

calculateTotalIntake(day1Intake,day2Intake,day3Intake,day4Intake);

console.log("---- ---- ----");
console.log("Exercise 4");

let totalBurnt = 1650;
let totalIntake = 6900;

function calculateTotalSurplus(totalBurnt,totalIntake,baseCalorieBurn){
  let totalSurplus = totalBurnt - (totalIntake + 4 * baseCalorieBurn);
  console.log("Total Surplus/Deficit: ",totalSurplus);
  return totalSurplus
}
calculateTotalSurplus(totalBurnt,totalIntake,baseCalorieBurn)

console.log("---- ---- ----");
console.log("Exercise 5");
  let totalSurplus = -11250;
function generateWeeklySummary(totalBurnt,totalIntake,totalSurplus){
  let standingGoalAwards = "";
  if(totalBurnt > 1000){
    standingGoalAwards = "Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!"
  }else{
    standingGoalAwards = "No Award yet."
  }
  
  let weeklySummary = "Weekly Summary:\n";
  weeklySummary += "Total Calories Burnt: " + totalBurnt + "\n";
  weeklySummary += "Total Calories Intake: " + totalIntake + "\n";
  weeklySummary += "Total Surplus/Deficit: " + totalSurplus + "\n\n";
  weeklySummary += standingGoalAwards 

  return weeklySummary
}

console.log(generateWeeklySummary(totalBurnt,totalIntake,totalSurplus));