console.log("A3.3_HW_2");
console.log("---- ---- ----");

let goalAmount = 12000;

let currentSavingsMonth1 = 3000;
let currentSavingsMonth2 = 5000;
let currentSavingsMonth3 = 8000;

let savingsContributionMonth1 = 1000;
let savingsContributionMonth2 = 1500;
let savingsContributionMonth3 = 2000;

let totalCurrentSavings = currentSavingsMonth1 + currentSavingsMonth2 + currentSavingsMonth3;

let totalSavingsContribution = savingsContributionMonth1 + savingsContributionMonth2 + savingsContributionMonth3;

let quaterlyGoalAmount = goalAmount / 4;

let percentageAchieved = (totalCurrentSavings / quaterlyGoalAmount ) * 100;

let projectTimeline = "";
let savingsTips = "";

if(percentageAchieved >= 100){
  projectTimeline = "Congratulations! You have already acheived your quarterly savings goals!"
}else if(percentageAchieved >= 75){
  projectTimeline = "At your current savings rate, you are on track to reach your quarterly goal by the end of the quarter"
}else{
  projectTimeline = "Based on your current savings rate, it may take some additional time to reach your quarterly goal"
}

if(percentageAchieved >= 80){
  savingsTips = "Great job! You are making excellent progress towards your quarterly goal.Keep up the good work!"
}else if(percentageAchieved >= 50){
  savingsTips = "You are halfway there! Try to find additional ways to save money and increase your savings rate."
}else{
  savingsTips = "To reach your quarterly savings goal sooner, consider cutting back on non-essential expenses and finding opportunities to save more."
}

console.log("\nQuarterly Savings Report");
console.log("-------------------------");
console.log("Goal Amount: $",goalAmount);
console.log("Quarterly Goal Amount: $",quaterlyGoalAmount);
console.log("Total Current Savings: $",totalCurrentSavings);
console.log("Total Savings Contribution: $",totalSavingsContribution);
console.log("Percentage Achieved:",percentageAchieved + '%');

console.log("\nProjected Timeline:",projectTimeline);

console.log("\nSavings Tips:",savingsTips);