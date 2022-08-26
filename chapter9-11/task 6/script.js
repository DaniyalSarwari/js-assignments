
/*  
Assuming marksObtained <= totalMarks 
*/
var subjectOneMarks = Number(prompt("Enter marks of first subject: ")); 
var subjectTwoMarks = Number(prompt("Enter marks of second subject: "));
var subjectThreeMarks = Number(prompt("Enter marks of third subject: "));

var totalMarks = Number(prompt("Enter Total marks of subjects: "));  
var marksObtained = ( subjectOneMarks + subjectTwoMarks + subjectThreeMarks );
var percentage = ( marksObtained / totalMarks ) * 100;
var grade;
var remarks;

if( percentage >= 80 ){
    grade = "A-one";
    remarks = "Excellent";
}else if( (percentage >= 70) && (percentage < 80) ){
    grade = "A";
    remarks = "Good";
}else if( (percentage >= 60) && (percentage < 70) ){
    grade = "B";
    remarks = "You need to improve";
}else if( percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.getElementById("total-marks").innerText = totalMarks;
document.getElementById("marks-obtained").innerText = marksObtained;
document.getElementById("percentage").innerText = percentage;
document.getElementById("grade").innerText = grade;
document.getElementById("remarks").innerText = remarks;
