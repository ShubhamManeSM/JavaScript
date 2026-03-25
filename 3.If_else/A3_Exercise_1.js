console.log("A3_Exercise_1");
console.log("-------------------------");

let rahulSalesTarget = 100;
let priyaSalesTarget = 200;
let amitSalesTarget = 150;

let rahulActualSales = 85;
let priyaActualSales = 180;
let amitActualSales = 120;

let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100;

let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100;

let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100;

let rahulPerformance = "";
let rahulBonus = 0;
if(rahulSalesPercentage >= 90){
  rahulPerformance = "High Performer";
  rahulBonus = 0.2;
}

  if(rahulSalesPercentage >= 70 && rahulSalesPercentage < 90){
    rahulPerformance = "Average Performer";
    rahulBonus = 0.1;
  } else {
    rahulPerformance = "Low Performer";
    rahulBonus = 0;
  }

  let priyaPerformance = "";
  let priyaBonus = 0;
  if(priyaSalesPercentage >= 90){
    priyaPerformance = "High Performer";
    priyaBonus = 0.2;
  } else if(priyaSalesPercentage >= 70 && priyaSalesPercentage < 90){
    priyaPerformance = "Average Performer";
    priyaBonus = 0.1;
  } else {
    priyaPerformance = "Low Performer";
    priyaBonus = 0;
  }

  let amitPerformance = "";
  let amitBonus = 0;
  if(amitSalesPercentage >= 90){
    amitPerformance = "High Performer";
    amitBonus = 0.2;
  } else if(amitSalesPercentage >= 70 && amitSalesPercentage < 90){
    amitPerformance = "Average Performer";
    amitBonus = 0.1;
  } else {
    amitPerformance = "Low Performer";
    amitBonus = 0;
  }


let rahulBonusAmount = rahulActualSales * rahulBonus;

let priyaBonusAmount = priyaActualSales * priyaBonus;

let amitBonusAmount = amitActualSales * amitBonus;

console.log("Sales Performance Report");
console.log("-------------------------");
console.log("Rahul");
console.log("Sales Target: "+ rahulSalesTarget +" units");
console.log("Units Sold: "+ rahulActualSales + " units");
console.log("Sales Percentage: "+ rahulSalesPercentage + "%");
console.log("Performance: "+ rahulPerformance);
console.log("Bonus Amount: "+ rahulBonusAmount + " units\n");

console.log("Priya");
console.log("Sales Target: "+priyaSalesTarget+" units");
console.log("Units Sold: "+priyaActualSales+" units");
console.log("Sales Percentage: "+priyaSalesPercentage+ "%");
console.log("Performance: "+ priyaPerformance);
console.log("Bonus Amount: "+ priyaBonusAmount+ " units\n");

console.log("Amit");
console.log("Sales Target: "+ amitSalesTarget+ " units");
console.log("Units Sold: "+ amitActualSales+ " units");
console.log("Sales Percentage: "+ amitSalesPercentage+ "%");
console.log("Performance: "+ amitPerformance);
console.log("Bonus Amount: "+ amitBonusAmount + " units");

