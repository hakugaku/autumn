function bmi(){
  var w = document.getElementById('weight').value;
  var y = document.getElementById('height').value;
  var z = y/100
  var a = z*z
  var b = w/a
  alert(b);
}
