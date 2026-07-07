const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

const titles = books.map((title) => title.title)
console.log(titles)



const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "kiwi", color: "brown" },
];

const toUpperCase = fruits.map((fruit) => ({
  ...fruit, name:fruit.name.toUpperCase()}))
console.log(toUpperCase)


const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];

const updatedSalary = employees.map((emp) => ({
  ...emp, salary: emp.salary + (emp.salary * 0.10)
}))

console.log(updatedSalary)


const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Headphones", price: 100 },
];

const updatedPrice = products.map((prod) => ({
  ...prod, price: prod.price - (prod.price * 0.20)
}))

console.log(updatedPrice)


const cities = [
  { name: "New York", temperature: 25 },
  { name: "Los Angeles", temperature: 30 },
  { name: "Chicago", temperature: 20 },
];

const convertTemperature = cities.map((temp) => ({
  ...temp, temperature: (temp.temperature * 9/5) + 32
}))

console.log(convertTemperature)


const teachers = [
  { name: "Olivia", monthlySalary: 4500 },
  { name: "Paul", monthlySalary: 5500 },
  { name: "Rachel", monthlySalary: 5000 },
];

const calculateAnnualIncome = teachers.map(({ name,monthlySalary }) => ({
  name, annualIncome: (monthlySalary* 12) + 500
  }))

console.log(calculateAnnualIncome)


const countries = [
  { name: "USA", population: 331000000, landArea: 9833517 },
  { name: "India", population: 1393000000, landArea: 2973190 },
  { name: "Brazil", population: 213993437, landArea: 8515767 },
];

const calculateDensity = countries.map(({
  name,population,landArea }) => ({
  name, populationDensity: (population / landArea)
  }))

console.log(calculateDensity)