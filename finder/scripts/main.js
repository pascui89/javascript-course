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

function findUser() {
    setInformation();
    var filter = document.getElementById('filter').value;
    for (let index = 0; index < users.length; index++) {
        const currentUser = users[index];
        if (currentUser.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())) {
            setInformation(currentUser);
        }     
    }
}

function setInformation(user) {
    if (user) {
        document.getElementById('result').innerHTML = 'The user ' + user.name + ' exists';
    } else {
        document.getElementById('result').innerHTML = 'The user ' + user.name + ' do not exists';

    }
}

function comparar(nombre1, nombre2) {
    return nombre1 == nombre2;
}

function terminaEn(nombre1, nombre2) {
    // Comprueba que termina en
    return nombre1 == nombre2;
}