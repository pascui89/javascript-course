function operate() {
    var numero1 = document.getElementById('inputNumber').value;
    var numero2 = document.getElementById('inputNumberTwo').value;
    checkOperator(numero1, numero2);
}

function checkOperator(numero1, numero2) {
    if (document.getElementById('sum').checked == true) {
        document.getElementById('result').innerHTML = Number(numero1) + Number(numero2);
    } else if (document.getElementById('minus').checked == true) {
        document.getElementById('result').innerHTML = Number(numero1) - Number(numero2);
    } else if (document.getElementById('plus').checked == true) {
        document.getElementById('result').innerHTML = Number(numero1) * Number(numero2);
    } else if (document.getElementById('division').checked == true) {
        document.getElementById('result').innerHTML = Number(numero1) / Number(numero2);
    } else {
        alert('Select an operator');
    }
}