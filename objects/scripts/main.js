function init() {
    console.log(check('Renekton'));
    console.log(check('LeeSin'));
    console.log(check('asdasd'));
    iterator();
    newIterator('d');
    newIterator('F');
}

// Comprobar bloque if
function check(name) {
    if (name === 'Renekton') {
        return 'Es un cocodrilo';
    } else if (name === 'LeeSin') {
        return 'Se la marca';
    }
    return '';
}

function iterator() {
    var letters = [ 'a', 'b', 'c', 'd', 'e' ];
    for (var index = 0; index < letters.length; index++) {
        console.log(letters[index]);
    }
}


// Función que recorra un array y solo imprima en consola el valor que sea igual
// a la variable que recibe como parámetro.
function newIterator(value) {
    var data = [ 'a', 'b', 'c', 'd', 'e' ];
    for (var index = 0; index < data.length; index++) {
        if(data[index] === value) {
            console.log(value);
        }
    }
}

init();