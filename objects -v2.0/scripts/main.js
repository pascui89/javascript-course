function init() {
    // Las funciones son bloques de cógico reutilizables que se puedes invocar
    // desde cualquier punto de la aplicación y pueden tener o no variables
    // y devolver o no algún tipo de información.
    var result = callStack();
    console.log(result);
    callStackTwo('hello');

    // Variables, tipos
    var text = 'Hello';
    var number = 3;
    var condition = true;
    var array = [ text, number, condition ];
    console.log(array);

    var object = {
        'name': 'Fran',
        'age': 31
    };
    console.log(object);
    console.log(object.name);
    console.log(object.age);

    var users = [
        {
            'name': 'Fran',
            'age': 31
        },
        {
            'name': 'Jose',
            'age': 30
        },
        {
            'name': 'Pascu',
            'age': 32
        }
    ];
    console.log(users);
    console.log(users[1].name);
}

function iterateUser(data) {
    for (let index = 0; index < data.length; index++) {
        if (index === 1) {
            console.log(data[index].name);
        }        
    }
}

function callStack() {
    return 'hello';
}

function callStackTwo(name) {
    console.log(name);
}

console.log(callStack());
callStackTwo('hello');

init();