function year() {
    var year1 = Number(document.getElementById('year711').value);
    var result;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        result = '閏年';
    } else {
        result = '平年';
    }

    document.getElementById('result2').innerText = '西暦' + year711 + '年は' + result + 'です。';

    alert('西暦' + year711 + '年は' + result + 'です。');
}
