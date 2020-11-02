function udregning(x){
let n1 = parseInt(document.getElementById("textBoks1").value);
let n2 = parseInt(document.getElementById("textBoks2").value);
let result;
if (x === "+")
result = n1+n2;
else if (x === "-")
result = n1-n2;
else if (x === "*")
result = n1*n2;
else if (x === "/")
result = n1/n2;
document.getElementById("resultat").value = result;
}
