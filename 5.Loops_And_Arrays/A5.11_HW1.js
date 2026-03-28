console.log("A5.11_HW1")
console.log("---- ---- ----")

const studentData = [
 { studentName: "John", rollNo: 201, science: 88, history: 75, geography: 90 },
 { studentName: "Alice", rollNo: 202, science: 92, history: 85, geography: 88 },
 { studentName: "Bob", rollNo: 203, science: 78, history: 89, geography: 91 }
];

console.log("1.1")
console.log("---- ---- ----")

function printByRollNo(rollNo){
  let student = getReportByRollNo(rollNo)
  console.log("===== Report Card for " + student.name + " =====\n" + "Roll No. : " + student.rollNo + "\n-----\nMarks:\n-----\n" + "science: " + student.science + "\nhistory: " + student.history + "\ngeography: " + student.geography + "\n------ ------ ------")
}


function getReportByRollNo(rollNo){
for(let i = 0; i < studentData.length;i++){
  if(studentData[i].rollNo === rollNo){
    return studentData[i]
  }
}
}

printByRollNo(201)
printByRollNo(202)
printByRollNo(203)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

function getStudentDataByCutoff(subjectName,cutOff){
  let result = []
  for(let i = 0; i < studentData.length;i++){
    if(studentData[i][subjectName] >= cutOff){
      result.push(studentData[i])
    }
  }
  return result
}

console.log("Student data with cutoff for science >= 80")
console.log(getStudentDataByCutoff("science",80))

console.log("Student data with cutoff for History >= 90")
console.log(getStudentDataByCutoff("history",90))

console.log("Student data with cutoff for geography >= 90")
console.log(getStudentDataByCutoff("geography",90))

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

for(let i = 0; i < studentData.length;i++){
  let numOfSubject = 3

  let totalMarks = studentData[i].science + studentData[i].history + studentData[i].geography

  studentData[i].totalMarks = totalMarks

  studentData[i].avgMarks = studentData[i].totalMarks / numOfSubject
}

function printAverageMarks(avgCutOff){
  for(let i = 0; i < studentData.length;i++){
    if(studentData[i].avgMarks > avgCutOff){
      console.log(studentData[i].studentName + " has average marks", studentData[i].avgMarks)
    }
  }
}

printAverageMarks(82)


console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function getHighestAverageMarks(data){
  let highestAvgMarks = data[0].avgMarks
  for(let i = 1; i < data.length;i++){
    if(data[i].avgMarks > highestAvgMarks){
      highestAvgMarks = data[i]
    }
  }
  return highestAvgMarks
}

console.log(getHighestAverageMarks(studentData))
