let qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
let orderListElement = document.getElementById("qualification-list");

for( let index = 0; index < qualification.length; index++ ){
    orderListElement.innerHTML += `<li> ${ qualification[index] } </li>`
}