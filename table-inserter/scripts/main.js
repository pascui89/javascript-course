/*
QUIERO JUGAR A UN JUEGO.
    En el siguiente ejercicio tendrás que:
    - Revisar la documentación de bootstrap para aprender cómo funcionan las tablas
        https://getbootstrap.com/docs/5.0/content/tables/
    - Arreglar los posibles fallos.
    - Completar el código, ve siguiente las instrucciones.
*/

// Crear array de objets de este tipo.
var userList = [ 
    /*
    "name": "Gandalf El Gris",
    "age": 1000
    */
 ];

/*
Función utiizada para añadir usuarios, deberá guardar la información de los
usuarios y repintar la tabla.
*/
function addUser() {
    //Nuestra función aquí será recoger los valores del formulario y crear un
    //objeto para poner introducirlo en el array con un user.push()
    var name = document.getElementById("inputName").value;
    var age = document.getElementById('inputAge').value;

    if (validate(name, age)) {
        var user = {
            'name': name,
            'age': age
        }
        userList.push(user);
        drawTable(userList);
        // Setea el valor de userList del localStorage y lo parsea a Json
        localStorage.setItem('userList', JSON.stringify(userList));
    }

}

// Función para validar que los campos estén rellenos.
function validate(name, age) {
    if (document.getElementById('messageAlert')) {
        document.getElementById('messageAlert').remove();
    }
    if (name == '' || age == '') {
        showAlert();
        return false;
    }
    return true;
}

function drawTable(userArray) {
    //Ejemplo de cómo podemos crear un nuevo elemento html, por ejemplo un td
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    // Iteramos el array
    for (let index = 0; index < userArray.length; index++) {
        const user = userArray[index];
        // Creamos fila
        var row = document.createElement("tr");
        row.onclick = () => remove(index);
        
        // Creamos columna de nombre
        var columnIndex = createColumn(index + 1);
        // Intertamos la columna en la fila
        row.appendChild(columnIndex);

        // Creamos columna de nombre
        var column = createColumn(user.name);    
        // Intertamos la columna en la fila
        row.appendChild(column);
    
        // Creamos columna de edad
        var column2 = createColumn(user.age);
        column2.className = 'text-center';
        // Intertamos la columna2 en la fila
        row.appendChild(column2);
    
        tableBody.appendChild(row);
    }

}

function createColumn(text) {
    var column = document.createElement("td");
    // Insertamos el nombre del objeto en la columna nombre
    column.appendChild(document.createTextNode(text));
    column.className = 'text-center';
    return column;
}

function remove(index) {
    if(confirm('Do you want to delete the following index: '.concat(index, '?'))) {
        userList.splice(index, 1);
        localStorage.setItem('userList', JSON.stringify(userList));
        drawTable(userList);
    }
}

function init() {
    // Fuerza a que la página espere a que todo esté cargado
    document.addEventListener('DOMContentLoaded', function () {
        if (localStorage.getItem('userList') != null) {
            // Recupera el valor de userList del localStorage y lo parsea a Json
            userList = JSON.parse(localStorage.getItem('userList'));
        }
        drawTable(userList);
    });
}

// Función que muestra la alerta.
function showAlert() {
    var divContainer = document.getElementById('container');
    var icon = document.createElement("i");
    icon.className = 'bi bi-exclamation-diamond';
    var divMessage = document.createElement("div");
    divMessage.className = 'ms-1';
    divMessage.appendChild(document.createTextNode('You shall fill the information below.'));
    var divParent = document.createElement("div");
    divParent.className = 'alert alert-danger d-flex align-items-center';
    divParent.appendChild(icon);
    divParent.appendChild(divMessage);
    divParent.id = 'messageAlert';
    divContainer.appendChild(divParent);
}

init();