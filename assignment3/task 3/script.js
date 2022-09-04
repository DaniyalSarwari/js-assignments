//This program focuses only to demonstrate the working with an array using associated methods
//Each section is a separate sub task that's why you may experience code redundency

let colorNames = ["red", "green", "blue"];
let inputColor;
document.getElementById("initial-list").innerText = colorNames;

//added user entered color at the beginning of an array
inputColor = prompt("What color you want to add to the beginning of an array?: ");
colorNames.unshift(inputColor);
document.getElementById("add-beginning").innerText = colorNames;

//added user entered color at the end of an array
inputColor = prompt("What color you want to add to the end of an array?: ");
colorNames.push(inputColor);
document.getElementById("add-end").innerText = colorNames;

//added two more color in an array
colorNames.unshift("pink", "brown");
document.getElementById("added-two-more").innerText = colorNames;

//deleting the first color in an array
colorNames.shift();
document.getElementById("del-first-element").innerText = colorNames;

//deleting the last element from an array
colorNames.pop();
document.getElementById("del-last-element").innerText = colorNames;

//add color at user entered location
let indexlocation = parseInt( prompt("Enter index number at which you want to add color:(0-4) ") ); 
inputColor = prompt("Enter color name: ");
colorNames.splice( indexlocation, 0, inputColor );
document.getElementById("user-in-color").innerText = colorNames;

//delete colors at user entered location
let startlocation = parseInt( prompt("At which index number you want to delete color:(0-5) ") ); 
let range = parseInt( prompt("How many colors you want to delete? ") ); 
colorNames.splice( startlocation, range );
document.getElementById("user-del-color").innerText = colorNames;