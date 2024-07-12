// Funcion para reconocer y validar el nombre y apellido del cliente y saludarlo

let nombreCliente = validarNombre()

let apellidoCliente = validarApellido()

function saludarCliente(nombre, apellido) {
            alert(`Hola ${nombre} ${apellido}, bienvenido al consultorio , te invitamos a seguir con el cuestionario para que puedas aligerar tu visita de hoy`)
        }
saludarCliente(nombreCliente, apellidoCliente)

function validarNombre(nombreCliente) {
    nombreCliente = prompt("Ingrese su nombre por favor")
    while (nombreCliente.length < 3) {
        alert("Su nombre debe tener al menos 3 caracteres")
        nombreCliente = prompt("Ingrese su nombre por favor")
    }
    return nombreCliente
}

function validarApellido(apellidoCliente) {
    apellidoCliente = prompt("Ingrese su apellido por favor")
    while (apellidoCliente.length < 3) {
        alert("Su apellido debe tener al menos 3 caracteres")
        apellidoCliente = prompt("Ingrese su apellido por favor")
    }
    return apellidoCliente
}



// Condicional para que el cliente nos pueda indicar el horario de su turno y que devuelva con que doctor se va a atender
let turno = Number(prompt("Ingrese el horario de su turno (sin utilizar , ni . y entendiendo que el horario es de 1 a 24 hs)"))

if (turno === 24 || (turno > 0 && turno <= 6)) {
    alert("Usted sera atendido por el Dr. Gonzalez")
} else if (turno > 6 && turno <= 12) {
    alert("Usted sera atendido por el Dr. Rodriguez")
} else if (turno > 12 && turno <= 18) {
    alert("Usted sera atendido por el Dr. Martinez")
} else if (turno > 18 && turno <= 23) {
    alert("usted sera atendido por el Dr. Gutierrez")
} else {
    alert("Horario u opcion incorrecta.")

    turno = Number(prompt("Ingrese el horario de su turno (sin utilizar , ni . y entendiendo que el horario es de 1 a 24 hs)"))
    if (turno === 24 || (turno > 0 && turno <= 6)) {
        alert("Usted será atendido por el Dr. Gonzalez");
    } else if (turno > 6 && turno <= 12) {
        alert("Usted será atendido por el Dr. Rodriguez");
    } else if (turno > 12 && turno <= 18) {
        alert("Usted será atendido por el Dr. Martinez");
    } else if (turno > 18 && turno <= 23) {
        alert("Usted será atendido por el Dr. Gutierrez");
    } else {
        alert("Horario u opción incorrecta nuevamente. Consulte con el administrativo.");
    }
}



let consultorio = Number(prompt("Ingrese el nombre del doctor con quien usted debe atenderse para saber en que consultorio debe esperar. \n1)Dr Gonzalez. \n2)Dr Rodriguez. \n3)Dr Martinez. \n4)Dr Gutierrez \n0)Para salir."))


//Bucle donde debera indicarnos el nombre del doctor para saber en que consultorio debe esperar a ser atendido.
while (consultorio !== 0) {
    if (consultorio === 1) {
        alert("Usted debe esperar en el consultorio A")
        break;
    } else if (consultorio === 2) {
        alert("usted debe esperar en el consultorio B")
        break;
    } else if (consultorio === 3) {
        alert("Usted debe esperar en el consultorio C")
        break;
    } else if (consultorio === 4) {
        alert("Usted debera esperar en el consultorio D")
        break;
    } else {
        alert("la opcion ingresada es incorrecta")
        consultorio = Number(prompt("Ingrese el nombre del doctor con quien usted debe atenderse para saber en que consultorio debe esperar. \n1)Dr Gonzalez. \n2)Dr Rodriguez. \n3)Dr Martinez. \n4)Dr Gutierrez \n0)Para salir."))
    }

}

//Una ultima funcion para despedir al cliente.
function despedida(nombre, apellido) {
    alert(`Excelente ${nombreCliente} ${apellidoCliente}, ya tenes todos los datos necesarios para poder reconocer con que doctor y en que consultorio debes atenderte , que tengas un gran dia , saludos`)
}

despedida(nombreCliente, apellidoCliente)



//La aplicacion los que nos estaria facilitando es la informacion de con que doctor y en que consultorio debemos esperar a ser atendidos, suponiendo que ya solicito el horario de su turno posteriormente por telefono. agregue 2 fuciones , una de reconocimiento , donde se le pide al cliente su nombre y apellido , y se le da la bienvenida al sistema , donde debera cargar los datos solicitados y lo despide una segunda fucion que utiliza de parametros 2 variables ya solicitadas anteriormente.