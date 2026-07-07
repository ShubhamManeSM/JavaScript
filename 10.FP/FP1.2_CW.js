const students = [
  {name: "Alice", age:25},
  {name: "Bob", age:27},
  {name: "Charlie", age:25},
]

// get a new array with only the names of students
const names = students.map((student) => student.name)
console.log(names)


// adding grade property to students array
const studentWithGrades = students.map((student) => ({...student, grade: "A"}))
console.log(studentWithGrades)


// calculate BMI and Adding to each object
const people = [
  {name: "Alice", weight: 60, height: 1.65},
  {name: "Bob", weight: 70, height: 1.75},
  {name: "Charlie", weight: 68, height: 1.8},
]

const peopleWithBMI = people.map((person) =>(
  {...person, bmi: (person.weight / person.height ** 2).toFixed(2)}
))

console.log("People with BMI:", peopleWithBMI)


const person = {name: "John", age: "30", city: "New York"}
// console.log(Object.values(person))

const dataInUppercase = Object.values(person).map((value) => value.toUpperCase())
console.log(dataInUppercase)


console.log(Object.keys(person))