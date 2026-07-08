const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 65 },
  { name: "Charlie", grade: 90 },
];

const lowerGrade = students.filter(student => student.grade > 70)
console.log(lowerGrade)


const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 500 },
];

const higherPrice = products.filter(product => product.price < 1000)
console.log(higherPrice)


const employees = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 45000 },
  { name: "Charlie", salary: 70000 },
];

const lowerSalary = employees.filter(emp => emp.salary > 50000)
console.log(lowerSalary)


const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Interstellar", rating: 8.6 },
  { title: "The Dark Knight", rating: 9.0 },
];

const ratings = movies.filter(movie => movie.rating 
> 7.0)
console.log(ratings)


const cars = [
  { brand: "Toyota", year: 2018 },
  { brand: "Honda", year: 2019 },
  { brand: "Ford", year: 2010 },
];

const filteredCar = cars.filter(car => car.year >= 2019)
console.log(filteredCar)


const student = [
  { name: "Alice", gpa: 3.8 },
  { name: "Bob", gpa: 3.2 },
  { name: "Charlie", gpa: 3.9 },
];

const filteredStudent = student.filter(std => std.gpa > 3.5)
console.log(filteredStudent)


const fruits = [
  { name: "Apple", pricePerPound: 1.5 },
  { name: "Banana", pricePerPound: 2.2 },
  { name: "Orange", pricePerPound: 1.8 },
];

const filteredFruits = fruits.filter(fruit => fruit.pricePerPound < 2.0)
console.log(filteredFruits)


const employee = [
  { name: "Alice", employed: true },
  { name: "Bob", employed: false },
  { name: "Charlie", employed: true },
];

const filteredEmp = employee.filter(emp => emp.employed === true)
console.log(filteredEmp)


const product = [
  { name: "Laptop", inStock: true },
  { name: "Smartphone", inStock: false },
  { name: "Tablet", inStock: true },
];

const filteredProducts = product.filter(prod => prod.inStock === true)
console.log(filteredProducts)


const laptops = [
  { brand: "Dell", screenSize: 14 },
  { brand: "HP", screenSize: 15.6 },
  { brand: "Lenovo", screenSize: 13 },
  { brand: "Acer", screenSize: 17 },
];

const filteredLaptop = laptops.filter(laps => laps.screenSize > 15)
console.log(filteredLaptop)