let a = [];
let b = [];
let c = [];
let d = [];
let e = [];

for( let index = 0; index < 20 ; index++ ){
    a.push( ( index + 1 ) );
}
document.getElementById("count").innerText = a;

b = b.concat(a);
b.splice(10);
b.reverse();
document.getElementById("reverse-count").innerText = b;

c = c.concat(a);
c.splice(11);
c = c.map(even);
function even( val ){
    return (val - 1) * 2;
}
document.getElementById("even").innerText = c;


d = d.concat(a);
//d.splice(10);
d = d.filter(odd);
function odd( val ){
    if ( val == 1 )
        return 1;
    else if ( val > 2){
        count = 0;
        for( let x = 0 ; x < val ; x++){
            if( val % x === 0 )
                count++;
        }
        return (count === 1)
    }
}
document.getElementById("odd").innerText = d;


e = e.concat(a);
e = e.map(multiplyByTwo);
function multiplyByTwo( num ){
    return (num - 1) + 2;
}
e = e.filter(divisibleByTwo)
function divisibleByTwo( num ){
    return num % 2 === 0;
}
e = e.map(joinK);
function joinK( eachVal ){
    return eachVal + 'k';
}
document.getElementById("series").innerText = e;