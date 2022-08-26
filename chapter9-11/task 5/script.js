/* var a = 4;
if(++a === 5)   // first increment then compare
{
    alert("true");
} */

/* var b = 82;
if(b++ === 83) // first value of b=82 will be compared to 83 then increment 'b'
{
    alert("true");
}
 */


/* var c = 12;
if(c++ === 13) // false | first value of 'c=12' will be compared to 13 then increment 'c'
{
    alert("condition 1 is true");
}
if( c === 13 ) // true | because the value of 'c' is incremented in previous condition 'c=13'
{
    alert("condition 2 is true");
}
if( ++c < 14 ) // false | 'c=14' here
{
    alert("condition 3 is true");
}
if( c === 14 ) // true | 'c=14' here
{
    alert("condition 4 is true");
} */

/* var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if( totalCost === laborCost + materialCost ) //true | doesn't matter the order of addition
    alert("The cost equals");
 */

if( "car" < "cat" )     // true | in string it start comparing character by character from ASCII sequence 
    alert("car is smaller than cat");
