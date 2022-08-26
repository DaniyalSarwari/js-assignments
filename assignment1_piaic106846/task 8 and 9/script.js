var firstNumber = parseInt(prompt("Enter first number: "));
var secondNumber = Number(prompt("Enter second number:"));
var sum = firstNumber + secondNumber;
var prod = firstNumber * secondNumber;
var sub = firstNumber - secondNumber;
var div = firstNumber / secondNumber;
var mod = firstNumber % secondNumber;

document.getElementById("sum").innerText = `Sum of ${firstNumber} and ${secondNumber} is ${sum}`;
document.getElementById("prod").innerText = `Product of ${firstNumber} and ${secondNumber} is ${prod}`;
document.getElementById("sub").innerText = `Subtraction of ${firstNumber} and ${secondNumber} is ${sub}`;
document.getElementById("div").innerText = `Division of ${firstNumber} and ${secondNumber} is ${div}`;
document.getElementById("mod").innerText = `Modulus of ${firstNumber} and ${secondNumber} is ${mod}`;