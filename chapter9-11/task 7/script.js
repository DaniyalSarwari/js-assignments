var secretNumber = Math.floor(Math.random() * 10) + 1;  //range from 1 - 10
var guessNumber = Number(prompt("Guess secret number: "));

if( guessNumber === secretNumber)
    alert("Bingo! Correct answer");
else if( (( guessNumber + 1 )  === secretNumber) || (( guessNumber - 1 )  === secretNumber) )  // pre/post increment/decrement with unary operator change the original value
    alert("Close enough to the correct answer");
else
    alert("Try again");
