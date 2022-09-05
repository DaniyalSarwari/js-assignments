
let aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
let o = ["th", "st", "nd", "rd"];


    if( o.includes("st") ){
        document.getElementById("choice-1").innerText = `1${ o[o.indexOf("st")] } choice is ${ aCities[0] }`
    }
    if( o.includes("nd") ){
        document.getElementById("choice-2").innerText = `2${ o[o.indexOf("nd")] } choice is ${ aCities[1] }`
    }
    if( o.includes("rd") ){
        document.getElementById("choice-3").innerText = `3${ o[o.indexOf("rd")] } choice is ${ aCities[2] }`
    }
    if( o.includes("th") ){
        document.getElementById("choice-4").innerText = `4${ o[o.indexOf("th")] } choice is ${ aCities[3] }`
    }