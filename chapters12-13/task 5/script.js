var correctPassword = "Alpha_123";
var inputPassword = prompt("Enter password: ");

if( inputPassword === "" )
    alert("Please enter your password");
else if( inputPassword === correctPassword )
    alert("Correct! password");
else
    alert("Incorrect password");