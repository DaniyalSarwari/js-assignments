// sort an array from smallest to largest

let num_list = [ 20, 53, 78, 4, 91, 12 ];
document.getElementById("unsorted-array").innerText = num_list;

num_list.sort(compareTwoValue);
function compareTwoValue( first, second){
    return first - second;      //if -ve first sorted before second | +ve second sorted before first | if 0 same order

}
document.getElementById("sorted-array").innerText = num_list;