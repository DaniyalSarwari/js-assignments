var firstNumber = Number(prompt("Enter first number: "));
var secondNumber = Number(prompt("Enter second number: "));
var operation = prompt("Enter operator (+,-,*,/,%): ");

if( operation === '+' )
    alert( firstNumber + secondNumber );
else if( operation === '-' )
    alert( firstNumber - secondNumber );
else if( operation === '*' )
    alert( firstNumber * secondNumber );
else if( operation === '/' )
    alert( firstNumber / secondNumber );
else if( operation === '%' )
    alert( firstNumber % secondNumber );