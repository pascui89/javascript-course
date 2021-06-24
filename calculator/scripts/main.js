function sum() {
    var numero1 = document.getElementById('inputNumber').value;
    var numero2 = document.getElementById('inputNumberTwo').value;
    var sumatoria = Number(numero1) + Number(numero2);
    document.getElementById('result').innerHTML = sumatoria;
}