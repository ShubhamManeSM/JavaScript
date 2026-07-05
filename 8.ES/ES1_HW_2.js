function calculateSalary(hoursWorked, hourlyRate) {
  let salary = hoursWorked * hourlyRate;
  return salary;
}

let totalSalary = calculateSalary(40, 500);
console.log(`Total Salary: ${totalSalary}`);

console.log("\n")

function calculateBonus(workedHours, marks, salary) {
  let bonus = 0;

  if (workedHours > 25 && marks > 85) {
    bonus = salary * 0.10;
  } else if (workedHours > 15 && marks > 75) {
    bonus = salary * 0.05;
  }

  let updatedSalary = salary + bonus;
  return updatedSalary;
}

console.log(calculateBonus(20, 80, 5000));

console.log("\n")

function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  let total1 = price1 * quantity1;
  let total2 = price2 * quantity2;
  let finalAmount = total1 + total2;
  return finalAmount;
}

console.log(calculateFinalAmount(200, 10, 500, 5));

console.log("\n")

function calculateAllowance(age, isStudent, baseAllowance) {
  let updatedAllowance = baseAllowance;

  if (age < 18 && isStudent) {
    updatedAllowance += 100;
  } else if (age >= 18 && age <= 25 && isStudent) {
    updatedAllowance += 50;
  }

  return updatedAllowance;
}

console.log(calculateAllowance(16, true, 500));

console.log("\n")

function calculateShippingCost(totalWeight, country, baseCost) {
  let updatedCost = baseCost;

  if (totalWeight <= 1 && country === "Local") {
    updatedCost += 10;
  } else if (totalWeight > 1 && country === "International") {
    updatedCost += 20;
  }

  return updatedCost;
}

console.log(calculateShippingCost(0.5, "Local", 50));




