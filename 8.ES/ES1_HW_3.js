const numbers = [5,12,7,25,18,3]

console.log("Program 1")
function printArray(arr){
  console.log(arr)
}

printArray(numbers)


console.log("Program 2")
function addTen(arr){
  const result = [];
  for(let i = 0; i < arr.length;i++){
    result.push(arr[i] + 10)
  }
  return result;
}

console.log(addTen(numbers))


console.log("Program 3")
function allOddToEven(arr){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      result.push(arr[i] + 1)
    }else {
      result.push(arr[i])
    }
  }
  console.log(result)
}

allOddToEven(numbers)


console.log("Program 4")
function divisibleBy2(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  console.log(evenNumbers);
}

divisibleBy2(numbers);


console.log("Program 5")
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of array:", sum);
}

sumOfArray(numbers);


console.log("Program 6")
function printOddAndEvenSums(arr) {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  console.log("Sum of even numbers:", evenSum);
  console.log("Sum of odd numbers:", oddSum);
}

printOddAndEvenSums(numbers);

