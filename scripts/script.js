var total = 0;
var average = 0;

function adder() {
  var sk1 = parseInt(document.getElementById("num1").value);
  var sk2 = parseInt(document.getElementById("num2").value);
  var sk3 = parseInt(document.getElementById("num3").value);
  var sk4 = parseInt(document.getElementById("num4").value);
  var sk5 = parseInt(document.getElementById("num5").value);
  var sk6 = parseInt(document.getElementById("num6").value);
  total = sk1 + sk2 + sk3 + sk4 + sk5 + sk6;
  average = total / 6;
  document.getElementById("p1").innerHTML = average;
}
