var inputTempInCelsius = Number(prompt("Enter temperature in Celsius: "));
var inputTempInFahrenheit = Number(prompt("Enter temperature in Fahrenheit: "));

var celsiusToFahrenheit = ( inputTempInCelsius * 9 / 5) + 32 ;
var fahrenheitToCelsius = ( inputTempInFahrenheit - 32 ) * 5 / 9;

document.getElementById("input-cel").innerText = inputTempInCelsius;
document.getElementById("cel-fah").innerText = celsiusToFahrenheit;

document.getElementById("input-fah").innerText = inputTempInFahrenheit;
document.getElementById("fah-cel").innerText = fahrenheitToCelsius;