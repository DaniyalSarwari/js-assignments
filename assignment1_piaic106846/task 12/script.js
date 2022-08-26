var usd = Number(prompt("Enter money in US Dollar: "));
var riyal = Number(prompt("Enter money in Saudi Riyal: "));

var totalCurrencyInPKR = (usd * 220.15) + (riyal * 58.60);  //used latest conversion rate 

document.getElementById("total-in-pkr").innerText = totalCurrencyInPKR;