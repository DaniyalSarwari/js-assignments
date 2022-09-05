let a = [10, 20, 4, 40, 60, 70];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("array-1").innerText = a;
document.getElementById("array-2").innerText = b;

let c = b.concat(a);

for( let i = 0 ; i < c.length ; i++ ){
    for( let j = i ; j < c.length ; j++ ){

        let index = c.indexOf( c[ i ], i+1 );
        
        if( index !== -1 ){
            c.splice( index,1 );
        }
        else{
            break;
        }
    }
}
document.getElementById("output").innerText = c;