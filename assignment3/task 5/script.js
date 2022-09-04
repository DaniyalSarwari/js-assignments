// This will remove the the dublicate items from an array

let arr1 = [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ];  //sample array

document.getElementById("sample-array").innerText = arr1;

for( let i = 0 ; i < arr1.length ; i++ ){
    for( let j = i ; j < arr1.length ; j++ ){

        let index = arr1.indexOf( arr1[ i ], i+1 );
        
        if( index !== -1 ){
            arr1.splice( index,1 );
        }
        else{
            break;
        }
    }

}

document.getElementById("sample-output").innerText = arr1;