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

function potAndsqrt(y){
let n3 = parseInt(document.getElementById('textboks3').value);
let n4 = parseInt(document.getElementById('textboks4').value);
let answer=1 ;
if (y=== "pot") {
for (let i=0; i < n4; i++ ){
  answer = answer * n3
}
document.getElementById("svar").value = answer;
return answer
}
else if (y ==="√") {
}

}
