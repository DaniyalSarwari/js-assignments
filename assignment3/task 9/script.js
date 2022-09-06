// find the largest number

let num_list = [ 24, 53, 78, 91, 12 ];
document.getElementById("ini-array").innerText = num_list;

let largest_number = num_list[0];
for( let i = 0; i < num_list.length; i++ ){
    for( let j = i + 1; j < num_list.length; j++ ){
        largest_number = ( num_list[j] > largest_number ) ? num_list[j] : largest_number;
    }
}

document.getElementById("largest-num").innerText = largest_number;