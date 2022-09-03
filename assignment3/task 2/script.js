let studentNames = [];
let studentScore = [];

studentNames[0] = prompt("Enter first student name: ");
studentNames[1] = prompt("Enter second student name: ");
studentNames[2] = prompt("Enter third student name: ");

studentScore[0] = Number( prompt("Enter first student score: ") );
studentScore[1] = Number( prompt("Enter second student score: ") );
studentScore[2] = Number( prompt("Enter third student score: ") );

let totalMarks = 500;
let studentPercentage = [];

for( let index = 0; index < studentNames.length; index++ ){
    studentPercentage[index] = ( studentScore[index] / totalMarks ) * 100;
}

let studentContainer = document.getElementById("student-data");

for(let index = 0; index < studentNames.length; index++){
    studentContainer.innerHTML += `<h1>Score of ${ studentNames[index] } is ${ studentScore[index] }. Percentage: ${ studentPercentage[index] }% </h1>`;
}