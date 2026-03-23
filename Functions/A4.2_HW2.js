console.log("A4.2_HW2");
console.log("---- ---- ----");

console.log("1.1");
function checkEvenOdd(number){
  if(number % 2 ===0){
    console.log("The number is even")
  }else{
    console.log("The number is odd")
  }
}
checkEvenOdd(9)

console.log("---- ---- ----");

console.log("1.2");
function checkGrade(score,passingScore){
  if(score >= passingScore){
    console.log("Congratulations! You have passed.")
  }
}

checkGrade(85,60)

console.log("---- ---- ----");

console.log("1.3");
function calculateAllowance(age,isStudent,baseAllowance){
  if(age < 18 && isStudent === true){
    return baseAllowance = baseAllowance + 100
  }else if(age >=18 && age <= 25 && isStudent === true){
    return baseAllowance = baseAllowance + 50
  }else{
    return baseAllowance
  }
}

let isAge = 16;
let studentIs = true;
let allowance = 500;

console.log("The updated allowance is:",calculateAllowance(isAge,studentIs,allowance));