// Assignment
console.log("A3_Final_Assignment");
console.log("---- ---- ----");

let salary = 50000;
let sideHustles = 10000;
let groceries = 5000;
let utilities = 2000;
let rent = 20000;
let transportation = 3000;

let totalIncome = salary + sideHustles;

let totalExpenses = groceries + utilities + rent + transportation;

let budgetSurplusDeficit = totalIncome - totalExpenses;

let budgetStatus = "";

if(budgetSurplusDeficit >= 0){
  budgetStatus = "Congratulations! You have a budget surplus."
}else if(budgetSurplusDeficit <= 0){
  budgetStatus = "Oops! You have a budget deficit"
}

let spendingInsights = "";

if(totalExpenses <= 10000){
  spendingInsights = "Great job! You have maintained a low expense level."
}else if(totalExpenses >=10000 && totalExpenses <= 20000){
  spendingInsights = "Your expenses are moderate."
}else if(totalExpenses >= 20000 && totalExpenses <= 30000){
  spendingInsights = "Your expenses are on the higher side."
}else{
  spendingInsights = "Your expenses are quite high"
}

let budgetTips = ""
if(budgetSurplusDeficit >= 10000){
  budgetTips = "You have a significant budget surplus."
}else if(budgetSurplusDeficit < 10000 && budgetSurplusDeficit >= -10000){
  budgetTips = "Your budget is relatively balanced.Focus on maintaining your current financial habits"
}else{
  budgetTips = "You have a budget deficit."
}

console.log("Monthly Budget Analysis Report");
console.log("--------------------------------");

console.log("Total Income: ₹",totalIncome);
console.log("Total Expenses: ₹",totalExpenses);
console.log("Budget Surplus/Deficit: ₹",budgetSurplusDeficit);

console.log("\nBudget Status:",budgetStatus);

console.log("\nSpending Insights:",spendingInsights);

console.log("\nBudget Management Tips:",budgetTips);

