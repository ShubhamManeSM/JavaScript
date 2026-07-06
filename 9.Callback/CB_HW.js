function getUserName(firstName, callback) {
  let fullName = firstName + " Doe";
  let message = "Hello, " + fullName 
   callback(message);
}

function greetUser(message) {
  console.log(message);
}

getUserName("John", greetUser);



function calculateAge(birthYear, callback) {
  const currentYear = 2025; 
  const age = currentYear - birthYear;
  callback(age);
}

function displayAge(age) {
  console.log(`You are ${age} years old!`);
}

calculateAge(1992, displayAge);



function generateUsername(firstName, callback) {
  const username = firstName + "_user";
  callback(username);
}

function displayUsername(username) {
  console.log(`Your username is: ${username}!`);
}

generateUsername("Alice", displayUsername);



function checkTemperature(celsius, callback) {
  const fahrenheit = (celsius * 9/5) + 32;
  callback(fahrenheit);
}

function displayTemperatureMessage(fahrenheit) {
  if (fahrenheit > 86) {
    console.log("The temperature is: Hot");
  } else if (fahrenheit >= 50 && fahrenheit <= 86) {
    console.log("The temperature is: Moderate");
  } else {
    console.log("The temperature is: Cold");
  }
}

checkTemperature(25, displayTemperatureMessage);



const processArray = (numbers, callback) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result = [...result, callback(numbers[i])]; 
  }
  console.log(result);
};

const squareNumber = num => num * num;
const numbersArray = [1, 2, 3, 4, 5];

processArray(numbersArray, squareNumber);



const processArraySum = (numbers, callback) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result = [...result, callback(numbers[i])]; 
  }
  console.log(result);
};

const doubleNumber = num => num * 2;

const numberArray = [2, 4, 6, 8, 10];

processArraySum(numberArray, doubleNumber);


