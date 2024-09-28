var Name = prompt("Enter Your Name");
var fatherName = prompt("Enter Your Father's Name");
var rollNumber = prompt("Enter Your Roll Number");
var subject1 = prompt("Enter your subject1");
var subject2 = prompt("Enter your subject2");
var subject3 = prompt("Enter your subject3");
var subject4 = prompt("Enter your subject4");
var subject5 = prompt("Enter your subject5");

var no1 = Number(prompt("Enter your " + subject1 + " Numbers"));
var no2 = Number(prompt("Enter your " + subject2 + " Numbers"));
var no3 = Number(prompt("Enter your " + subject3 + " Numbers"));
var no4 = Number(prompt("Enter your " + subject4 + " Numbers"));
var no5 = Number(prompt("Enter your " + subject5 + " Numbers"));


var totalMarks = 100 * 5;
var obtainedMarks = no1 + no2 + no3 + no4 + no5;
var persentage = (obtainedMarks / totalMarks) * 100;

if (
    persentage >= 90
) { var grade = "Grade: A"; }
else if (
    persentage >= 80
) { var grade = "Grade: B"; }
else if (
    persentage >= 70
) { var grade = "Grade: C"; }
else if (
    persentage >= 60
) { var grade = "Grade: D"; }
else if (
    persentage < 60
) { var grade = "Your Are Fail"; }

alert(
    "Name: "+Name + "\n" +
    "Father's Name: " + fatherName + "\n" +
    "Roll Number: " + rollNumber + "\n" +
    subject1 + ": " + "100/" + no1 + "\n" +
    subject2 + ": " + "100/" + no2 + "\n" +
    subject3 + ": " + "100/" + no3 + "\n" +
    subject4 + ": " + "100/" + no4 + "\n" +
    subject5 + ": " + "100/" + no5 + "\n" +
    "totalMarks: " + totalMarks + "\n" +
    "obtainedMarks: " + obtainedMarks + "\n" +
    "persentage: " + persentage + "%" + "\n" +
    grade
);