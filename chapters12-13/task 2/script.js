// This program display the larger number
// Display both if both numbers are equal

var numberOne = Number(prompt("Enter number one: "));
var numberTwo = Number(prompt("Enter number two: "));

if( numberOne === numberTwo )
    alert( numberOne + " " + numberTwo );
else if( numberOne > numberTwo )
    alert( numberOne );
else if( numberTwo > numberOne )
    alert( numberTwo );