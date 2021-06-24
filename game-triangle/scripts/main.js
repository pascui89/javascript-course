function draw() {
    if (isCorrectValue()) {
        var number = Number(document.getElementById('rows').value);
        triangle(number);
    }
}

function triangle(number) {
    var result = '';
    for (let row = 0; row < number; row++) {
        result = result + retrieveString(row) + '<br>';
    }
    document.getElementById('result').innerHTML = result;
}

function retrieveString(rowLength) {
    var asterisc = '';
    for (let column = 0; column <= rowLength; column++) {
        asterisc = asterisc + '*';
    }
    return asterisc;
}

function isCorrectValue() {
    var number = Number(document.getElementById('rows').value);
    if (number > 150) {
        document.getElementById('result').innerHTML = 'Max number value exceded';
    }
    return number < 150;
}