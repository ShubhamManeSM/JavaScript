console.log("Program 1");
let age = 20;
console.log("Orignal age: ", age);
age = 22;
console.log("Updated age: ", age);

console.log("Program 2");
let num1 = 20;
let num2 = 5;
let product = num1 * num2;
console.log("Product of num1 and num2: ", product);
let difference = num1 - num2;
console.log("Difference between num1 and num2: ", difference);

console.log("Program 3");
const numberOfGates = 5;
console.log("Orignal Value", numberOfGates);
// numberOfGates = 6
// console.log("Updated Value:", numberOfGates)

console.log("Program 4");
const person = {
  name: "John",
  age: 30,
};
console.log("Orignal Person:", person);

person.age = 31;
console.log("Updated Person:", person);

console.log("Program 5");
const colors = {
  primary: "red",
  secondary: "blue",
};
console.log("Orignal Object:", colors);

colors.tertiary = "green";
console.log("Updated Object:", colors);

console.log("Program 6");
const numbers = [1, 2, 3, 4];
numbers[2] = 99;
console.log(numbers);

console.log("Program 7");
const coordinates = { x: 10, y: 20 };
console.log(coordinates);
const newCoordinates = { x: 30, y: 40 };
// coordinates = newCoordinates
// Uncaught TypeError: Assignment to constant variable.

console.log("Program 8");
let obj = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
obj = obj2;
console.log(obj);
// console.log(ob2)

console.log("Program 9");
const numericVar = 2;
numericVar = 3;
console.log(numericVar);
// Uncaught TypeError: Assignment to constant variable.

console.log("Program 10");
const greeting = "Hello";
console.log(greeting);
let name = " Jay";
name = " Shawn";
console.log(greeting + name);
