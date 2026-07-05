const studentsData = [
  { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90 },
  { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95 },
  { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87 }
];

const marksForComputer = [88, 92, 95];


for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].computer = marksForComputer[i];
}


console.log("1.1: Student Data with Computer Marks:");
for (let i = 0; i < studentsData.length; i++) {
  console.log(studentsData[i]);
}


const marksForScience = [82, 90, 88];

for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].science = marksForScience[i];
}

console.log("1.2: Updated Student Data with Science marks:");
for (let i = 0; i < studentsData.length; i++) {
  console.log(studentsData[i]);
}


const kaveri = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86
};

console.log("2.1: Kaveri's Data:");
console.log(kaveri);


studentsData.push(kaveri);

console.log("2.2: Updated studentsData with Kaveri:");
for (let i = 0; i < studentsData.length; i++) {
  console.log(studentsData[i]);
}


for (let i = 0; i < studentsData.length; i++) {
  const student = studentsData[i];
  student.totalMarks = student.hindi + student.english + student.maths + student.computer + student.science;
}

console.log("2.3: Updated Students Data with Total Marks:");
for (let i = 0; i < studentsData.length; i++) {
  console.log(studentsData[i]);
}


for (let i = 0; i < studentsData.length; i++) {
  const student = studentsData[i];
  student.avgMarks = student.totalMarks / 5;
}

console.log("\n2.4: Updated Students Data with Average Marks:");
for (let i = 0; i < studentsData.length; i++) {
  console.log(studentsData[i]);
}


for (let student of studentsData) {
  student.totalMarks = student.hindi + student.english + student.maths + student.computer + student.science;
  student.avgMarks = student.totalMarks / 5;
}


function assignGrade(avg) {
  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  if (avg >= 50) return 'E';
  return 'F';
}

for (let student of studentsData) {
  student.grade = assignGrade(student.avgMarks);
}


for (let student of studentsData) {
  console.log(`===== Report Card for ${student.name} =====`);
  console.log(`Roll No. : ${student.rollNo}`);
  console.log(`------`);
  console.log(`Marks`);
  console.log(`------`);
  console.log(`Hindi   : ${student.hindi}`);
  console.log(`English : ${student.english}`);
  console.log(`Maths   : ${student.maths}`);
  console.log(`Computer: ${student.computer}`);
  console.log(`Science : ${student.science}`);
  console.log(`------`);
  console.log(`Total   : ${student.totalMarks}`);
  console.log(`Average : ${student.avgMarks}`);
  console.log(`Grade   : ${student.grade}`);
  console.log(`------ ------ ------ ------\n`);
}