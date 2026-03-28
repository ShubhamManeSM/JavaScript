console.log("A5_Exercise_2")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const employeeData = [
  {
    name: "Rajesh Kumar",
    department: "Marketing",
    hourlySalary: 250,
    week1Hours: 40,
    week2Hours: 42,
    week3Hours: 38,
    week4Hours: 39,
    bonusMultiplier: 0.65
  },
  {
    name: "Priya Gupta",
    department: "Sales",
    hourlySalary: 220,
    week1Hours: 38,
    week2Hours: 40,
    week3Hours: 37,
    week4Hours: 41,
    bonusMultiplier: 0.5
  },
  { 
    name: "Ankit Sharma",
      department: "Finance",
      hourlySalary: 280,
      week1Hours: 35,
      week2Hours: 36,
      week3Hours: 39,
      week4Hours: 38,
      bonusMultiplier: 0.8
  },
  { 
    name: "Ritu Singh",
      department: "Operations",
      hourlySalary: 300,
      week1Hours: 42,
      week2Hours: 41,
      week3Hours: 43,
      week4Hours: 40,
      bonusMultiplier: 0.45
  },
  { 
    name: "Rahul Verma",
      department: "IT",
      hourlySalary: 260,
      week1Hours: 37,
      week2Hours: 39,
      week3Hours: 38,
      week4Hours: 36,
      bonusMultiplier: 0.7
  },
]

for(let i = 0; i < employeeData.length;i++){
  console.log(employeeData[i])
}

console.log("1.2")
function calculateSalaryAndBonus(data) {
  const bonusThreshold = 40 * 4; 

  for (let i = 0; i < data.length; i++) {
    let emp = data[i];
    let totalHours =
      emp.week1Hours + emp.week2Hours + emp.week3Hours + emp.week4Hours;

    emp.totalHours = totalHours;
    emp.totalSalaryForFourWeeks = totalHours * emp.hourlySalary;

    let bonusHours = 0;
    if (totalHours > bonusThreshold) {
      bonusHours = totalHours - bonusThreshold;
    }

    emp.bonus =
      bonusHours * emp.hourlySalary * (emp.bonusMultiplier / 100);
  }
}

calculateSalaryAndBonus(employeeData);
for (let i = 0; i < employeeData.length; i++) {
  console.log(employeeData[i]);
}


console.log("1.3")

function printPayslips(data) {
  console.log("===== Employee Payslip =====");
  for (let i = 0; i < data.length; i++) {
    let emp = data[i];
    console.log("Name: " + emp.name);
    console.log("Department: " + emp.department);
    console.log("Total Hours Worked: " + emp.totalHours);
    console.log("Total Salary: " + emp.totalSalaryForFourWeeks);
    console.log("Bonus: " + emp.bonus);
    console.log("------");
  }
}

printPayslips(employeeData);

console.log("1.4")

function printHRReport(data) {
  let mostPaid = data[0];
  let totalHoursAll = 0;
  let totalWeek1 = 0, totalWeek2 = 0, totalWeek3 = 0, totalWeek4 = 0;

  for (let i = 0; i < data.length; i++) {
    let emp = data[i];
    totalHoursAll += emp.totalHours;

    if (emp.totalSalaryForFourWeeks > mostPaid.totalSalaryForFourWeeks) {
      mostPaid = emp;
    }

    totalWeek1 += emp.week1Hours;
    totalWeek2 += emp.week2Hours;
    totalWeek3 += emp.week3Hours;
    totalWeek4 += emp.week4Hours;
  }

  let numEmployees = data.length;

  console.log("====== Human Resource Report =====");

  console.log("------\nMost Paid Employee\n------");
  console.log("Name: " + mostPaid.name);
  console.log("Department: " + mostPaid.department);
  console.log("Total Hours Worked: " + mostPaid.totalHours);
  console.log("Total Salary: " + mostPaid.totalSalaryForFourWeeks);

  console.log("\n-----\nCompany Average\n-----");
  console.log("Total Hours worked by All: " + totalHoursAll);
  console.log("Total Average hours of Company: " + (totalHoursAll / numEmployees));
  console.log("------");
  console.log("Total Average of Week One: " + (totalWeek1 / numEmployees));
  console.log("Total Average of Week Two: " + (totalWeek2 / numEmployees));
  console.log("Total Average of Week Three: " + (totalWeek3 / numEmployees));
  console.log("Total Average of Week Four: " + (totalWeek4 / numEmployees));
}

printHRReport(employeeData);

