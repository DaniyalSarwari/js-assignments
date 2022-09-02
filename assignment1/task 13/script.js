var a = Number(prompt("Enter Number: "));

document.getElementById("a").innerText = a;

document.getElementById("pre-inc").innerText = ++a;
document.getElementById("pre-inc-val").innerText = a;

document.getElementById("post-inc").innerText = a++;
document.getElementById("post-inc-val").innerText = a;

document.getElementById("pre-dec").innerText = --a;
document.getElementById("pre-dec-val").innerText = a;

document.getElementById("post-dec").innerText = a--;
document.getElementById("post-dec-val").innerText = a;