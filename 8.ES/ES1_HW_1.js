const isBirthday = true;


let age = 25;
if(isBirthday){
  age += 1
}
console.log("Program 1")
console.log(`Current Age: ${age}`)
console.log("\n")


let passengerAge = 60;
let ticketPrice = 100
let discountedPrice = ticketPrice - (ticketPrice * 0.15)
  
if(age > 60){
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
}else{
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n")


let num1 = 20;
let num2 = 25;
let num3 = 15;

if(num3 > num1 && num3 > num2){
  console.log(`The third number ${num3} is the largest.`)
}else{
  console.log(`The third number ${num3} is not the largest.`)
}
console.log("\n")



let saree = 500;
let kurta = 300;
let jeans = 900;
let shoes = 400;

let total = saree + kurta + jeans + shoes;
let deliveryCharge = 0;
let deliveryStatus = "No Delivery Charge";

if (total < 1999) {
  deliveryCharge = 99;
  deliveryStatus = "₹99";
  total += deliveryCharge;
}

// Display output
console.log("Program 4:\n");
console.log("Shopping Cart:");
console.log("--------------------------------------------------");
console.log(`Item: Saree, Price: ${saree}`);
console.log(`Item: Kurta, Price: ${kurta}`);
console.log(`Item: Jeans, Price: ${jeans}`);
console.log(`Item: Shoes, Price: ${shoes}`);
console.log("--------------------------------------------------");
console.log(`Delivery Charges: ${deliveryStatus}`);
console.log("--------------------------------------------------");
console.log(`Total Cart Price: ${total}\n\n`);



let number = 10; 

if (number > 0) {
  console.log(`The number is positive.`);
} else if (number < 0) {
  console.log(`The number is negative.`);
} else {
  console.log("The number is zero.");
}

console.log("\n")
let marks1 = 85;
let marks2 = 90;
let marks3 = 78;

let student1 = "Rahul";
let student2 = "Priya";
let student3 = "Tina";

if (marks1 > marks2 && marks1 > marks3) {
  console.log(`${student1} scored the highest marks.`);
} else if (marks2 > marks1 && marks2 > marks3) {
  console.log(`${student2} scored the highest marks.`);
} else if (marks3 > marks1 && marks3 > marks2) {
  console.log(`${student3} scored the highest marks.`);
} else {
  console.log("There is a tie in the highest marks.");
}





