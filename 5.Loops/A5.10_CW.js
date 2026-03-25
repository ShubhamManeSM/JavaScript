console.log("A5.10_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")

const studentData = [
  {
    name:"Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
    computer: 88
  },
  {
    name:"Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
    computer: 92
  },
  {
    name:"Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
    computer: 95
  }
]

for(let i = 0; i < studentData.length;i++){
  console.log("Name: "+ studentData[i].name + "\n" + "Roll no: "+ studentData[i].rollNo + "\n"+ "Hindi: "+ studentData[i].hindi + "\n" + "English: "+ studentData[i].english + "\n"+ "Maths: "+ studentData[i].maths + "\n"+ "Computer: "+ studentData[i].computer+ "\n")
}

console.log("---- ---- ----")
console.log("1.2")

const marksForScience = [82,90,88]

for(let i = 0; i < studentData.length;i++){
  studentData[i].science = marksForScience[i]
  console.log(studentData[i])
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")

const kaveriData = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86
}

console.log("Kaveri's Data:",kaveriData)

console.log("---- ---- ----")
console.log("2.2")

studentData.push(kaveriData)
console.log("Updated Data:",studentData)

console.log("---- ---- ----")
console.log("2.3")

for(let i = 0; i < studentData.length;i++){
  let totalMarks = studentData[i].hindi + studentData[i].english + studentData[i].maths + studentData[i].computer + studentData[i].science

  studentData[i].totalMarks = totalMarks
}

console.log("Array with total marks:",studentData)

console.log("---- ---- ----")
console.log("2.4")

for(let i = 0; i < studentData.length;i++){
  const numOfSubjects = 5
  const average = studentData[i].totalMarks / numOfSubjects

  studentData[i].avgMarks = average
}

console.log("Students Data:",studentData)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

for(let i = 0; i < studentData.length;i++){
  generateReportCard(studentData[i])
}

function generateReportCard(student){
  console.log("===== Report Card for "+ student.name + " =====" + "\n"+ "Roll No. : "+ student.rollNo + "\n" + "-----\n"+ "Marks"+ "\n-----"+ "\n"+ "Hindi: "+ student.hindi + "\n"+ "English: "+ student.english + "\n"+ "Maths: "+ student.maths + "\n"+ "Computer: "+ student.computer + "\n" + "Science: "+ student.science + "\n-----"+ "\n" + "Total: "+ student.totalMarks + "\n" + "Average: "+ student.avgMarks + "\n" + "Grade: "+ getGrades(student.avgMarks) + "\n")
}

function getGrades(avg){
  if(avg >= 90){
    return "A"
  }else if(avg >= 80 && avg < 90){
    return "B"
  }else if(avg >= 70 && avg < 79){
    return "C"
  }else if(avg >= 60 && avg < 69){
    return "D"
  }else if(avg >= 50 && avg < 59){
    return "E"
  }else{
    return "F"
  }
}
