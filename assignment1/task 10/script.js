var num;
document.getElementById("declare-variable").innerText = num;

num = 5;
document.getElementById("init-variable").innerText = num;

++num;
document.getElementById("inc-variable").innerText = num;

num += 7;
document.getElementById("add-variable").innerText = num;

--num;
document.getElementById("dec-variable").innerText = num;

num = num % 3;
document.getElementById("rem-value").innerText = num;
