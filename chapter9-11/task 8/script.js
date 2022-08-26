var inputNumber = Number(prompt("Enter Number: "));
var divisibilityCheck = inputNumber % 3;
// console.log(divisibilityCheck);
if( divisibilityCheck === 0 )
    alert("Yes the number is divisible by 3");
else
    alert("No the number is not divisible by 3");