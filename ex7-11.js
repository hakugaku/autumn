function year() {
    var year1 = Number(document.getElementById('year711').value);
    var result;
   if ((year1 % 4 == 0 && year1 % 100 != 0) || year1 % 400 == 0) {
        result = '閏年';
    } else {
        result = '平年';
    }
    alert('西暦' + year1 + '年は' + result + 'です。');
}
