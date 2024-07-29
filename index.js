const studentsData = [
  {name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90},
  {name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95},
  {name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87}
]

const marksForComputer = [88, 92, 95]

for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].computer = marksForComputer[i];
}

console.log(studentsData)

const marksForScience = [82, 90, 88]

for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].science = marksForScience[i];
}

console.log(studentsData)

const kaveriData = 
  {name: "Kaveri", rollNo: 104, hindi: 84, english: 88, maths: 78, computer: 90, science: 86}


console.log(kaveriData)

studentsData.push(kaveriData)

console.log(studentsData)

for (let i = 0; i < studentsData.length; i++) {
  let student = studentsData[i];
  student.totalMarks = student.hindi + student.english + student.maths + student.computer;
}

console.log(studentsData)

for (let i = 0; i < studentsData.length; i++) {
  let student = studentsData[i];
  student.avgMarks = student.totalMarks / 4;
}

console.log(studentsData)

function getGrade(avg){
  if(avg >= 90) return "A";
  if(avg >= 80) return "B";
  if(avg >= 70) return "C";
  if(avg >= 60) return "D";
  if(avg >= 50) return "E";
  return "F"
}


function printReportCard(rollNo){
  let student = getReportByRollNo(rollNo)
  console.log("===== Report Card for " + student.name + " =====" + "\n" + "Roll No: " + student.rollNo + "\n------" + "\n" + "Marks:" + "\n------" + "\n" + "Hindi: " + student.hindi + "\n" + "English: " + student.english + "\n" + "Maths: " + student.maths + "\n" + "Computer: " + student.computer + "\n" + "Science: " + student.science + "\n------\n" + "Total: " + student.totalMarks + "\n" + "Average: " + student.avgMarks + "\n" + "Grade: "  + getGrade(student.avgMarks) + "\n----- ----- -----\n")
}

function getReportByRollNo(rollNo){
  for(let i = 0; i < studentsData.length; i++){
    if(studentsData[i].rollNo === rollNo){
      return studentsData[i]
    }
  }
}

printReportCard(101)
printReportCard(102)
printReportCard(103)
printReportCard(104)

