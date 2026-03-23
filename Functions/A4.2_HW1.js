console.log("A4.2_HW1");
console.log("---- ---- ----");

console.log("1.1");
function checkAge(age){
  if(age >= 18){
    console.log("You are eligible for voting")
  }
}
checkAge(21)

console.log("---- ---- ----");

console.log("1.2");
function compareNumbers(num1,num2){
  if(num1 > num2){
    console.log(num1,"is greater than",num2)
  }
}
compareNumbers(10,5)

console.log("---- ---- ----");

console.log("1.3");
function calculateShippingCost(totalWeight,country,baseCost){
  if(totalWeight <= 1 && country === "Local"){
    return baseCost = baseCost + 10;
  }else if(totalWeight >= 1 && country === "Interntional"){
    return baseCost = baseCost + 20
  }else{
    return baseCost
  }
}

let weightTotal = 0.5;
let countryIs = "Local";
let cost = 50;

console.log("The updated shipping cost is:",calculateShippingCost(weightTotal,countryIs,cost));