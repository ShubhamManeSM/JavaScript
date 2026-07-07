const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
];

const isPassedOrFailed = students.map((student) => ({
  ...student, passed: student.score >= 60
}))
console.log(isPassedOrFailed)


const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },
  { title: "Hotel California", duration: 420 },
  { title: "Stairway to Heaven", duration: 482 },
];


const convertInMinutes = songs.map((song) => ({
  ...song, duration: song.duration / 60
}))
console.log(convertInMinutes)


const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];

const calculateAnnualIncome = employees.map((income) => ({
  ...income, annualIncome: income.salary * 12
}))

console.log(calculateAnnualIncome)


const newStudents = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];

const classifyAge = newStudents.map((student) => ({
  ...student, classification: student.age >= 18 ? 'adult' : 'minor'
}))

console.log(classifyAge)


const employee = [
  { name: "Emily", salary: 60000 },
  { name: "David", salary: 45000 },
  { name: "Grace", salary: 75000 },
];


const updatedSalary = employee.map((emp) => ({
  ...emp, salary: `$${emp.salary}`
}))
console.log(updatedSalary)


const products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 50 },
  { name: "Smartphone", price: 800 },
];

const labelProduct = products.map((prod) => ({
  name: prod.name,
  label: prod.price > 100 ? 'expensive' : 'affordable'
}))
console.log(labelProduct)


const books = [
  { title: "The Catcher in the Rye", year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: "The Hunger Games", year: 2008 },
];

const representBooks = books.map((catogorise) => ({
  title: catogorise.title,
  category: catogorise.year >= 2000 ? 'modern' : 'classic'
}))

console.log(representBooks)


const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const workedRates = developers.map((annualIncome) => ({
  name: annualIncome.name,
  annualIncome: annualIncome.hourlyRate * annualIncome.hoursPerWeek * 50
}))
console.log(workedRates)


const salesReps = [
  { name: "David", monthlyCommission: 8000 },
  { name: "Helen", monthlyCommission: 10000 },
  { name: "Ivan", monthlyCommission: 6000 },
];

const annual = salesReps.map((annualIncome) => ({
  name: annualIncome.name,
  annualIncome: annualIncome.monthlyCommission * 12 + 50000
}))
console.log(annual)


const studentsGrade = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 92 },
];


const gradedStudents = studentsGrade.map(({ name, score }) => {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  return { name, grade };
});

console.log(gradedStudents);
