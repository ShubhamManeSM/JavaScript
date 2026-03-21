console.log("A3_Exercise_2");
console.log("------------------------");

let day1Burnt = 400;
let day1Intake = 1500;
let day2Burnt = 450;
let day2Intake = 1800;
let day3Burnt = 300;
let day3Intake = 1600;
let day4Burnt = 500;
let day4Intake = 2000;
let day5Burnt = 350;
let day5Intake = 1700;

let baseCalorie = 1500;

let day1Surplus = (day1Burnt - (day1Intake + baseCalorie));
let day2Surplus = (day2Burnt - (day2Intake + baseCalorie));
let day3Surplus = (day3Burnt - (day3Intake + baseCalorie));
let day4Surplus = (day4Burnt - (day4Intake + baseCalorie));
let day5Surplus = (day5Burnt - (day5Intake + baseCalorie));

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt;

let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake;

let totalSurplus = totalBurnt - (totalIntake + (5 * baseCalorie));

let weeklySummary = "\\nWeekly Summary:\\n";
weeklySummary = totalBurnt;
weeklySummary = totalIntake;
weeklySummary = totalSurplus;

let standingGoalAwards = "";

if(totalBurnt >= 1000){
standingGoalAwards = "Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!"
}else{
  standingGoalAwards = "No Award yet"
}

weeklySummary = standingGoalAwards;

console.log("\nDaily Reports:");
console.log("Day 1: Deficit:",day1Surplus + "(Deficit)");
console.log("Day 2: Deficit:",day2Surplus + "(Deficit)");
console.log("Day 3: Deficit:",day3Surplus + "(Deficit)");
console.log("Day 4: Deficit:",day4Surplus + "(Deficit)");
console.log("Day 5: Deficit:",day5Surplus + "(Deficit)");

console.log("\nWeekly Summary");
console.log("Total Calories Burnt:",totalBurnt);
console.log("Total Calories Intake:",totalIntake);
console.log("Total Surplus/Deficit:",totalSurplus + "(Deficit)");

console.log("\nAward:",weeklySummary);