var signalColor = prompt("Enter color of road traffic signal (red | green | yellow): ").toLowerCase();

if( signalColor === "red" )
    alert("Must Stop");
else if( signalColor === "green" )
    alert("Move now");
else if( signalColor === "yellow" )
    alert("Ready to move");