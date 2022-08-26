var input = prompt("Enter character: ");
var asciiValue = input.charCodeAt(0);

if( (asciiValue >= 48) && (asciiValue <= 57) )
    alert("Given character is a number");
else if( (asciiValue >= 65) && (asciiValue <= 90) )
    alert("Given character is a uppercase letter");
else if( (asciiValue >= 97) && (asciiValue <= 122) )
    alert("Given character is a lowercase letter");