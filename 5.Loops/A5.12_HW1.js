const studentsData = [
  { name: "Sarah", rollNo: 201, chemistry: 88, homeScience: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
  { name: "Michael", rollNo: 202, chemistry: 75, homeScience: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
  { name: "Emily", rollNo: 203, chemistry: 82, homeScience: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
  { name: "David", rollNo: 204, chemistry: 95, homeScience: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
  { name: "Olivia", rollNo: 205, chemistry: 85, homeScience: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
];


function getTopper(data){
  let highestTotalStudent = data[0]
  for(let i = 0; i < data.length;i++){
    if(data[i].totalMarks > highestTotalStudent.totalMarks){
      highestTotalStudent = data[i]
    }
  }
  return highestTotalStudent
}


function getGrade(avg){ 
  if(avg >= 95) return "A+"
  if(avg >= 90) return "A"
  if(avg >= 85) return "B+"
  if(avg >= 80) return "B"
  if(avg >= 75) return "C+"
  if(avg >= 70) return "C"
  if(avg >= 65) return "D+"
  if(avg >= 60) return "D"
  if(avg >= 55) return "E"
  return "F"
}


function getTotalMarks(data){
  let classTotalMarks = 0
  for(let i = 0; i < data.length;i++){
    classTotalMarks = classTotalMarks + data[i].totalMarks
  }
  return classTotalMarks
}


function getAGradersCount(data){
  let count = 0
  for(let i = 0; i < data.length;i++){
    if(data[i].avgMarks >= 95){
      count = count + 1
    }
  }
  return count
}

function calculateSubjectAverage(data,subjectName){
  let totalMarks = 0;
  for(let i = 0; i < data.length;i++){
    totalMarks = totalMarks + data[i][subjectName]
  }
  return totalMarks / data.length
}

function generateClassReport(studentData){
  let topper = getTopper(studentData)
  let aGradeCount = getAGradersCount(studentsData)
  let totalMarksScoredByClass = getTotalMarks(studentsData)
  let chemistryAverage = calculateSubjectAverage(studentsData,"chemistry")
  let homeScienceAverage = calculateSubjectAverage(studentsData,"homeScience")
  let commerceAverage = calculateSubjectAverage(studentsData,"commerce")
  let physicalEducationAverage = calculateSubjectAverage(studentsData,"physicalEducation")
  let moralScienceAverage = calculateSubjectAverage(studentsData,"moralScience")
  
  let report = "===== Class Performance Report =====\n"
  report += "Topper: \n"
  report += "------\n"
  report += "Name: " + topper.name +"\n"
  report += "Roll No: " + topper.rollNo + "\n"
  report += "Total Marks: " + topper.totalMarks + "\n"
  report += "Grade: " + getGrade(topper.avgMarks) + "\n"

  report += "\nA+ grades:\n" 
  report += "------\n"
  report += "Total no. of A+ graders: " + aGradeCount + "\n"

  for(let i = 0; i < studentsData.length;i++){
    if(studentsData[i].avgMarks >= 90){
      report += "Name: " + studentsData[i].name + "\nTotal Marks: " + studentsData[i].totalMarks + "\n------"
    }
  }

  report += "\nClass Average:\n"
  report += "------\n"
  report += "TotalMarks Scored by Class: " + totalMarksScoredByClass + "\n"
  report += "Total Average of Class: " + totalMarksScoredByClass / studentsData.length + "\n"

  report += "------\n"
  report += "Total Average of Chemistry: " + chemistryAverage + "\n"
  report += "Total Average of Home Science: " + homeScienceAverage + "\n"
  report += "Total Average of Commerce: " + commerceAverage + "\n"
  report += "Total Average of Physical Education: " + physicalEducationAverage + "\n"
  report += "Total Average of Moral Science: " + moralScienceAverage + "\n"


  return report
}


console.log(generateClassReport(studentsData))