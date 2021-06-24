function init() {
    var nombres = ['Fran', 'Jose', 'Pascu', 'David'];
    for (let index = 0; index < nombres.length; index++) {
        switchFunction(nombres[index]);   
    }
    whileFunction();
}

function switchFunction(name) {
    switch (name) {
        //if (name == 'Fran')
        case 'Fran':
            console.log('Hola Fran');
            break;
        // else if (name == 'Pascu')
        case 'Pascu':
            console.log('Hola Pascu');
            break;
        // else if (name == 'Jose')
        case 'Jose':
            console.log('Hola Jose');
            break;
        // else
        default:
            console.log('Se salió del grupo');
            break;
    }
}

function whileFunction() {
    var numero = 0;
    while (numero < 5) {
        console.log(numero);
        numero = numero + 1;
    }
    var nombres = ['Fran', 'Jose', 'Pascu', 'David'];
    var index = 0;
    var nombreActual = nombres[index];
    while (nombreActual != 'David') {
        nombreActual = nombres[index];
        console.log(nombreActual);
        index = index + 1;
    }
}

init();