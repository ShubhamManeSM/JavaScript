console.log("A5_Exercise_1")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const salesData = [
  {
    name: "Rajesh",
    location: "Mumbai",
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000,
  },
  {
    name: "Sneha",
    location: "Delhi",
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000,
  },
  { 
    name: "Arun",
    location: "Chennai",
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000 
  },
  { 
    name: "Kavita",
    location: "Kolkata",
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000 
  },
  { 
    name: "Sanjay",
    location: "Mumbai",
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000 
  },
  { 
    name: "Divya",
    location: "Chennai",
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000 
  }
]

for(let i = 0; i < salesData.length;i++){
  console.log(salesData[i])
}

console.log("1.2")
for(let i = 0; i < salesData.length;i++){
  let person = salesData[i]
  person.totalSales = person.q1Sales + person.q2Sales + person.q3Sales + person.q4Sales
  person.averageSales = person.totalSales / 4
}
console.log(salesData)


console.log("1.3")
function getPerformanceReport(data){
  for(let i = 0; i < data.length;i++){
    let avg = data[i].averageSales
    if(avg >= 140000){
      data[i].performanceGrade = "Top Performer"
    }else if(avg >= 120000 && avg < 140000){
      data[i].performanceGrade = "Medium Performer"
    }else{
      data[i].performanceGrade = "Low Performer"
    }
  }
}

getPerformanceReport(salesData)

function printPerformanceReport(data){
  console.log("===== Performance Report =====");
  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    console.log("Name: " + person.name);
    console.log("Location: " + person.location);
    console.log("Total Sales: " +           person.totalSales);
    console.log("Average Sales: " + person.averageSales);
    console.log("Performance Grade: " + person.performanceGrade);
    console.log("------");
  }
}

printPerformanceReport(salesData)

console.log("1.4")

function getYearlySalesReport(data) {
  let bestPerformer = data[0];
  let topPerformers = [];
  let totalSalesAll = 0;

  
  let totalQ1 = 0;
  let totalQ2 = 0;
  let totalQ3 = 0;
  let totalQ4 = 0;

  for (let i = 0; i < data.length; i++) {
    let person = data[i];

    if (person.totalSales > bestPerformer.totalSales) {
      bestPerformer = person;
    }

    if (person.averageSales >= 140000) {
      topPerformers.push(person);
    }

    totalSalesAll += person.totalSales;
    
    totalQ1 += person.q1Sales;
    totalQ2 += person.q2Sales;
    totalQ3 += person.q3Sales;
    totalQ4 += person.q4Sales;
  }
  
  
  let count = data.length;
  let avgQ1 = totalQ1 / count;
  let avgQ2 = totalQ2 / count;
  let avgQ3 = totalQ3 / count;
  let avgQ4 = totalQ4 / count;

  let overallAverage = totalSalesAll /  6;

  console.log("===== Annual Sales Report =====");
  console.log("-----\nBest Performer\n------");
  console.log("Name: " + bestPerformer.name);
  console.log("Location: " + bestPerformer.location);
  console.log("Total Sales By Best Performer: " + bestPerformer.totalSales);

  console.log("\n-----\nTop Performers\n-----");
  console.log("Total No. of Top Performers: " + topPerformers.length);
  for (let i = 0; i < topPerformers.length; i++) {
    let person = topPerformers[i];
    console.log("Name: " + person.name);
    console.log("Location: " + person.location);
    console.log("Total Sales: " + person.totalSales);
    console.log("------");
  }

  console.log("------\nSales Averages\n------");
  console.log("Q1 Average Sales: " + avgQ1);
  console.log("Q2 Average Sales: " + avgQ2);
  console.log("Q3 Average Sales: " + avgQ3);
  console.log("Q4 Average Sales: " + avgQ4);
  console.log("------");
  console.log("Total Sales: " + totalSalesAll);
  console.log("Total Average Sales: " + overallAverage);
  console.log("------");
}

getYearlySalesReport(salesData)
