  function bmiend(){
  var w = document.getElementById('weight2').value;
  var y = document.getElementById('height2').value;
  var z = y/100
  var a = z*z
  var b = w/a
  var final;
    if (b < 18.5) {
      final = '低体重';
    } else if (b < 25) {
      final = '普通';
    } else {
      final = '肥満';
    }
alert('あなたのBMIは ' + b + ' です。この数値は' +final+ 'の範囲に分類されます。');
}
