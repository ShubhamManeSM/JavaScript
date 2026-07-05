const calculateAverage = (num) => {
  let sum = 0;
  for(let i = 0; i < num.length; i++){
    sum += num[i]
  }
  return sum / num.length
}

console.log(calculateAverage([5,10,15]))


const reverseString = (str) => {
  let reversedString = ""
  for(let i = str.length - 1; i >= 0; i--){
    reversedString = reversedString + str[i]
  }
  return reversedString
} 

console.log(reverseString("world"))


const findLongestWord = (words) => {
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
};

console.log(findLongestWord(["apple", "banana", "grapefruit"]));



const calculateStringLength = (str) => {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    length++;
  }
  return length;
};

console.log(calculateStringLength("hello"));



const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 19, grade: 88 }
];


const calculateAverageGrade = (students) => {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
  }
  return sum / students.length;
};

console.log("Average Grade: ", calculateAverageGrade(students));


const getNames = (students) => {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
};

console.log(getNames(students));



const calculateAverageAge = (students) => {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  return sum / students.length;
};

console.log(calculateAverageAge(students));



const highGrades = (students) => {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 90) {
      result.push(students[i]);
    }
  }
  return result;
};

console.log(highGrades(students));



const isAnyBelow18 = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
      return true;
    }
  }
  return false;
};

console.log(isAnyBelow18(students));



const findStudentByName = (students, name) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i];
    }
  }
};

console.log(findStudentByName(students, "Charlie"));



const getHighScoreStudents = (students) => {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 85) {
      names.push(students[i].name);
    }
  }
  return names;
};

console.log(getHighScoreStudents(students));







