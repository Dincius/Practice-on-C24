
function adder() {
var summ = 0;
var average = 0;
for(var a = 0; a < 24; a++) {
    summ += parseInt(document.getElementById(a + 1).value);
}
average = summ / 6;
document.getElementById("summ").innerHTML = average;
}

function myFunction() {
  document.getElementById("myform").reset();
}
