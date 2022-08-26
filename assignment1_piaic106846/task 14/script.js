var a = 2, b = 1;
var result = --a - --b + ++b + b--;
/*-------------------------------
Explain the output at each stage:
--------------------------------- */

/* -----if we execute one statement at a time then----- 
result = --a;                     // a = 1 | result = 1 (pre-dec)
result = --a - --b;               // a = 1 | b = 0 | result = 0 (compute pre-dec values)
result = --a - --b + ++b;         // a = 1 | b = 1 | result = 2
result = --a - --b + ++b + b--;   // a = 1 | b = 0 | result = 3
*/

document.getElementById("val-a").innerText = a;
document.getElementById("val-b").innerText = b;
document.getElementById("result").innerText = result;